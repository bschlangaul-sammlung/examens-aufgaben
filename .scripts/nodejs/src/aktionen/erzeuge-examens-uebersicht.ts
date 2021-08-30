import path from 'path'
import fs from 'fs'

import { examensTitel } from '../examen'
import { ExamensAufgabe } from '../aufgabe'
import {
  repositoryPfad,
  generiereLink,
  LinkEinstellung,
  macheRelativenPfad,
  macheRepoPfad,
  schreibeDatei
} from '../helfer'
import { aufgabenSammlung, examenSammlung } from '../sammlung'
import glob from 'glob'

interface ExamensAufgabeBaum {
  [aufgabe: string]: ExamensAufgabeBaum | string
}

/**
 * ```js
 * [
 *   'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *   'Thema-1/Teilaufgabe-1/Aufgabe-4.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-4.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 * ]
 * ```
 *
 * ```js
 * {
 *   'Thema 1': {
 *     'Teilaufgabe 1': {
 *       'Aufgabe 3': 'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-1/Aufgabe-4.tex'
 *     },
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-2/Aufgabe-4.tex'
 *     }
 *   },
 *   'Thema 2': {
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 5': 'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 *     }
 *   }
 * }
 * ```
 *
 * @param {string} relativerPfad
 */
function leseAufgaben (relativerPfad: string): ExamensAufgabeBaum {
  /**
   * Thema-1: Thema 1
   * Teilaufgabe-2: Teilaufgabe 2
   * Aufgabe-3.tex: Aufgabe 3
   */
  function macheSegmenteLesbar (segment: string): string {
    return segment.replace('-', ' ').replace('.tex', '')
  }
  const dateien = glob.sync('**/*.tex', { cwd: relativerPfad })
  const baum: ExamensAufgabeBaum = {}
  for (const pfad of dateien) {
    if (
      pfad.match(
        /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/
      ) != null
    ) {
      const segmente = pfad.split(path.sep)
      let unterBaum: ExamensAufgabeBaum = baum
      for (const segment of segmente) {
        const segmentLesbar = macheSegmenteLesbar(segment)
        if (unterBaum[segmentLesbar] != null && !segment.includes('.tex')) {
          unterBaum[segmentLesbar] = {}
        } else if (segment.includes('.tex')) {
          unterBaum[segmentLesbar] = pfad
        }
        if (!segment.includes('.tex')) {
          unterBaum = unterBaum[segmentLesbar] as ExamensAufgabeBaum
        }
      }
    }
  }
  return baum
}

function erzeugeEinrückung (ebene: number): string {
  return '\n' + ' '.repeat(4 * ebene) + '- '
}

/**
 * ```md
 * - 2015 Frühjahr: [Scan.pdf](...46116/2015/03/Scan.pdf) [OCR.txt](…46116/2015/03/OCR.txt)
 *     - Thema 1
 *         - Teilaufgabe 1
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf)
 *         - Teilaufgabe 2
 *             - [Aufgabe 1](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf)
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf)
 *```
 *
 * @param {object} aufgabenBaum
 * @param {string} pfad
 * @param {integer} ebene
 */
function generiereAufgabenRekursiv (
  aufgabenBaum: ExamensAufgabeBaum,
  pfad: string,
  ebene: number = 1
): string {
  const ausgabe = []
  // title: Thema 1, Teilaufgabe 2, Aufgabe 3
  for (const titel in aufgabenBaum) {
    if (typeof aufgabenBaum[titel] === 'string') {
      const aufgabenPfad = path.join(pfad, aufgabenBaum[titel] as string)
      const aufgabe = aufgabenSammlung.gib(aufgabenPfad) as ExamensAufgabe
      ausgabe.push(erzeugeEinrückung(ebene) + aufgabe.gibTitelNurAufgabe(true))
    } else {
      ausgabe.push(
        `${erzeugeEinrückung(ebene)}${titel} ${generiereAufgabenRekursiv(
          aufgabenBaum[titel] as ExamensAufgabeBaum,
          pfad,
          ebene + 1
        )}`
      )
    }
  }
  return ausgabe.join(' ')
}

