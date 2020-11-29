#! /usr/bin/env node
const path = require('path')
const childProcess = require('child_process')

function usage() {
  console.log('Usage: open-exam-scan.js 66116:2018:03')
  process.exit(1)
}

if (process.argv.length !== 3) {
  usage()
}

const examen = process.argv[2].split(':')
const examensNummer = examen[0]
const jahr = examen[1]
const monat = examen[2]

if (!examensNummer || !jahr || !monat) {
  usage()
}

const zielPfad = path.join(__dirname, '..', 'Staatsexamen', examensNummer, jahr, monat, 'Scan.pdf')

const subprocess = childProcess.spawn('/usr/bin/xdg-open', [zielPfad], {
  detached: true,
  stdio: 'ignore'
})

subprocess.unref()
