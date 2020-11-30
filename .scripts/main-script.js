#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

function open(executable, filePath) {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function generateExamBasePath (number, year, month) {
  return path.join(__dirname, '..', 'Staatsexamen', number, year, month)
}

function generateQuestionPath (partNo, subPartNo, questionNo) {
  const part = `Thema-${partNo}`
  const subPart = `Teilaufgabe-${subPartNo}`
  const question = `Aufgabe-${questionNo}.tex`

  return path.join(part, subPart, question)
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

const { Command } = require('commander');
const program = new Command();
program.version('0.1.0');

function actionHelp () {
  console.log('Specify a subcommand.')
  program.outputHelp()
  process.exit(1)
}

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

program
  .command('create-question <ref> <part-no> <sub-question-no> <question-no>')
  .description('Create a exam question template in the right directory folder: 66116:2020:09')
  .alias('c')
  .action(function (ref, partNo, subPartNo, questionNo, cmdObj) {
    const exam = splitExamRef(ref)
    const questionPath = path.join(
      generateExamBasePath(exam.number, exam.year, exam.month),
      generateQuestionPath(partNo, subPartNo, questionNo)
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
    console.log(`\n\\ExamensAufgabe ${exam.number} / ${exam.year} / ${exam.month} : Thema ${partNo} Teilaufgabe ${subPartNo} Aufgabe ${questionNo}`)

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

program.parse(process.argv)
