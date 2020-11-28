#! /usr/bin/env node
const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

function usage() {
  console.log('Usage: create-question.js 66116:2018:03 1 1 1')
  console.log('66116:2018:03 1 1 1 -> 66116/2018/03/Thema-1/Teilaufgabe-1/Aufgabe-1.tex')
  process.exit(1)
}

if (process.argv.length !== 6) {
  usage()
}

const examen = process.argv[2].split(':')
const examensNummer = examen[0]
const jahr = examen[1]
const monat = examen[2]

if (!examensNummer || !jahr || !monat) {
  usage()
}

const vorlage =
`\\documentclass{lehramt-informatik-minimal}
\\InformatikPakete{}
\\begin{document}

\\end{document}
`

const themaNummer = process.argv[3]
const thema = `Thema-${themaNummer}`
const teilAufgabeNummer = process.argv[4]
const teilAufgabe = `Teilaufgabe-${teilAufgabeNummer}`
const aufgabeNummer = process.argv[5]
const aufgabe = `Aufgabe-${aufgabeNummer}.tex`

const zielPfad = path.join(__dirname, '..', 'Staatsexamen', examensNummer, jahr, monat, thema, teilAufgabe, aufgabe)
console.log(zielPfad)

fs.mkdirSync(path.dirname(zielPfad), { recursive: true })
if (!fs.existsSync(zielPfad)) {
  fs.writeFileSync(zielPfad, vorlage, { encoding: 'utf-8' })
}

const subprocess = childProcess.spawn('/usr/bin/code', [zielPfad], {
  detached: true,
  stdio: 'ignore'
})

subprocess.unref()

console.log(`\n\\ExamensAufgabe ${examensNummer} / ${jahr} / ${monat} : Thema ${themaNummer} Teilaufgabe ${teilAufgabeNummer} Aufgabe ${aufgabeNummer}`)
