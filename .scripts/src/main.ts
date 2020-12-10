#! /usr/bin/env node

import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'

import glob from 'glob'

import { Command } from 'commander'

import { stichwortVerzeichnis } from './stichwort-verzeichnis'
import { Aufgabe, ExamensAufgabe } from './aufgabe'
import { generiereExamensÜbersicht } from './examen'
import { repositoryPfad, leseRepoDatei } from './helfer'
import { erzeugeAufgabenVorlage } from './aufgaben-vorlage'

/*******************************************************************************
 * low level functions
 ******************************************************************************/

function öffneProgramm (executable: string, filePath: string): void {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function öffneVSCode (filePath: string) {
  öffneProgramm('/usr/bin/code', filePath)
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
        titel
      })
    }
    öffneVSCode(pfad)
  })

program
  .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
  .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
  .alias('e')
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
    öffneVSCode(questionPath)
    console.log(generateTeXMacro(exam, arg1, arg2, arg3))
  })

/*******************************************************************************
 * open-exam
 ******************************************************************************/

program
  .command('oeffne-examen <referenz>')
  .description('Öffne eine Staatsexamen mit der Referenz, z. B. 66116:2020:09')
  .alias('o')
  .action(function (ref: string, cmdObj: object): void {
    const exam = splitExamRef(ref)
    const examPath = path.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf')
    if (fs.existsSync(examPath)) {
      öffneProgramm('/usr/bin/xdg-open', examPath)
    } else {
      console.log(`Path ${examPath} doesn’t exist.`)
    }
  })

/*******************************************************************************
 * generate-readme
 ******************************************************************************/

function generiereMarkdownAufgabenListe (aufgabenListe: Set<Aufgabe>): string {
  const aufgaben = Array.from(aufgabenListe)
  aufgaben.sort(Aufgabe.vergleichePfade)
  const item = []
  for (const aufgabe of aufgaben) {
    item.push('- ' + aufgabe.markdownLink)
  }
  return item.join('\n')
}

function ersetzeStichwörterInReadme (inhalt: string): string {
  return inhalt.replace(/\{\{ stichwort "([^"]*)" \}\}/g, function (wholeMatch, stichwort) {
    return generiereMarkdownAufgabenListe(stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort))
  })
}

program
  .command('generiere-readme')
  .description('Generiere die README-Datei')
  .alias('r')
  .action(function (cmdObj: object) {
    let inhalt = leseRepoDatei('README_template.md')

    inhalt = ersetzeStichwörterInReadme(inhalt)

    const stichwörterInhalt = leseRepoDatei('Stichwortverzeichnis.yml')
    inhalt = inhalt.replace('{{ stichwortverzeichnis }}', stichwörterInhalt)

    inhalt = inhalt.replace('{{ staatsexamen }}', generiereExamensÜbersicht())
    // console.log(readmeContent)
    fs.writeFileSync(path.join(repositoryPfad, 'README.md'), inhalt)
  })

/*******************************************************************************
 * compile-questions
 ******************************************************************************/

program
  .command('kompiliere-aufgaben')
  .description('Kompiliere alle TeX-Dateien der Aufgaben.')
  .alias('k')
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
          öffneVSCode(filePath)
          throw new Error(`Error compiling ${filePath}`)
        }
      }
    }
  })

/*******************************************************************************
 * vscode
 ******************************************************************************/

program
  .command('code [glob]')
  .alias('c')
  .description('Öffne die mit glob spezifizierten Dateien in Visual Studio Code')
  .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
  .action(function (globPattern: string, cmdObj: { [schlüssel: string]: any }): void {
    function öffneMitAusgabe (pfad: string) {
      console.log(pfad)
      öffneVSCode(pfad)
    }

    if (typeof globPattern !== 'string') {
      globPattern = '**/*.tex'
    }
    const dateien = glob.sync(globPattern)
    for (let dateiPfad of dateien) {
      dateiPfad = path.resolve(dateiPfad)
      if (cmdObj.keinindex) {
        const aufgabe = new Aufgabe(dateiPfad)
        if (aufgabe.stichwörter.length == 0) öffneMitAusgabe(dateiPfad)
      } else {
        öffneMitAusgabe(dateiPfad)
      }
    }
  })

program.parse(process.argv)
