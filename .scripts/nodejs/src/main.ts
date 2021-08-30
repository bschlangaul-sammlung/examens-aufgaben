#! /usr/bin/env node

import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'
import glob from 'glob'

import { Command } from 'commander'

import { Aufgabe, ExamensAufgabe } from './aufgabe'
import {
  repositoryPfad,
  öffneVSCode,
  zeigeFehler,
  leseDatei,
  schreibeDatei,
  führeAus,
  öffneProgramm
} from './helfer'

import { erzeugeAufgabenTitel } from './aktionen/erzeuge-aufgaben-titel'
import { erzeugeAufgabenVorlage } from './aktionen/erzeuge-aufgaben-vorlage'
import { erzeugeExamensAufgabeVorlage } from './aktionen/erzeuge-examens-aufgabe-vorlage'
import { erzeugeReadme } from './aktionen/erzeuge-readme'
import { führeSqlAus } from './aktionen/fuehre-sql-aus'
import { generiereExamenSammlungPdf } from './aktionen/erzeuge-examens-uebersicht'
import { konvertiereFlaciZuTikz } from './aktionen/konvertiere-flaci-zu-tikz'
import { öffne } from './aktionen/oeffne'
import { öffneDurchStichwort } from './aktionen/oeffne-durch-stichwort'

const programm = new Command()
programm.description(`Repository-Pfad: ${repositoryPfad}`)
programm.name('lehramt-informatik.js')
programm.version('0.1.0')

programm.on('command:*', function () {
  console.error(
    'Ungültiger Befehl: %s\nBenutze das Argument --help, um eine Liste der verfügbaren Befehle anzuzeigen.',
    programm.args.join(' ')
  )
  process.exit(1)
})

