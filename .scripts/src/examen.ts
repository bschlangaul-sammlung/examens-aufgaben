import glob from 'glob'

import { repositoryPfad } from './helfer'
import { Aufgabe } from './aufgabe'

export class Examen {
  nummer: number
  jahr: number
  monat: number

  aufgaben: Aufgabe[] = []

  static regExp: RegExp = /^.*(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/.*$/

  constructor(nummer: number, jahr: number, monat: number) {
    this.nummer = nummer
    this.jahr = jahr
    this.monat = monat
  }

  get jahreszeit (): string {
    if (this.monat === 3) {
      return 'Frühjahr'
    } else if (this.monat === 9) {
      return 'Herbst'
    }
    throw new Error(`Die Monatsangabe in der Klasse Staatsexamen darf nur 3 oder 9 lauten.`)
  }

  get jahrJahreszeit (): string {
    return `${this.jahr} ${this.jahreszeit}`
  }

  get monatMitNullen (): string {
    return this.monat.toString().padStart(2, '0')
  }

  get referenz (): string {
    return `${this.nummer}:${this.jahr}:${this.monatMitNullen}`
  }

  static erzeugeExamenDurchTextArgumente (nummer: string, jahr: string, monat: string) {
    return new Examen(parseInt(nummer), parseInt(jahr), parseInt(monat))
  }

  static erzeugeExamenVonPfad (pfad: string) {
    const match = pfad.match(Examen.regExp)
    if (!match || !match.groups) {
      throw new Error(`Konnten den Examenspfad nicht lesen: ${pfad}`)
    }
    const gruppen = match.groups
    return Examen.erzeugeExamenDurchTextArgumente(gruppen.nummer, gruppen.jahr, gruppen.monat)
  }

  static gibReferenzVonPfad (pfad: string) {
    const match = pfad.match(Examen.regExp)
    if (!match || !match.groups) {
      throw new Error(`Konnten den Examenspfad nicht lesen: ${pfad}`)
    }
    const gruppen = match.groups
    return `${gruppen.nummer}:${gruppen.jahr}:${gruppen.monat}`
  }

  static erzeugeExamenVonReferenz (referenz: string) {
    const ergebnis = referenz.split(':')
    if (ergebnis.length !== 3) {
      throw new Error('Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09')
    }
    return Examen.erzeugeExamenDurchTextArgumente(ergebnis[0], ergebnis[1], ergebnis[2])
  }
}

export class ExamenSammlung {
  private speicher: { [referenz: string]: Examen }

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
