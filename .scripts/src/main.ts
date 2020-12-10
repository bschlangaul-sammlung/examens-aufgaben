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

const program = new Command()
program.description(`Repository path: ${repositoryPfad}`)
program.name('lehramt-informatik.js')
program.version('0.1.0')

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

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
  .action(function (ref: string, arg1: string, arg2: string, arg3: string): void {
    const pfad = erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3)
    öffneVSCode(pfad)
  })

program
  .command('oeffne-examen <referenz>')
  .description('Öffne eine Staatsexamen mit der Referenz, z. B. 66116:2020:09')
  .alias('o')
  .action(function (ref: string, cmdObj: object): void {
    const examen = examenSammlung.gibDurchReferenz(ref)
    if (fs.existsSync(examen.pfad)) {
      öffneProgramm('/usr/bin/xdg-open', examen.pfad)
    } else {
      console.log(`Path ${examen.pfad} doesn’t exist.`)
    }
  })

program
  .command('generiere-readme')
  .description('Generiere die README-Datei')
  .alias('r')
  .action(erzeugeReadme)

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