function generiereAufgabenBaum (pfad: string): string {
  return generiereAufgabenRekursiv(leseAufgaben(pfad), pfad)
}

class AusgabeSammler {
  speicher: string[]
  redselig: boolean
  constructor (redselig = false) {
    this.speicher = []
    this.redselig = redselig
  }

  add (ausgabe: string): void {
    if (this.redselig) console.log(ausgabe)
    this.speicher.push(ausgabe)
  }

  gibText (): string {
    return this.speicher.join('\n')
  }
}

function erzeugeDateiLink (
  pfad: string,
  dateiName: string,
  einstellungen?: LinkEinstellung
): string {
  return generiereLink(dateiName, path.join(pfad, dateiName), einstellungen)
}

export function generiereExamensÜbersicht (): string {
  const ausgabe = new AusgabeSammler()
  for (const nummer in examensTitel) {
    ausgabe.add(`\n### ${nummer}: ${examensTitel[nummer]}\n`)
    const nummernPfad = path.join(repositoryPfad, 'Staatsexamen', nummer)
    const jahrVerzeichnisse = fs.readdirSync(nummernPfad)
    for (const jahr of jahrVerzeichnisse) {
      const jahrPfad = path.join(nummernPfad, jahr)
      if (fs.statSync(jahrPfad).isDirectory()) {
        const monatsVerzeichnisse = fs.readdirSync(jahrPfad)
        for (const monat of monatsVerzeichnisse) {
          const examen = examenSammlung.gib(nummer, jahr, monat)
          const monatsPfad = path.join(jahrPfad, monat)
          const scanLink = erzeugeDateiLink(monatsPfad, 'Scan.pdf')
          const ocrLink = erzeugeDateiLink(monatsPfad, 'OCR.txt', {
            linkePdf: false
          })
          ausgabe.add(
            `- ${
              examen.jahrJahreszeit
            }: ${scanLink} ${ocrLink} ${generiereAufgabenBaum(monatsPfad)}`
          )
        }
      }
    }
  }
  return ausgabe.gibText()
}

export function generiereExamenSammlungPdf (): void {
  for (const nummer in examensTitel) {
    const ausgabe = new AusgabeSammler()
    const nummernPfad = path.join(repositoryPfad, 'Staatsexamen', nummer)
    const jahrVerzeichnisse = fs.readdirSync(nummernPfad)
    for (const jahr of jahrVerzeichnisse) {
      const jahrPfad = path.join(nummernPfad, jahr)
      if (fs.statSync(jahrPfad).isDirectory()) {
        const monatsVerzeichnisse = fs.readdirSync(jahrPfad)
        for (const monat of monatsVerzeichnisse) {
          const examen = examenSammlung.gib(nummer, jahr, monat)
          ausgabe.add(`\n\\liTrennSeite{${examen.jahreszeit} ${examen.jahr}}`)

          const scanPfad = macheRelativenPfad(
            path.join(jahrPfad, monat, 'Scan.pdf')
          )
          // scanPfad = scanPfad.replace(`Staatsexamen/${nummer}/`, '')

          const includePdf = `\\liBindePdfEin{${scanPfad}}`
          ausgabe.add(includePdf)
        }
      }
    }
    const ergebnis = ausgabe.gibText()

    const texMarkup = `\\documentclass{lehramt-informatik-examen-sammlung}
\\liPruefungsNummer{${nummer}}
\\liPruefungsTitel{${examensTitel[nummer]}}

\\begin{document}
${ergebnis}
\\end{document}`
    schreibeDatei(
      macheRepoPfad('Staatsexamen', nummer, 'Examensammlung.tex'),
      texMarkup
    )
  }
}
