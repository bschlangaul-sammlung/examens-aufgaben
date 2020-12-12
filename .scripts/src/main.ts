#! /usr/bin/env node

import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'

import glob from 'glob'

import { Command } from 'commander'

import { Aufgabe, ExamensAufgabe } from './aufgabe'
import { repositoryPfad } from './helfer'
import { examenSammlung } from './sammlung'

import { erzeugeAufgabenVorlage } from './aktionen/erzeuge-aufgaben-vorlage'
import { erzeugeReadme } from './aktionen/erzeuge-readme'
import { erzeugeExamensAufgabeVorlage } from './aktionen/erzeuge-examens-aufgabe-vorlage'
import { führeSqlAus } from './aktionen/fuehre-sql-aus'

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

const programm = new Command()
programm.description(`Repository-Pfad: ${repositoryPfad}`)
programm.name('lehramt-informatik.js')
programm.version('0.1.0')

programm.on('command:*', function () {
  console.error('Ungültiger Befehlt: %s\nBenutze das Argument --help, um eine Liste der verfügbaren Befehle anzuzeigen.', programm.args.join(' '))
  process.exit(1)
})

programm
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

programm
  .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
  .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
  .alias('e')
  .action(function (ref: string, arg1: string, arg2: string, arg3: string): void {
    const pfad = erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3)
    öffneVSCode(pfad)
  })

programm
  .command('oeffne-examen <referenz>')
  .description('Öffne eine Staatsexamen durch die Referenz, z. B. 66116:2020:09.')
  .alias('o')
  .action(function (ref: string, cmdObj: object): void {
    const examen = examenSammlung.gibDurchReferenz(ref)
    if (fs.existsSync(examen.pfad)) {
      öffneProgramm('/usr/bin/xdg-open', examen.pfad)
    } else {
      console.log(`Path ${examen.pfad} doesn’t exist.`)
    }
  })

programm
  .command('generiere-readme')
  .description('Erzeuge die README-Datei.')
  .alias('r')
  .action(erzeugeReadme)

programm
  .command('kompiliere-aufgaben')
  .description('Kompiliere alle TeX-Dateien der Aufgaben.')
  .alias('k')
  .action(function (cmdObj: object) {
    const staatsexamenPath = path.join(repositoryPfad, 'Staatsexamen')
    const dateien = glob.sync('**/*.tex', { cwd: staatsexamenPath })
    for (let pfad of dateien) {
      pfad = path.join(staatsexamenPath, pfad)
      if (pfad.match(ExamensAufgabe.schwacherPfadRegExp)) {
        console.log(pfad)
        const ergebnis = childProcess.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', pfad], {
          encoding: 'utf-8'
        })

        if (ergebnis.status !== 0) {
          console.log(ergebnis.stdout)
          console.log(ergebnis.stderr)
          öffneVSCode(pfad)
          throw new Error(`Die Datei „${pfad}“ konnte nicht kompiliert werden.`)
        }
      }
    }
  })

  programm
  .command('sql <tex-datei>')
  .description('Führe SQL-Code in einer TeX-Datei aus. Der Code muss in \\begin{minted}{sql}…\\end{minted} eingerahmt sein.')
  .alias('s')
  .option('-a, --anfrage <nummer>', 'Führe nur die Anfrage mit der gegebenen Nummer aus.')
  .option('-n, --nicht-loeschen', 'Die Datenbank und die temporären SQL-Dateien am Ende der Ausführung nicht löschen.')

  .action(führeSqlAus)

programm
  .command('code [glob]')
  .alias('c')
  .description('Öffne die mit glob spezifizierten Dateien in Visual Studio Code')
  .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
  .action(function (globMuster: string, cmdObj: { [schlüssel: string]: any }): void {
    function öffneMitAusgabe (pfad: string) {
      console.log(pfad)
      öffneVSCode(pfad)
    }

    if (typeof globMuster !== 'string') {
      globMuster = '**/*.tex'
    }
    const dateien = glob.sync(globMuster)
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

programm
  .command('ungerade-loeschen')
  .alias('u')
  .description('Ungerade Seiten in einer PDF-Datei löschen.')
  .action(function (): void {
    // pdftk A=Scan.pdf cat Aodd output odd.pdf
  })

programm
  .command('txt-exportieren <pdf-datei>')
  .alias('t')
  .description('TXT aus einer PDF-Datei exportieren.')
  .action(function (datei: string): void {
    if (datei.indexOf('.pdf') > -1) {
      console.log(datei)
      const txt = datei.replace('.pdf', '.txt')
      if (!fs.existsSync(txt)) {
        childProcess.spawnSync('pdftotext', [datei])
      }
    }
  })

programm
  .command('ocr <pdf-datei>')
  .alias('o')
  .description('Texterkennung in einer PDF-Datei durchführen.')
  .action(function (datei: string): void {
    childProcess.spawnSync('ocrmypdf', [
      '--deskew',
      '--rotate-pages',
      '-l', 'deu+eng',
      '--sidecar', `${datei}`,
      datei,
      datei,
    ])
  })

programm
  .command('rotiere-pdf <pdf-datei>')
  .alias('r')
  .description('PDF-Datei rotieren.')
  .action(function (datei: string): void {
    childProcess.spawnSync('pdftk', [
      datei,
      'cat',
      '1-endeast', 'output',
      '--sidecar', `${datei}_rotated.pdf`
    ])
  })

programm.parse(process.argv)
