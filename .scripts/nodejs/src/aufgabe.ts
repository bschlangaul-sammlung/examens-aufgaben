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

function umgebeMitKlammern (text: string): string {
  return `{${text}}`
}

/**
 * Die Attribute beginnen hier mit Großbuchstaben, damit sie nicht für
 * die TeX-Ausgabe konvertiert werden müssen. Wir verwenden `PascalCase` als
 * Schlüsselnamen ähnlich wie das TeX-Paket `fontspec`.
 *
 * Siehe `.tex/pakete/aufgaben-metadaten.sty` und `.tex/pakete/basis.sty`
 */
export interface AufgabenMetadaten {
  Titel: string
  Thematik?: string

  /**
   * Alle Stichwörter mit `, ` zu einem String zusammengefügt.
   */
  Stichwoerter?: string

  /**
   * Erstes Makro `\footcite`, der Inhalt in den geschweiften Klammern, z. B.
   * `\footcite[Aufgabe 2]{aud:ab:7}`: `aud:ab:7`
   *
   * @TODO: Sollte Zitat heißen
   */
  Fussnote?: string

  /**
   * Erstes Makro `\footcite`, der Inhalt in den eckigen Klammern, z. B.
   * `\footcite[Aufgabe 2]{aud:ab:7}`: `Aufgabe 2`
   *
   * @TODO: Sollte ZitatBeschreibung heißen
   */
  FussnoteSeite?: string

  BearbeitungsStand?: 'OCR' | 'TeX'
  Korrektheit?: 'unsicher' | 'absolut korrekt'

  /**
   * Der relative Datei-Pfad der Aufgabe, z. B. `Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex`
   */
  RelativerPfad: string

  ExamenNummer?: number
  ExamenJahr?: number
  ExamenMonat?: string
  ExamenThemaNr?: number
  ExamenTeilaufgabeNr?: number
  ExamenAufgabeNr?: number
}

export class Aufgabe {
  /**
   * Der absolute Pfad zur Aufgabe
   */
  pfad: string

  /**
   * Der Textinhalt der Aufgabe, d. h. das TeX-Markup als String.
   */
  inhalt: string

  stichwörter: string[] = []
  titel?: string

  metadaten_: AufgabenMetadaten

  /**
   * Zeigt an, ob die Aufgabe eine normale Aufgabe ist oder eine Examensaufgabe.
   * Dieser Wert wird in der spezialisierten Klasse Examensaufgabe auf wahr gesetzt.
   */
  istExamen: boolean = false

  static pfadRegExp: RegExp = /.*Aufgabe_.*\.tex/

  constructor (pfad: string) {
    this.pfad = Aufgabe.normalisierePfad(pfad)
    if (!fs.existsSync(this.pfad)) {
      throw new Error(
        `Die Aufgabe mit dem Dateipfad ${this.pfad} existiert nicht.`
      )
    }
    this.inhalt = leseRepoDatei(this.pfad)
    this.stichwörter = sammleStichwörter(this.inhalt)
    this.titel = gibInhaltEinesTexMakros('liAufgabenTitel', this.inhalt)

    const metaDaten = this.leseMetadatenVonTex()
    if (metaDaten != null) {
      this.metadaten_ = metaDaten
    } else {
      this.metadaten_ = {
        Titel: '',
        RelativerPfad: this.relativerPfad
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
    if (pfad.match(Aufgabe.pfadRegExp) != null) {
      return true
    }
    return false
  }

  /**
   * ```tex
   * \liAufgabenMetadaten{
   *   Titel = {Aufgabe 5},
   *   Thematik = {Regal mit DVDs, CDs und BDs},
   *   RelativerPfad = Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex,
   *   Fussnote = examen:66116:2014:09,
   *   ExamenNummer = 66116,
   *   ExamenJahr = 2014,
   *   ExamenMonat = 09,
   *   ExamenThemaNr = 2,
   *   ExamenTeilaufgabeNr = 2,
   *   ExamenAufgabeNr = 5,
   * }
   * ```
   */
  leseMetadatenVonTex (): AufgabenMetadaten | undefined {
    function reinige (text: string): string {
      text = text.trim()
      text = text.replace(/\}?,$/, '')
      text = text.replace(/^\{?/, '')
      text = text.trim()
      return text
    }
    const ergebnis: any = {}
    const match = this.inhalt.match(
      new RegExp(/\\liAufgabenMetadaten{(.*)\n}/, 's')
    )
    if (match != null) {
      const zeilen = match[1]
      for (const zeile of zeilen.split('\n')) {
        const schlüsselWert = zeile.split('=')
        if (schlüsselWert.length === 2) {
          ergebnis[reinige(schlüsselWert[0])] = reinige(schlüsselWert[1])
        }
      }
      return ergebnis as AufgabenMetadaten
    }
  }

  erzeugeMetadaten (): AufgabenMetadaten {
    const meta: AufgabenMetadaten = {
      Titel: this.titel != null && this.titel !== '' ? this.titel : 'Aufgabe',
      Thematik:
        this.titel != null && this.titel !== '' ? this.titel : 'keine Thematik',
      RelativerPfad: this.relativerPfad
    }

    const section = this.inhalt.match(/\\section\{(.+?)[\n\\\}\{]/)
    if (section != null && section[1] != null) {
      meta.Titel = section[1]
    }

    const fussnoteZitat = this.inhalt.match(
      /\\footcite(\[([^\]]+)\])?\{([^\}]+)\}/
    )
    if (fussnoteZitat != null) {
      if (fussnoteZitat[2] != null) {
        meta.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2])
      }
      if (fussnoteZitat[3] != null) {
        meta.Fussnote = fussnoteZitat[3]
      }
    }

