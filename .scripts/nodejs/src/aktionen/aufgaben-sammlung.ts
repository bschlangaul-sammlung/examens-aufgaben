/**
 * Aktionen, die über eine Sammlung an Aufgaben eine Ausgabe erzeugen.
 */

import path from 'path'

import { gibExamenSammlung, Examen } from '../examen'
import { ExamensAufgabe, gibAufgabenSammlung } from '../aufgabe'
import { repositoryPfad, macheRelativenPfad, macheRepoPfad, löscheDatei } from '../helfer'
import { schreibeTexDatei } from '../tex'

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
        if (unterBaum[segmentLesbar] == null && !segment.includes('.tex')) {
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
      const aufgabe = gibAufgabenSammlung().gib(aufgabenPfad) as ExamensAufgabe
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

  sammle (ausgabe: string | undefined): void {
    if (this.redselig) {
      console.log(ausgabe)
    }
    if (ausgabe != null) {
      this.speicher.push(ausgabe)
    }
  }

  gibText (): string {
    return this.speicher.join('\n')
  }
}

function erzeugeDateiLink (examen: Examen, dateiName: string): string {
  return examen.macheMarkdownLink(dateiName, dateiName)
}

/**
 * Erzeugen den Markdown-Code für die README-Datei.
 */
export function generiereExamensÜbersicht (): string {
  const examenSammlung = gibExamenSammlung()
  const examenBaum = examenSammlung.examenBaum as any
  const ausgabe = new AusgabeSammler()
  for (const nummer in examenBaum) {
    ausgabe.sammle(`\n### ${nummer}: ${Examen.fachDurchNummer(nummer)}\n`)
    for (const jahr in examenBaum[nummer]) {
      for (const monat in examenBaum[nummer][jahr]) {
        const examen = examenBaum[nummer][jahr][monat] as Examen
        const scanLink = erzeugeDateiLink(examen, 'Scan.pdf')
        const ocrLink = erzeugeDateiLink(examen, 'OCR.txt')
        ausgabe.sammle(
          `- ${
            examen.jahrJahreszeit
          }: ${scanLink} ${ocrLink} ${generiereAufgabenBaum(
            examen.verzeichnis
          )}`
        )
      }
    }
  }
  return ausgabe.gibText()
}

/**
 * Erzeugt eine TeX-Datei, die alle Examens-Scanns eines bestimmten Fachs (z. B.
 * 65116) als eine PDF-Datei zusammenfasst.
 */
export function erzeugeExamenScansSammlung (): void {
  const examenSammlung = gibExamenSammlung()
  const examenBaum = examenSammlung.examenBaum as any
  for (const nummer in examenBaum) {
    const ausgabe = new AusgabeSammler()
    const nummernPfad = path.join(repositoryPfad, 'Staatsexamen', nummer)
    for (const jahr in examenBaum[nummer]) {
      const jahrPfad = path.join(nummernPfad, jahr)
      for (const monat in examenBaum[nummer][jahr]) {
        const examen = gibExamenSammlung().gib(nummer, jahr, monat)
        ausgabe.sammle(`\n\\liTrennSeite{${examen.jahreszeit} ${examen.jahr}}`)
        const scanPfad = macheRelativenPfad(
          path.join(jahrPfad, monat, 'Scan.pdf')
        )
        const includePdf = `\\liBindePdfEin{${scanPfad}}`
        ausgabe.sammle(includePdf)
      }
    }
    const textKörper = ausgabe.gibText()
    const kopf =
      `\\liPruefungsNummer{${nummer}}\n` +
      `\\liPruefungsTitel{${Examen.fachDurchNummer(nummer)}}\n`

    schreibeTexDatei(
      macheRepoPfad('Staatsexamen', nummer, 'Examensammlung.tex'),
      'examen-scans',
      kopf,
      textKörper
    )
  }
}

type BesucherFunktion = (nummer: number, examen?: Examen) => string | undefined

