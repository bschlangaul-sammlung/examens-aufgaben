import path from 'path'
import fs from 'fs'

import { leseRepoDatei, repositoryPfad, generiereMarkdownLink } from './helfer'
import { sammleStichwörter, gibInhaltEinesTexMakros } from './tex'

export class Aufgabe {
  pfad: string
  inhalt?: string

  stichwörter: string[] = []
  titel?: string

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
    if (pfad.indexOf(repositoryPfad) > -1) {
      return pfad
    }
    return path.join(repositoryPfad, pfad)
  }

  get titelFormatiert (): string {
    let präfix: string
    let stichwörter: string = ''
    if (this.titel) {
      präfix = this.titel
    } else {
      präfix = 'Aufgabe'
    }

    if (this.stichwörter) {
      stichwörter = this.stichwörterFormatiert
    }
    return `${präfix}${stichwörter}`
  }

  get stichwörterFormatiert (): string {
    if (this.stichwörter && this.stichwörter.length > 0) {
      return ` (${this.stichwörter.join(', ')})`
    }
    return ''
  }

  get markdownLink (): string {
    return generiereMarkdownLink(this.titelFormatiert, this.pfad)
  }
}

export class ExamensAufgabe extends Aufgabe {
  nummer: number
  jahr: number
  monat: number
  thema?: number
  teilaufgabe?: number
  aufgabe: number

  static pfadRegExp: RegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/

  static schwacherPfadRegExp: RegExp =  /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/

  constructor (pfad: string) {
    super(pfad)
    const match = pfad.match(ExamensAufgabe.pfadRegExp)
    if (!match || !match.groups) {
      throw new Error(`Konnten den Examenspfad nicht lesen: ${pfad}`)
    }
    const gruppen = match.groups
    this.nummer = parseInt(gruppen.nummer)
    this.jahr = parseInt(gruppen.jahr)
    this.monat = parseInt(gruppen.monat)
    this.aufgabe = parseInt(gruppen.aufgabe)
    if (gruppen.thema) this.thema = parseInt(gruppen.thema)
    if (gruppen.teilaufgabe) this.teilaufgabe = parseInt(gruppen.teilaufgabe)
  }

  static istExamensAufgabe (pfad: string): boolean {
    if (pfad.match(this.pfadRegExp)) {
      return true
    }
    return false
  }

  get examensReferenz (): string {
    return `${this.nummer}:${this.jahr}:${this.monat.toString().padStart(2, '0')}`
  }

  get aufgabenReferenz (): string {
    const output = []
    if (this.thema) output.push(`T${this.thema}`)
    if (this.teilaufgabe) output.push(`TA${this.teilaufgabe}`)
    output.push(`A${this.aufgabe}`)
    return output.join(' ')
  }

  get titelKurz (): string {
    return `${this.examensReferenz} ${this.aufgabenReferenz}${this.stichwörterFormatiert}`
  }

  gibTitelNurAufgabe (alsMarkdownLink: boolean = false): string {
    const ausgabe = `Aufgabe ${this.aufgabe}${this.stichwörterFormatiert}`
    if (alsMarkdownLink) {
      return generiereMarkdownLink(ausgabe, this.pfad)
    }
    return ausgabe
  }

  get markdownLink (): string {
    return generiereMarkdownLink(this.titelKurz, this.pfad)
  }
}

export function ladeAufgabe (pfad: string): Aufgabe {
  if (ExamensAufgabe.istExamensAufgabe(pfad)) {
    return new ExamensAufgabe(pfad)
  } else {
    return new Aufgabe(pfad)
  }
}