    return meta
  }

  get titelFormatiert (): string {
    let titel: string
    if (this.titel != null) {
      titel = `„${this.titel}“`
    } else {
      titel = 'Aufgabe'
    }

    return titel
  }

  get stichwörterFormatiert (): string {
    if (this.stichwörter != null && this.stichwörter.length > 0) {
      return ` (${this.stichwörter.join(', ')})`
    }
    return ''
  }

  /**
   * Formatierter Link zur Tex-Datei.
   */
  get linkTex (): string {
    return generiereLink('.tex', this.pfad, { linkePdf: false })
  }

  /**
   * Formatierter Link zur PDF-Datei auf Github mit den Stichwörtern.
   */
  get link (): string {
    return (
      generiereLink(this.titelFormatiert, this.pfad) +
      this.stichwörterFormatiert +
      ' (' +
      this.linkTex +
      ') '
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
    if (treffer == null || treffer.groups == null) {
      zeigeFehler(`Konnten den Pfad der Examensaufgabe nicht lesen: ${pfad}`)
    }
    const gruppen = treffer.groups
    this.aufgabe = parseInt(gruppen.aufgabe)
    if (gruppen.thema != null) {
      this.thema = parseInt(gruppen.thema)
    }
    if (gruppen.teilaufgabe != null) {
      this.teilaufgabe = parseInt(gruppen.teilaufgabe)
    }
  }

  static istExamensAufgabe (pfad: string): boolean {
    if (pfad.match(ExamensAufgabe.pfadRegExp) != null) {
      return true
    }
    return false
  }

  erzeugeMetadaten (): AufgabenMetadaten {
    const meta = super.erzeugeMetadaten()

    meta.ExamenNummer = this.examen.nummer
    meta.ExamenJahr = this.examen.jahr
    meta.ExamenMonat = this.examen.monatMitNullen

    if (this.thema != null) {
      meta.ExamenThemaNr = this.thema
    }
    if (this.teilaufgabe != null) {
      meta.ExamenTeilaufgabeNr = this.teilaufgabe
    }

    meta.ExamenAufgabeNr = this.aufgabe
    return meta
  }

  get examensReferenz (): string {
    return this.examen.referenz
  }

  get aufgabenReferenz (): string {
    const output = []
    if (this.thema != null) {
      output.push(`T${this.thema}`)
    }
    if (this.teilaufgabe != null) {
      output.push(`TA${this.teilaufgabe}`)
    }
    output.push(`A${this.aufgabe}`)
    return output.join(' ')
  }

  get titelKurz (): string {
    const ausgabe = `${this.examen.titelKurz} ${this.aufgabenReferenz}`
    if (this.titel != null) {
      return `„${this.titel}“ ${ausgabe}`
    }
    return ausgabe
  }

  gibTitelNurAufgabe (alsMarkdownLink: boolean = false): string {
    const ausgabe = `Aufgabe ${this.aufgabe}${this.stichwörterFormatiert}`
    if (alsMarkdownLink) {
      return generiereLink(ausgabe, this.pfad)
    }
    return ausgabe
  }

  get dateiName (): string {
    const aufgabenReferenz = this.aufgabenReferenz.replace(/ /g, '-')
    return `${this.examen.dateiName}_${aufgabenReferenz}`
  }

  get link (): string {
    return (
      generiereLink(this.titelKurz, this.pfad) +
      this.stichwörterFormatiert +
      ' (' +
      this.linkTex +
      ') '
    )
  }

  static erzeugePfad (arg1: number, arg2?: number, arg3?: number): string {
    if (arg1 != null && arg2 != null && arg3 != null) {
      return path.join(
        `Thema-${arg1}`,
        `Teilaufgabe-${arg2}`,
        `Aufgabe-${arg3}.tex`
      )
    } else if (arg1 != null && arg2 != null && arg3 == null) {
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
      if (aufgabe != null) {
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
