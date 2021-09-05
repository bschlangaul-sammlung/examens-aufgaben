import path from 'path'
import glob from 'glob'

import { repositoryPfad, zeigeFehler, macheRelativenPfad } from './helfer'
import { Aufgabe } from './aufgabe'

export interface ExamenReferenz {
  nummer: string
  jahr: string
  monat: string
}

interface ExamensAufgabeBaum {
  [aufgabe: string]: ExamensAufgabeBaum | Aufgabe
}

export class Examen {
  public nummer: number
  public jahr: number
  public monat: number

  /**
   * ```js
   * {
   *    'Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.tex': aufgabe
   * }
   * ```
   */
  aufgaben: { [pfad: string]: Aufgabe } = {}

  static regExp: RegExp = /^.*(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/.*$/

  constructor (nummer: number, jahr: number, monat: number) {
    this.nummer = nummer
    this.jahr = jahr
    this.monat = monat
  }

  /**
   * Der Pfad zum Scan
   *
   * z. B. `...github/hbschlang/lehramt-informatik/Staatsexamen/66116/2020/09/Scan.pdf`
   */
  get pfad (): string {
    return path.join(
      repositoryPfad,
      Examen.erzeugePfad(this.nummer, this.jahr, this.monatMitNullen),
      'Scan.pdf'
    )
  }

  /**
   * Der übergeordnete Ordner, in dem das Staatsexamen liegt.
   *
   * z. B. `...github/hbschlang/lehramt-informatik/Staatsexamen/66116/2020/09`
   */
  get verzeichnis (): string {
    return path.dirname(this.pfad)
  }

  /**
   * Der übergeordnete Ordner, in dem das Staatsexamen liegt, als relativen Pfad.
   *
   * z. B. `Staatsexamen/66116/2020/09`
   */
  get verzeichnisRelativ (): string {
    return macheRelativenPfad(this.verzeichnis)
  }

  /**
   * `Frühjahr` oder `Herbst`
   */
  get jahreszeit (): string {
    if (this.monat === 3) {
      return 'Frühjahr'
    } else if (this.monat === 9) {
      return 'Herbst'
    }
    zeigeFehler(
      'Die Monatsangabe in der Klasse Staatsexamen darf nur 3 oder 9 lauten.'
    )
  }

  get dateiName (): string {
    return `Staatsexamen-Informatik_${this.nummer}-${this.jahr}-${this.jahreszeit}`
  }

  get jahrJahreszeit (): string {
    return `${this.jahr} ${this.jahreszeit}`
  }

  /**
   * z. B. `03`
   */
  get monatMitNullen (): string {
    return this.monat.toString().padStart(2, '0')
  }

  /**
   * z. B. `66116:2020:03`
   */
  get referenz (): string {
    return `${this.nummer}:${this.jahr}:${this.monatMitNullen}`
  }

  /**
   * z. B. `Examen 66116 Frühjahr 2020`
   */
  get titelKurz (): string {
    return `Examen ${this.nummer} ${this.jahreszeit} ${this.jahr}`
  }

  static erzeugeExamenDurchTextArgumente (
    nummer: string,
    jahr: string,
    monat: string
  ): Examen {
    return new Examen(parseInt(nummer), parseInt(jahr), parseInt(monat))
  }

  static erzeugeExamenVonPfad (pfad: string): Examen {
    const treffer = pfad.match(Examen.regExp)
    if (treffer == null || treffer.groups == null) {
      zeigeFehler(`Konnten den Examenspfad nicht lesen: ${pfad}`)
    }
    const gruppen = treffer.groups
    return Examen.erzeugeExamenDurchTextArgumente(
      gruppen.nummer,
      gruppen.jahr,
      gruppen.monat
    )
  }

  static gibReferenzVonPfad (pfad: string): string {
    const treffer = pfad.match(Examen.regExp)
    if (treffer == null || treffer.groups == null) {
      zeigeFehler(`Konnten den Examenspfad nicht lesen: ${pfad}`)
    }
    const gruppen = treffer.groups
    return `${gruppen.nummer}:${gruppen.jahr}:${gruppen.monat}`
  }

  static erzeugeExamenVonReferenz (referenz: string): Examen {
    const ergebnis = referenz.split(':')
    if (ergebnis.length !== 3) {
      zeigeFehler(
        'Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09'
      )
    }
    return Examen.erzeugeExamenDurchTextArgumente(
      ergebnis[0],
      ergebnis[1],
      ergebnis[2]
    )
  }

  static erzeugePfad (
    nummer: string | number,
    jahr: string | number,
    monat: string | number
  ): string {
    return path.join('Staatsexamen', `${nummer}`, `${jahr}`, `${monat}`)
  }

  static teileReferenz (referenz: string): ExamenReferenz {
    const tmp = referenz.split(':')
    if (tmp.length !== 3) {
      console.log(
        'Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09'
      )
      process.exit(1)
    }
    return {
      nummer: tmp[0],
      jahr: tmp[1],
      monat: tmp[2]
    }
  }

  /**
   * ```js
   * {
   *   'Thema 1': {
   *     'Teilaufgabe 1': {
   *       'Aufgabe 3': aufgabe,
   *       'Aufgabe 4': aufgabe
   *     },
   *     'Teilaufgabe 2': {
   *       'Aufgabe 2': aufgabe,
   *       'Aufgabe 4': aufgabe
   *     }
   *   },
   *   'Thema 2': {
   *     'Teilaufgabe 2': {
   *       'Aufgabe 2': aufgabe,
   *       'Aufgabe 5': aufgabe
   *     }
   *   }
   * }
   * ```
   */
  get aufgabenBaum (): ExamensAufgabeBaum {
    /**
     * Thema-1: Thema 1
     * Teilaufgabe-2: Teilaufgabe 2
     * Aufgabe-3.tex: Aufgabe 3
     */
    function macheSegmenteLesbar (segment: string): string {
      return segment.replace('-', ' ').replace('.tex', '')
    }

    const aufgabenPfade = Object.keys(this.aufgaben)

    var collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base'
    })

