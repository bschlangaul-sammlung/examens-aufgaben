#! /usr/bin/env node

import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'

import glob from 'glob'

import { Command } from 'commander'

import { stichwortVerzeichnis } from './stichwort-verzeichnis'
import { Aufgabe, ExamensAufgabe } from './aufgabe'
import { generiereExamensÜbersicht } from './staatsexamen'
import { repositoryPfad, leseRepoDatei } from './helfer'
import { erzeugeAufgabenVorlage } from './aufgaben-vorlage'

/*******************************************************************************
 * low level functions
 ******************************************************************************/

function openWithExecutable (executable: string, filePath: string): void {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function openCode (filePath: string) {
  openWithExecutable('/usr/bin/code', filePath)
}

function generateExamBasePath (number: string, year: string, month: string): string {
  return path.join(repositoryPfad, 'Staatsexamen', number, year, month)
}

function generateQuestionPath (arg1: number, arg2?: number, arg3?: number): string {
  if (arg1 && arg2 && arg3) {
    return path.join(`Thema-${arg1}`, `Teilaufgabe-${arg2}`, `Aufgabe-${arg3}.tex`)
  } else if (arg1 && arg2 && !arg3) {
    return path.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`)
  } else {
    return `Aufgabe-${arg1}.tex`
  }
}

interface Exam {
  number: string
  year: string
  month: string
}

function generateTeXMacro (exam: Exam, arg1: string, arg2?: string, arg3?: string) {
  let questionMarkup = ''
  let macroSuffix = ''
  const examMarkup = `${exam.number} / ${exam.year} / ${exam.month} :`
  if (arg1 && arg2 && arg3) {
    questionMarkup = `Thema ${arg1} Teilaufgabe ${arg2} Aufgabe ${arg3}`
    macroSuffix = 'TTA'
  } else if (arg1 && arg2 && !arg3) {
    questionMarkup = `Thema ${arg1} Aufgabe ${arg2}`
    macroSuffix = 'TA'
  } else {
    questionMarkup = `Aufgabe ${arg1}`
    macroSuffix = 'A'
  }
  return `\n\\ExamensAufgabe${macroSuffix} ${examMarkup} ${questionMarkup}`
}

function splitExamRef (ref: string) {
  const exam = ref.split(':')
  if (exam.length !== 3) {
    console.log('Exam ref has to be in this format: 66116:2020:09')
    process.exit(1)
  }
  return {
    number: exam[0],
    year: exam[1],
    month: exam[2]
  }
}

const program = new Command()
program.description(`Repository path: ${repositoryPfad}`)
program.name('lehramt-informatik.js')
program.version('0.1.0')

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

/*******************************************************************************
 * create-question
 ******************************************************************************/

function checkNumber (number: string | number): number | undefined {
  if (typeof number === 'string') { number = parseInt(number) }
  if (number) return number
}

program
  .command('erzeuge-aufgabe [titel]')
  .description('Erzeuge eine Aufgabe im aktuellen Arbeitsverzeichnis.')
  .alias('a')
  .action(function (titel: string, cmdObj: object): void {
    let dateiName = 'Aufgabe_'
    if (titel) {
      const titelRein = titel.replace(/\s+/g, '-')
      dateiName = `${dateiName}${titelRein}`
    }
    const pfad = path.join(process.cwd(), `${dateiName}.tex`)
    if (!fs.existsSync(pfad)) {
      erzeugeAufgabenVorlage(pfad, {
        zitatReferenz: 'ref',
        titel
      })
    }
    openCode(pfad)
  })

program
  .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
  .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
  .alias('c')
  .action(function (ref: string, arg1: string, arg2: string, arg3: string, cmdObj: object): void {
    const num1 = checkNumber(arg1)
    const num2 = checkNumber(arg2)
    const num3 = checkNumber(arg3)

    if (!num1) {
      throw Error(`Undefined ${num1}`)
    }

    const exam = splitExamRef(ref)
    const questionPath = path.join(
      generateExamBasePath(exam.number, exam.year, exam.month),
      generateQuestionPath(num1, num2, num3)
    )

    erzeugeAufgabenVorlage(questionPath, {
      zitatReferenz: ref
    })
    openCode(questionPath)
    console.log(generateTeXMacro(exam, arg1, arg2, arg3))
  })

/*******************************************************************************
 * open-exam
 ******************************************************************************/

program
  .command('open-exam <ref>')
  .description('Open a exam scan: 66116:2020:09')
  .alias('o')
  .action(function (ref: string, cmdObj: object): void {
    const exam = splitExamRef(ref)
    const examPath = path.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf')
    if (fs.existsSync(examPath)) {
      openWithExecutable('/usr/bin/xdg-open', examPath)
    } else {
      console.log(`Path ${examPath} doesn’t exist.`)
    }
  })

/*******************************************************************************
 * generate-readme
 ******************************************************************************/

function generiereMarkdownAufgabenListe (aufgabenListe: Set<Aufgabe>): string {
  const item = []
  for (const aufgabe of aufgabenListe) {
    item.push('- ' + aufgabe.markdownLink)
  }
  return item.join('\n')
}

function ersetzeStichwörterInReadme (inhalt: string): string {
  return inhalt.replace(/\{\{ stichwort "([\w\d- ]*)" \}\}/g, function (wholeMatch, stichwort) {
    return generiereMarkdownAufgabenListe(stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort))
  })
}

program
  .command('generate-readme')
  .description('Generate the readme file')
  .alias('r')
  .action(function (cmdObj: object) {
    let readmeContent = leseRepoDatei('README_template.md')

    readmeContent = ersetzeStichwörterInReadme(readmeContent)

    const tagsContent = leseRepoDatei('Stichwortverzeichnis.yml')
    readmeContent = readmeContent.replace('{{ stichwortverzeichnis }}', tagsContent)

    readmeContent = readmeContent.replace('{{ staatsexamen }}', generiereExamensÜbersicht())
    // console.log(readmeContent)
    fs.writeFileSync(path.join(repositoryPfad, 'README.md'), readmeContent)
  })

/*******************************************************************************
 * compile-questions
 ******************************************************************************/

program
  .command('compile-questions')
  .description('Compile all questions')
  .alias('q')
  .action(function (cmdObj: object) {
    const staatsexamenPath = path.join(repositoryPfad, 'Staatsexamen')
    const files = glob.sync('**/*.tex', { cwd: staatsexamenPath })
    for (let filePath of files) {
      filePath = path.join(staatsexamenPath, filePath)
      if (filePath.match(ExamensAufgabe.schwacherPfadRegExp)) {
        console.log(filePath)
        const result = childProcess.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', filePath], {
          encoding: 'utf-8'
        })

        if (result.status !== 0) {
          console.log(result.stdout)
          console.log(result.stderr)
          openCode(filePath)
          throw new Error(`Error compiling ${filePath}`)
        }
      }
    }
  })

/*******************************************************************************
 * vscode
 ******************************************************************************/

program
  .command('vscode [glob]')
  .alias('vsc')
  .description('Open in Visual Studio Code')
  .option('-n, --notag', 'Open only questions without an tag macro in it.')
  .action(function (globPattern: string, cmdObj: { [schlüssel: string]: any }): void {
    function openWithLogging (filePath: string) {
      console.log(filePath)
      openCode(filePath)
    }

    if (typeof globPattern !== 'string') {
      globPattern = '**/*.tex'
    }
    const files = glob.sync(globPattern)
    for (let filePath of files) {
      filePath = path.resolve(filePath)
      if (cmdObj.notag) {
        const aufgabe = new Aufgabe(filePath)
        if (aufgabe.stichwörter.length == 0) openWithLogging(filePath)
      } else {
        openWithLogging(filePath)
      }
    }
  })

program.parse(process.argv)
