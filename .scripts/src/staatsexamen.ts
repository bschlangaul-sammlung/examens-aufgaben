import path from 'path'
import fs from 'fs'
import glob from 'glob'

import { ExamensAufgabe } from './aufgabe'
import { repositoryPfad, generiereMarkdownLink, MarkdownLinkEinstellung } from './helfer'

const titel: { [key: number]: string } = {
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
 * @param {string} relPath
 */
function leseAufgaben (relPath: string): ExamensAufgabeBaum {
  /**
   * Thema-1: Thema 1
   * Teilaufgabe-2: Teilaufgabe 2
   * Aufgabe-3.tex: Aufgabe 3
   */
  function macheSegmenteLesbar (segment: string): string {
    return segment.replace('-', ' ').replace('.tex', '')
  }
  const dateien = glob.sync('**/*.tex', { cwd: relPath })
  const baum: ExamensAufgabeBaum = {}
  for (const pfad of dateien) {
    if (pfad.match(/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/)) {
      const segmente = pfad.split(path.sep)
      let unterBaum: ExamensAufgabeBaum = baum
      for (const segment of segmente) {
        const segmentLesbar = macheSegmenteLesbar(segment)
        if (!unterBaum[segmentLesbar] && segment.indexOf('.tex') === -1) {
          unterBaum[segmentLesbar] = {}
        } else if (segment.indexOf('.tex') > -1) {
          unterBaum[segmentLesbar] = pfad
        }
        if (segment.indexOf('.tex') === -1) {
          unterBaum = <ExamensAufgabeBaum> unterBaum[segmentLesbar]
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
function generiereAufgabenRekursiv (aufgabenBaum: ExamensAufgabeBaum, pfad: string, ebene: number = 1): string {
  const ausgabe = []
  // title: Thema 1, Teilaufgabe 2, Aufgabe 3
  for (const titel in aufgabenBaum) {
    if (typeof aufgabenBaum[titel] === 'string') {
      const aufgabenPfad = path.join(pfad, <string> aufgabenBaum[titel])
      const aufgabe = new ExamensAufgabe(aufgabenPfad)
      ausgabe.push(erzeugeEinrückung(ebene) + aufgabe.gibTitelNurAufgabe(true))
    } else {
      ausgabe.push(`${erzeugeEinrückung(ebene)}${titel} ${generiereAufgabenRekursiv(<ExamensAufgabeBaum> aufgabenBaum[titel], pfad, ebene + 1)}`)
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

  add (ausgabe: string) {
    if (this.redselig) console.log(ausgabe)
    this.speicher.push(ausgabe)
  }

  gibText () {
    return this.speicher.join('\n')
  }
}

function formatExamTitle (year: string, month: string) {
  let monthLong
  if (month === '09') {
    monthLong = 'Herbst'
  } else {
    monthLong = 'Frühjahr'
  }
  return `${year} ${monthLong}`
}

function erzeugeDateiLink (relPath: string, fileName: string, einstellungen?: MarkdownLinkEinstellung): string {
  return generiereMarkdownLink(fileName, path.join(relPath, fileName), einstellungen)
}

export function generiereExamensÜbersicht () {
  const ausgabe = new AusgabeSammler()
  for (const nummer in titel) {
    ausgabe.add(`\n### ${nummer}: ${titel[nummer]}\n`)
    const nummernPfad = path.join(repositoryPfad, 'Staatsexamen', nummer)
    const jahrVerzeichnisse = fs.readdirSync(nummernPfad)
    for (const jahr of jahrVerzeichnisse) {
      const jahrPfad = path.join(nummernPfad, jahr)
      const monatsVerzeichnisse = fs.readdirSync(jahrPfad)
      for (const monat of monatsVerzeichnisse) {
        const monatsPfad = path.join(jahrPfad, monat)
        ausgabe.add(`- ${formatExamTitle(jahr, monat)}: ${erzeugeDateiLink(monatsPfad, 'Scan.pdf')} ${erzeugeDateiLink(monatsPfad, 'OCR.txt', { linkePdf: false })} ${generiereAufgabenBaum(monatsPfad)}`)
      }
    }
  }
  return ausgabe.gibText()
}