programm
  .command('erzeuge-aufgabe [titel]')
  .description('Erzeuge eine Aufgabe im aktuellen Arbeitsverzeichnis.')
  .alias('a')
  .action(function (titel: string, cmdObj: object): void {
    let dateiName = 'Aufgabe_'
    if (titel != null) {
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
  .action(function (
    ref: string,
    arg1: string,
    arg2: string,
    arg3: string
  ): void {
    const pfad = erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3)
    öffneVSCode(pfad)
  })

programm
  .command('oeffne <referenz...>')
  .description(
    'Öffne eine Staatsexamen oder andere Materialien durch die Referenz, z. B. 66116:2020:09.'
  )
  .alias('o')
  .action(function (referenz: string[], cmdObj: object): void {
    if (referenz.length === 1) {
      öffne(referenz[0])
    } else {
      öffne(referenz.join(':'))
    }
  })

programm
  .command('oeffne-stichwort <stichwort>')
  .description('Öffne Aufgaben anhand des Stichworts')
  .alias('s')
  .action(function (stichwort: string, cmdObj: object): void {
    öffneDurchStichwort(stichwort)
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
      if (pfad.match(ExamensAufgabe.schwacherPfadRegExp) != null) {
        console.log(pfad)
        const ergebnis = childProcess.spawnSync(
          '/usr/local/texlive/bin/x86_64-linux/latexmk',
          ['-shell-escape', '-cd', '--lualatex', pfad],
          {
            encoding: 'utf-8'
          }
        )

        if (ergebnis.status !== 0) {
          console.log(ergebnis.stdout)
          console.log(ergebnis.stderr)
          öffneVSCode(pfad)
          zeigeFehler(`Die Datei „${pfad}“ konnte nicht kompiliert werden.`)
        }
      }
    }
  })

programm
  .command('sql <tex-datei>')
  .description(
    'Führe SQL-Code in einer TeX-Datei aus. Der Code muss in \\begin{minted}{sql}…\\end{minted} eingerahmt sein.'
  )
  .alias('s')
  .option(
    '-a, --anfrage <nummer>',
    'Führe nur die Anfrage mit der gegebenen Nummer aus.'
  )
  .option(
    '-n, --nicht-loeschen',
    'Die Datenbank und die temporären SQL-Dateien am Ende der Ausführung nicht löschen.'
  )
  .action(führeSqlAus)

programm
  .command('code [glob]')
  .alias('c')
  .description(
    'Öffne die mit glob spezifizierten Dateien in Visual Studio Code'
  )
  .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
  .option(
    '-t, --kein-titel',
    'Öffne nur die Dateien, die keinen Titel haben. \\liAufgabenTitel{}.'
  )

  .action(function (
    globMuster: string,
    cmdObj: { [schlüssel: string]: any }
  ): void {
    function öffneMitAusgabe (pfad: string): void {
      console.log(pfad)
      öffneVSCode(pfad)
    }

    if (typeof globMuster !== 'string') {
      globMuster = '**/*.tex'
    }
    const dateien = glob.sync(globMuster)
    for (let dateiPfad of dateien) {
      dateiPfad = path.resolve(dateiPfad)
      if (cmdObj.keinIndex != null || cmdObj.keinTitel != null) {
        const aufgabe = new Aufgabe(dateiPfad)
        if (
          (cmdObj.keinIndex != null && aufgabe.stichwörter.length === 0) ||
          (cmdObj.keinTitel != null && aufgabe.titel == null)
        ) {
          öffneMitAusgabe(dateiPfad)
        }
      } else {
        öffneMitAusgabe(dateiPfad)
      }
    }
  })

programm
  .command('seiten-loeschen <pdf-datei>')
  .alias('l')
  .description(
    'Gerade Seiten in einer PDF-Datei löschen. Die erste, dritte Seite etc. bleibt bestehen.'
  )
  .action(function (datei: string): void {
    childProcess.spawnSync('pdftk', [
      `A=${datei}`,
      'cat',
      'Aodd',
      'output',
      `${datei}_ungerade.pdf`
    ])
  })

programm
  .command('txt-exportieren <pdf-datei>')
  .alias('t')
  .description('TXT aus einer PDF-Datei exportieren.')
  .action(function (datei: string): void {
    if (datei.includes('.pdf')) {
      console.log(datei)
      const txt = datei.replace('.pdf', '.txt')
      if (!fs.existsSync(txt)) {
        childProcess.spawnSync('pdftotext', [datei])
      }
    }
  })

programm
  .command('ocr <pdf-datei>')
  .description('Texterkennung in einer PDF-Datei durchführen.')
  .action(function (datei: string): void {
    const process = childProcess.spawnSync(
      'ocrmypdf',
      [
        '--deskew',
        '--rotate-pages',
        '-l',
        'deu+eng',
        '--sidecar',
        `${datei}.txt`,
        datei,
        datei
      ],
      { encoding: 'utf-8' }
    )
    if (process.status !== 0) {
      console.log(process.stderr)
    }
  })

programm
  .command('rotiere-pdf <pdf-datei>')
  .alias('r')
  .description('PDF-Datei rotieren.')
  .action(function (datei: string): void {
    const process = childProcess.spawnSync('pdftk', [
      datei,
      'cat',
      '1-endeast',
      'output',
      '--sidecar',
      `${datei}_rotated.pdf`
    ])
    if (process.status !== 0) {
      console.log(process.stderr)
    }
  })

programm
  .command('enumerate-item <tex-datei>')
  .alias('ei')
  .description('a) b) ... i) iii) durch \\item ersetzen.')
  .action(function (dateiPfad: string): void {
    let inhalt = leseDatei(dateiPfad)
    inhalt = inhalt.replace(
      /\n(\(?[abcdefghijv]+\)\s*)/g,
      '\n%%\n% $1\n%%\n\n\\item '
    )
    schreibeDatei(dateiPfad, inhalt)
  })

programm
  .command('examen-sammlung')
  .alias('es')
  .description('PDFs in denen mehrere PDFs zusammengefügt sind.')
  .action(function (): void {
    generiereExamenSammlungPdf()
  })

programm
  .command('examen-code-verschieben')
  .alias('ec')
  .description('Den Examen-Code im Java-Repository verschieben')
  .action(function (cmdObj: object) {
    const dateien = glob.sync('**/')
    for (const pfad of dateien) {
      if (
        pfad.match(/examen_\d{5}_\d{4}_\d{2}\/$/) != null &&
        pfad.match(/docs/) == null &&
        pfad.match(/target/) == null
      ) {
        console.log(pfad)
        const match = pfad.match(
          /examen_(?<nummer>\d{5})_(?<jahr>\d{4})_(?<monat>\d{2})\/$/
        )
        if (match?.groups != null) {
          const monat = match?.groups.monat === '03' ? 'fruehjahr' : 'herbst'
          const neuerPfad = `src/main/java/org/bschlangaul/examen/examen_${match?.groups.nummer}/jahr_${match?.groups.jahr}/${monat}`
          console.log(neuerPfad)
          try {
            fs.mkdirSync(neuerPfad, { recursive: true })
            fs.renameSync(pfad, neuerPfad)
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  })

programm
  .command('flaci-to-tikz <jsonDatei>')
  .alias('flaci')
  .description('Konvertieren flaci.com Automaten to TikZ-Automaten')
  .action(konvertiereFlaciZuTikz)

programm
  .command('dtx')
  .description('*.sty zu einem dtx zusammenfügen')
  .action(function (cmdObj: object) {
    const texPfad = path.join(repositoryPfad, '.tex')
    const styPfad = path.join(texPfad, 'pakete')
    const styS = glob.sync('**/*.sty', { cwd: styPfad })

    const dtxPfad = path.join(texPfad, 'dokumentation.dtx')
    const dtxInhalte: string[] = []

    function leseSty (dateiName: string): void {
      const inhalt = leseDatei(path.join(styPfad, dateiName))
      const prefix =
        '%    \\end{macrocode}\n' +
        '% \\subsection{' +
        dateiName +
        '}\n' +
        '%    \\begin{macrocode}\n'
      dtxInhalte.push(prefix + inhalt)
    }

    function kompiliereDtxDatei (): void {
      führeAus('lualatex --shell-escape dokumentation.dtx', texPfad)
      führeAus(
        'makeindex -s gglo.ist -o dokumentation.gls dokumentation.glo',
        texPfad
      )
      führeAus(
        'makeindex -s gind.ist -o dokumentation.ind dokumentation.idx',
        texPfad
      )
      führeAus('lualatex --shell-escape dokumentation.dtx', texPfad)
    }

    for (const sty of styS) {
      leseSty(sty)
    }

    const dtxVorlage = leseDatei(
      path.join(texPfad, 'dokumentation_vorlage.dtx')
    )
    schreibeDatei(
      dtxPfad,
      dtxVorlage.replace('{{ einbinden }}', dtxInhalte.join('\n'))
    )

    kompiliereDtxDatei()
    öffneProgramm('/usr/bin/xdg-open', path.join(texPfad, 'dokumentation.pdf'))
  })

programm
  .command('aufgaben-titel <texDatei>')
  .alias('at')
  .description('Erzeuge den Titlel in einer TeX-Datei')
  .action(erzeugeAufgabenTitel)

programm.parse(process.argv)
