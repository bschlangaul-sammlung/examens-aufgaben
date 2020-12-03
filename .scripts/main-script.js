#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

const glob = require('glob')

const examTitles = {
  46110: 'Grundlagen der Informatik (nicht vertieft)',
  46111: 'Programmentwicklung / Systemprogrammierung / Datenbanksysteme (nicht vertieft)',
  46112: 'Grundlagen der Informatik (nicht vertieft)',
  46113: 'Theoretische Informatik (nicht vertieft)',
  46114: 'Algorithmen / Datenstrukturen / Programmiermethoden (nicht vertieft)',
  46115: 'Theoretische Informatik / Algorithmen / Datenstrukturen (nicht vertieft)',
  46116: 'Softwaretechnologie / Datenbanksysteme (nicht vertieft)',
  46118: 'Fachdidaktik (Mittelschulen)',
  46119: 'Fachdidaktik (Realschulen)',
  46121: 'Fachdidaktik (berufliche Schulen)',
  66110: 'Automatentheorie, Algorithmische Sprache (vertieft)',
  66111: 'Betriebssysteme / Datenbanksysteme / Rechnerarchitektur (vertieft)',
  66112: 'Automatentheorie / Komplexität / Algorithmen (vertieft)',
  66113: 'Rechnerarchitektur / Datenbanken / Betriebssysteme (vertieft)',
  66114: 'Datenbank- und Betriebssysteme (vertieft)',
  66115: 'Theoretische Informatik / Algorithmen (vertieft)',
  66116: 'Datenbanksysteme / Softwaretechnologie (vertieft)',
  66118: 'Fachdidaktik (Gymnasium)'
}

function open (executable, filePath) {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function generateExamBasePath (number, year, month) {
  return path.join(__dirname, '..', 'Staatsexamen', number, year, month)
}

function generateQuestionPath (arg1, arg2, arg3) {
  if (arg1 && arg2 && arg3) {
    return path.join(`Thema-${arg1}`, `Teilaufgabe-${arg2}`, `Aufgabe-${arg3}.tex`)
  } else if (arg1 && arg2 && !arg3) {
    return path.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`)
  } else {
    return `Aufgabe-${arg1}.tex`
  }
}

function generateTeXMacro (exam, arg1, arg2, arg3) {
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

function splitExamRef (ref) {
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

function formatMarkdownLink (text, relPath) {
  return `[${text}](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/${relPath})`
}

const { Command } = require('commander')
const program = new Command()
program.version('0.1.0')

function actionHelp () {
  console.log('Specify a subcommand.')
  program.outputHelp()
  process.exit(1)
}

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

function checkNumber (number) {
  number = parseInt(number)
  if (number) return number
}

program
  .command('create-question <ref> <part-no> [sub-question-no] [question-no]')
  .description('Create a exam question template in the right directory folder: 66116:2020:09')
  .alias('c')
  .action(function (ref, arg1, arg2, arg3, cmdObj) {
    arg1 = checkNumber(arg1)
    arg2 = checkNumber(arg2)
    arg3 = checkNumber(arg3)

    const exam = splitExamRef(ref)
    const questionPath = path.join(
      generateExamBasePath(exam.number, exam.year, exam.month),
      generateQuestionPath(arg1, arg2, arg3)
    )

    const template =
      '\\documentclass{lehramt-informatik-minimal}\n' +
      '\\InformatikPakete{}\n' +
      '\\begin{document}\n' +
      '\n' +
      '\\end{document}\n'

    fs.mkdirSync(path.dirname(questionPath), { recursive: true })
    if (!fs.existsSync(questionPath)) {
      fs.writeFileSync(questionPath, template, { encoding: 'utf-8' })
    }
    open('/usr/bin/code', questionPath)
    console.log(generateTeXMacro(exam, arg1, arg2, arg3))
  })

program
  .command('open-exam <ref>')
  .description('Open a exam scan: 66116:2020:09')
  .alias('o')
  .action(function (ref, cmdObj) {
    const exam = splitExamRef(ref)
    const examPath = path.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf')
    if (fs.existsSync(examPath)) {
      open('/usr/bin/xdg-open', examPath)
    } else {
      console.log(`Path ${examPath} doesn’t exist.`)
    }
  })

function collectIndexes () {
  const files = glob.sync('**/*.tex')
  const indexes = {}
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const re = /\\index\{([^\}]*)\}/g
    let match
    do {
      match = re.exec(content)
      if (match) {
        indexes[match[1]] = filePath
      }
    } while (match)
  }
  return indexes
}

function parseQuestions(relPath) {
  const files = glob.sync('**/*.tex', { cwd: relPath })
  console.log(files)
}

program
  .command('generate-readme')
  .description('Generate the readme file')
  .alias('r')
  .action(function (cmdObj) {
    function fileLink (relPath, fileName) {
      return formatMarkdownLink(fileName, path.join(relPath, fileName))
    }
    for (const examNumber in examTitles) {
      console.log(`\n### ${examNumber}: ${examTitles[examNumber]}\n`)
      const examNumberPath = path.join('Staatsexamen', examNumber)
      const yearDirs = fs.readdirSync(examNumberPath)
      for (const year of yearDirs) {
        const yearPath = path.join(examNumberPath, year)
        const monthDirs = fs.readdirSync(yearPath)
        for (const mount of monthDirs) {
          const monthPath = path.join(yearPath, mount)
          console.log(`- ${fileLink(monthPath, 'Scan.pdf')} ${fileLink(monthPath, 'OCR.txt')}`)
          parseQuestions(monthPath)
        }
      }
    }
  })

program.parse(process.argv)
