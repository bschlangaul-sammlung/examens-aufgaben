import path from 'path'
import glob from 'glob'

import { repositoryPfad, zeigeFehler } from './helfer'
import { Aufgabe } from './aufgabe'

export interface ExamenReferenz {
  nummer: string
  jahr: string
  monat: string
}

export class Examen {
  nummer: number
  jahr: number
  monat: number

  aufgaben: { [pfad: string]: Aufgabe } = {}

  static regExp: RegExp = /^.*(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/.*$/

  constructor (nummer: number, jahr: number, monat: number) {
    this.nummer = nummer
    this.jahr = jahr
    this.monat = monat
  }

  get pfad (): string {
    return path.join(
      repositoryPfad,
      Examen.erzeugePfad(this.nummer, this.jahr, this.monatMitNullen),
      'Scan.pdf'
    )
  }

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

  get monatMitNullen (): string {
    return this.monat.toString().padStart(2, '0')
  }

  /**
   * z. B. `66116:2020:03`
   */
  get referenz (): string {
    return `${this.nummer}:${this.jahr}:${this.monatMitNullen}`
  }

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
