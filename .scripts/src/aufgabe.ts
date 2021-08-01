import path from 'path'
import fs from 'fs'
import glob from 'glob'

import {
  leseRepoDatei,
  repositoryPfad,
  generiereLink,
  macheRelativenPfad,
  zeigeFehler
} from './helfer'
import { sammleStichwörter, gibInhaltEinesTexMakros } from './tex'
import { Examen, ExamenSammlung } from './examen'

export class Aufgabe {
  /**
   * Der absolute Pfad zur Aufgabe
   */
  pfad: string
  inhalt?: string

  stichwörter: string[] = []
  titel?: string

  /**
   * Zeigt an, ob die Aufgabe eine normale Aufgabe ist oder eine Examensaufgabe.
   * Dieser Wert wird in der spezialisierten Klasse Examensaufgabe auf wahr gesetzt.
   */
  istExamen: boolean = false

  static pfadRegExp: RegExp = /.*Aufgabe_.*\.tex/

  constructor (pfad: string) {
    this.pfad = Aufgabe.normalisierePfad(pfad)
    if (fs.existsSync(this.pfad)) {
      this.inhalt = leseRepoDatei(this.pfad)
      if (this.inhalt) {
        this.stichwörter = sammleStichwörter(this.inhalt)
        this.titel = gibInhaltEinesTexMakros('liAufgabenTitel', this.inhalt)
      }
    }
  }

  static normalisierePfad (pfad: string): string {
    if (pfad.includes(repositoryPfad)) {
      return pfad
    }
    return path.join(repositoryPfad, pfad)
  }

  static istAufgabe (pfad: string): boolean {
    if (pfad.match(Aufgabe.pfadRegExp)) {
      return true
    }
    return false
  }

  get titelFormatiert (): string {
    let titel: string
    if (this.titel) {
      titel = `„${this.titel}“`
    } else {
      titel = 'Aufgabe'
    }

    return titel
  }

  get stichwörterFormatiert (): string {
    if (this.stichwörter && this.stichwörter.length > 0) {
      return ` (${this.stichwörter.join(', ')})`
    }
    return ''
  }

  get link (): string {
    return (
      generiereLink(this.titelFormatiert, this.pfad, path.basename(this.pfad)) +
      this.stichwörterFormatiert
    )
  }

  static vergleichePfade (a: Aufgabe, b: Aufgabe): number {
    if (a.pfad < b.pfad) {
      return -1
    }
    if (a.pfad > b.pfad) {
      return 1
    }
    return 0
  }

  get texEinbindenMakro (): string {
    let relativerPfad = macheRelativenPfad(this.pfad)
    relativerPfad = relativerPfad.replace('.tex', '')
    return `\\liAufgabe{${relativerPfad}}`
  }

  get relativerPfad (): string {
    return macheRelativenPfad(this.pfad)
  }
}

export class ExamensAufgabe extends Aufgabe {
  thema?: number
  teilaufgabe?: number
  aufgabe: number

  examen: Examen

  static pfadRegExp: RegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/

  static schwacherPfadRegExp: RegExp = /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/

  constructor (pfad: string, examen: Examen) {
    super(pfad)
    this.examen = examen
    this.istExamen = true
    examen.aufgaben[pfad] = this
    const treffer = pfad.match(ExamensAufgabe.pfadRegExp)
    if (!treffer || !treffer.groups) {
      zeigeFehler(`Konnten den Pfad der Examensaufgabe nicht lesen: ${pfad}`)
    }
    const gruppen = treffer.groups
    this.aufgabe = parseInt(gruppen.aufgabe)
    if (gruppen.thema) {
      this.thema = parseInt(gruppen.thema)
    }
    if (gruppen.teilaufgabe) {
      this.teilaufgabe = parseInt(gruppen.teilaufgabe)
    }
  }

  static istExamensAufgabe (pfad: string): boolean {
    if (pfad.match(ExamensAufgabe.pfadRegExp)) {
      return true
    }
    return false
  }

  get examensReferenz (): string {
    return this.examen.referenz
  }

  get aufgabenReferenz (): string {
    const output = []
    if (this.thema) output.push(`T${this.thema}`)
    if (this.teilaufgabe) output.push(`TA${this.teilaufgabe}`)
    output.push(`A${this.aufgabe}`)
    return output.join(' ')
  }

  get titelKurz (): string {
    const ausgabe = `${this.examen.titelKurz} ${this.aufgabenReferenz}`
    if (this.titel) return `„${this.titel}“ ${ausgabe}`
    return ausgabe
  }

  gibTitelNurAufgabe (alsMarkdownLink: boolean = false): string {
    const ausgabe = `Aufgabe ${this.aufgabe}${this.stichwörterFormatiert}`
    if (alsMarkdownLink) {
      return generiereLink(ausgabe, this.pfad, this.dateiName)
    }
    return ausgabe
  }

  get dateiName () {
    const aufgabenReferenz = this.aufgabenReferenz.replace(/ /g, '-')
    return `${this.examen.dateiName}_${aufgabenReferenz}`
  }

  get link (): string {
    return (
      generiereLink(this.titelKurz, this.pfad, this.dateiName) +
      this.stichwörterFormatiert
    )
  }

  static erzeugePfad (arg1: number, arg2?: number, arg3?: number): string {
    if (arg1 && arg2 && arg3) {
      return path.join(
        `Thema-${arg1}`,
        `Teilaufgabe-${arg2}`,
        `Aufgabe-${arg3}.tex`
      )
    } else if (arg1 && arg2 && !arg3) {
      return path.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`)
    } else {
      return `Aufgabe-${arg1}.tex`
    }
  }

  get texEinbindenMakro (): string {
    let relativerPfad = macheRelativenPfad(this.pfad)
    relativerPfad = relativerPfad.replace('Staatsexamen/', '')
    relativerPfad = relativerPfad.replace('.tex', '')
    return `\\liExamensAufgabe{${relativerPfad}}`
  }
}

export class AufgabenSammlung {
  aufgaben: { [pfad: string]: Aufgabe }

  examenSammlung: ExamenSammlung

  constructor (examenSammlung: ExamenSammlung) {
    this.examenSammlung = examenSammlung
    this.aufgaben = {}
    const dateien = glob.sync('**/*.tex', { cwd: repositoryPfad })
    this.aufgaben = {}
    for (const pfad of dateien) {
      const aufgabe = this.erzeugeAufgabe(pfad)
      if (aufgabe) {
        this.aufgaben[macheRelativenPfad(pfad)] = aufgabe
      }
    }
  }

  istAufgabenPfad (pfad: string): boolean {
    return ExamensAufgabe.istExamensAufgabe(pfad) || Aufgabe.istAufgabe(pfad)
  }

  erzeugeAufgabe (pfad: string): Aufgabe | undefined {
    if (ExamensAufgabe.istExamensAufgabe(pfad)) {
      return new ExamensAufgabe(pfad, this.examenSammlung.gibDurchPfad(pfad))
    } else if (Aufgabe.istAufgabe(pfad)) {
      return new Aufgabe(pfad)
    }
  }

  gib (pfad: string): Aufgabe {
    return this.aufgaben[macheRelativenPfad(pfad)]
  }
}