    aufgabenPfade.sort(collator.compare)

    const baum: ExamensAufgabeBaum = {}
    for (const pfad of aufgabenPfade) {
      const aufgabenPfad = pfad.replace(this.verzeichnisRelativ + path.sep, '')
      if (
        aufgabenPfad.match(
          /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/
        ) != null
      ) {
        const aufgabe = this.aufgaben[pfad]
        const segmente = aufgabenPfad.split(path.sep)
        let unterBaum: ExamensAufgabeBaum = baum
        for (const segment of segmente) {
          const segmentLesbar = macheSegmenteLesbar(segment)
          if (unterBaum[segmentLesbar] == null && !segment.includes('.tex')) {
            unterBaum[segmentLesbar] = {}
          } else if (segment.includes('.tex')) {
            unterBaum[segmentLesbar] = aufgabe
          }
          if (!segment.includes('.tex')) {
            unterBaum = unterBaum[segmentLesbar] as ExamensAufgabeBaum
          }
        }
      }
    }
    return baum
  }
}

interface ExamensBaum {
  [referenz: string]: ExamensBaum | Examen
}

export class ExamenSammlung {
  private readonly speicher: { [referenz: string]: Examen }

  constructor () {
    const dateien = glob.sync('**/Scan.pdf', { cwd: repositoryPfad })
    this.speicher = {}

    for (const pfad of dateien) {
      const examen = Examen.erzeugeExamenVonPfad(pfad)
      this.speicher[examen.referenz] = examen
    }
  }

  gib (nummer: string, jahr: string, monat: string): Examen {
    return this.gibDurchReferenz(`${nummer}:${jahr}:${monat}`)
  }

  gibDurchPfad (pfad: string): Examen {
    return this.gibDurchReferenz(Examen.gibReferenzVonPfad(pfad))
  }

  gibDurchReferenz (referenz: string): Examen {
    return this.speicher[referenz]
  }

  /**
   * @returns
   *
   * ```js
   * {
   *    '66116' : { '2021': { '03': Examen } }
   * }
   * ```
   */
  get examenBaum (): ExamensBaum {
    const referenzen = Object.keys(this.speicher)
    referenzen.sort()

    const baum: ExamensBaum = {}
    for (const referenz of referenzen) {
      const examen = this.speicher[referenz]
      const segmente = referenz.split(':')
      let unterBaum: ExamensBaum = baum
      for (const segment of segmente) {
        if (unterBaum[segment] == null) {
          unterBaum[segment] = {}
        }

        if (segment === '03' || segment === '09') {
          unterBaum[segment] = examen
        } else {
          unterBaum = unterBaum[segment] as ExamensBaum
        }
      }
    }
    return baum
  }
}

export const examensTitel: { [key: number]: string } = {
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

let examenSammlung: ExamenSammlung

export function gibExamenSammlung (): ExamenSammlung {
  if (examenSammlung == null) {
    examenSammlung = new ExamenSammlung()
  }
  return examenSammlung
}