interface BesucherFunktionsSammlung {
  thema?: BesucherFunktion
  teilaufgabe?: BesucherFunktion
  aufgabe?: BesucherFunktion
}

function besucheAufgabenBaum (
  examen: Examen,
  besucher: BesucherFunktionsSammlung
): string | undefined {
  const baum = examen.aufgabenBaum as any

  if (baum == null) {
    return
  }

  const ausgabe = new AusgabeSammler()

  function extrahiereNummer (titel: string): number {
    const match = titel.match(/\d+/)
    if (match != null) {
      return parseInt(match[0])
    }
    throw new Error('Konte keine Zahl finden')
  }

  function rufeBesucherFunktionAuf (titel: string): void {
    const nr = extrahiereNummer(titel)
    if (titel.indexOf('Thema ') === 0) {
      if (besucher.thema != null) {
        ausgabe.sammle(besucher.thema(nr, examen))
      }
    } else if (titel.indexOf('Teilaufgabe ') === 0) {
      if (besucher.teilaufgabe != null) {
        ausgabe.sammle(besucher.teilaufgabe(nr, examen))
      }
    } else if (titel.indexOf('Aufgabe ') === 0) {
      if (besucher.aufgabe != null) {
        ausgabe.sammle(besucher.aufgabe(nr, examen))
      }
    }
  }

  for (const thema in baum) {
    rufeBesucherFunktionAuf(thema)

    if (!(baum[thema] instanceof ExamensAufgabe)) {
      for (const teilaufgabe in baum[thema]) {
        rufeBesucherFunktionAuf(teilaufgabe)

        if (!(baum[thema][teilaufgabe] instanceof ExamensAufgabe)) {
          for (const aufgabe in baum[thema][teilaufgabe]) {
            rufeBesucherFunktionAuf(aufgabe)
          }
        }
      }
    }
  }
  return ausgabe.gibText()
}

/**
 * Erzeugt pro Examen eine TeX-Datei, die alle zum diesem Examen gehörenden
 * Aufgaben samt Lösungen einbindet.
 *
 * ```latex
 * \liSetzeExamen{66116}{2021}{03}
 *
 * \liSetzeExamenThemaNr{1}
 *
 * \liSetzeExamenTeilaufgabeNr{1}
 *
 * \liBindeAufgabeEin{1}
 * \liBindeAufgabeEin{2}
 * \liBindeAufgabeEin{3}
 * ```
 */
function erzeugeExamensLösung (examen: Examen): void {
  const textKörper = besucheAufgabenBaum(examen, {
    thema (nummer: number): string {
      return `\n\n\\liSetzeExamenThemaNr{${nummer}}`
    },
    teilaufgabe (nummer: number): string {
      return `\n\\liSetzeExamenTeilaufgabeNr{${nummer}}`
    },
    aufgabe (nummer: number): string {
      return `\\liBindeAufgabeEin{${nummer}}`
    }
  })

  const kopf = `\\liSetzeExamen{${examen.nummer}}{${examen.jahr}}{${examen.monatMitNullen}}`

  const pfad = examen.machePfad('Examen.tex')
  if (textKörper != null) {
    schreibeTexDatei(pfad, 'examen', kopf, textKörper)
  } else {
    löscheDatei(pfad)
  }
}

/**
 * Erzeugt pro Examen eine TeX-Datei, die alle zum diesem Examen gehörenden
 * Aufgaben samt Lösungen einbindet.
 */
export function erzeugeExamensLösungen (): void {
  const examenSammlung = gibExamenSammlung()
  const examenBaum = examenSammlung.examenBaum as any
  for (const nummer in examenBaum) {
    for (const jahr in examenBaum[nummer]) {
      for (const monat in examenBaum[nummer][jahr]) {
        const examen = examenBaum[nummer][jahr][monat] as Examen
        erzeugeExamensLösung(examen)
      }
    }
  }
}
