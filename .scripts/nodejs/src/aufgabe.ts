import path from 'path'
import fs from 'fs'
import glob from 'glob'

import {
  leseRepoDatei,
  repositoryPfad,
  generiereLink,
  macheRelativenPfad,
  öffneVSCode,
  zeigeFehler
} from './helfer'
import { sammleStichwörter, gibInhaltEinesTexMakros } from './tex'
import { Examen, ExamenSammlung, gibExamenSammlung } from './examen'

function umgebeMitKlammern (text: string): string {
  return `{${text}}`
}

const bearbeitungsStand = [
  'unbekannt',
  'OCR',
  'nur Angabe',
  'mit Lösung'
] as const

/**
 * Wie ist der Bearbeitungsstand in Bezug auf den Satz im TeX-System.
 *
 * - unbekannt:  Werden die Metadaten automatisch erzeugt, ist der
 *               Bearbeitungsstand zu erst unbekannt
 * - OCR:        Das Ergebnis der Texterkennung (OCR = Optical Character
 *               Recognition) wurde übernommen. Außer der TeX-Klasse ist noch
 *               nichts geTeXt.
 * - nur Angabe: Die Angabe, d.h. die Aufgabenstellung wurde geTeXt.
 * - mit Lösung: Auch die Lösung wurde geTeXt.
 */
type BearbeitungsStand = typeof bearbeitungsStand[number]

const korrektheit = [
  'unbekannt',
  'unsicher',
  'überprüft',
  'automatisch überprüft',
  'korrekt'
] as const

/**
 * Information im Bezug auf die Korrektheit der Lösung.
 *
 * - unbekannt
 * - unsicher: Die Korrektheit der Lösung ist unsicher
 * - überprüft: Die Lösung wurde von einem Menschen überprüft
 * - automatisch überprüft: Die Korrektheit der Lösung wurde von einem Computer überprüft
 * - korrekt: ist Lösung ist korrekt.
 */
type Korrektheit = typeof korrektheit[number]

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
   */
  ZitatSchluessel?: string

  /**
   * Erstes Makro `\footcite`, der Inhalt in den eckigen Klammern, z. B.
   * `\footcite[Aufgabe 2]{aud:ab:7}`: `Aufgabe 2`
   */
  ZitatBeschreibung?: string

  /**
   * Siehe Dokumentation des Typs.
   */
  BearbeitungsStand: BearbeitungsStand

  /**
   * Siehe Dokumentation des Typs.
   */
  Korrektheit: Korrektheit

  /**
   * Der relative Datei-Pfad der Aufgabe, z. B. `Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex`
   */
  RelativerPfad: string

  /**
   * Relativer Pfad zu einer identischen Aufgabe z. B. `Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex`
   */
  IdentischeAufgabe?: string

  /**
   * Die sogenannte Einzelprüfungsnummer, z. B. `66115`.
   */
  ExamenNummer?: number

  /**
   * z. B. `Datenbanksysteme / Softwaretechnologie (vertieft)`
   */
  ExamenFach?: string

  /**
   * Das Jahr, in dem das Examen stattfindet.
   *
   * z. B. `2021`
   */
  ExamenJahr?: number

  /**
   * Der Monat mit Nullen, in dem das Examen stattfindet. Für Frühjahr `03` und
   * für Herbst `09`.
   */
  ExamenMonat?: string

  /**
   * In welcher Jahreszeit das Examen stattfindet. Der Monat 3 gibt
   * `Frühjahr` und der Monat 9 `Herbst`.
   */
  ExamenJahreszeit?: string
  ExamenThemaNr?: number
  ExamenTeilaufgabeNr?: number
  ExamenAufgabeNr?: number
}

/**
 * Eine allgemeine Aufgabe, die keinem Examen zugeordnet werden kann.
 */
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

  metadaten_?: AufgabenMetadaten

  /**
   * Zeigt an, ob die Aufgabe eine normale Aufgabe ist oder eine Examensaufgabe.
   * Dieser Wert wird in der spezialisierten Klasse Examensaufgabe auf wahr gesetzt.
   */
  istExamen: boolean = false

  static pfadRegExp: RegExp = /.*Aufgabe_.*\.tex/

  constructor (pfad: string) {
    this.pfad = Aufgabe.normalisierePfad(pfad)
    if (!fs.existsSync(this.pfad)) {
      this.inhalt = ''
    } else {
      this.inhalt = leseRepoDatei(this.pfad)
    }

    this.stichwörter = sammleStichwörter(this.inhalt)

    const metaDaten = this.leseMetadatenVonTex()
    if (metaDaten != null) {
      this.metadaten_ = metaDaten
    }

    this.validiere(this.bearbeitungsStand, bearbeitungsStand)
    this.validiere(this.korrektheit, korrektheit)
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

  static vergleichePfade (a: Aufgabe, b: Aufgabe): number {
    if (a.pfad < b.pfad) {
      return -1
    }
    if (a.pfad > b.pfad) {
      return 1
    }
    return 0
  }

  /**
   * ```tex
   * \liAufgabenMetadaten{
   *   Titel = {Aufgabe 5},
   *   Thematik = {Regal mit DVDs, CDs und BDs},
   *   RelativerPfad = Staatsexamen/66116/2014/09/Thema-2/Teilaufgabe-2/Aufgabe-5.tex,
   *   ZitatSchluessel = examen:66116:2014:09,
   *   ExamenNummer = 66116,
   *   ExamenJahr = 2014,
   *   ExamenMonat = 09,
   *   ExamenThemaNr = 2,
   *   ExamenTeilaufgabeNr = 2,
   *   ExamenAufgabeNr = 5,
   * }
   * ```
   */
  private leseMetadatenVonTex (): AufgabenMetadaten | undefined {
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

  /**
   * Erzeuge eine Objekt, dass dem Interface AufgabenMetadaten entspricht.
   * Die Reihenfolge der Attribute sollte eingehalten werden.
   */
  public erzeugeMetadaten (): AufgabenMetadaten {
    // eslint-disable-next-line
    const meta: AufgabenMetadaten = {
      Titel: umgebeMitKlammern(this.titel),
      Thematik: umgebeMitKlammern(this.thematik),
      RelativerPfad: this.relativerPfad
    } as AufgabenMetadaten

    if (this.identischeAufgabe != null) {
      meta.IdentischeAufgabe = this.identischeAufgabe
    }

    // Zitat
    if (this.zitat != null) {
      meta.ZitatSchluessel = this.zitat[0]
      if (this.zitat.length > 1) {
        meta.ZitatBeschreibung = umgebeMitKlammern(this.zitat[1])
      }
    }

    meta.BearbeitungsStand = this.bearbeitungsStand
    meta.Korrektheit = this.korrektheit

    if (this.stichwörter.length > 0) {
      meta.Stichwoerter = umgebeMitKlammern(this.stichwörter.join(', '))
    }

    return meta
  }

  private validiere (
    gegebenerWert: string | undefined,
    gültigeWerte: readonly string[]
  ): void {
    if (gegebenerWert != null && !gültigeWerte.includes(gegebenerWert)) {
      console.log('Der Wert ist nicht gültig: ' + gegebenerWert)
      console.log('Gültige Werte: ' + gültigeWerte.toString())
      öffneVSCode(this.pfad)
    }
  }

  /**
   * Der Titel einer Aufgabe. Er wird zuerst aus den TeX-Metadaten
   * `\liAufgabenMetadaten` (`Titel`) gelesen, anschließend aus dem ersten
   * `\section`-Makro. Wird kein Titel in der TeX-Datei gefunden, so lautet der
   * Titel `Aufgabe`.
   */
  get titel (): string {
    if (this.metadaten_ != null) {
      return this.metadaten_.Titel
    }

    const section = this.inhalt.match(/\\section\{(.+?)[\n\\}{]/)
    if (section?.[1] != null) {
      return section[1]
    }

    return 'Aufgabe'
  }

  /**
   * Die Thematik (wenige Wörter um sich an eine Aufgabe erinnern zu können)
   * einer Aufgabe. Er wird zuerst aus den TeX-Metadaten `\liAufgabenMetadaten`
   * (`Themaik`) gelesen, anschließend aus dem ersten `\liAufgabenTitel`-Makro.
   * Wird kein Titel in der TeX-Datei gefunden, so lautet der Titel `keine
   * Thematik`.
   */
  get thematik (): string {
    if (this.metadaten_?.Thematik != null) {
      return this.metadaten_.Thematik
    }

    const thematik = gibInhaltEinesTexMakros('liAufgabenTitel', this.inhalt)
    if (thematik != null) {
      return thematik
    }

    return 'keine Thematik'
  }

  /**
   * Inhalt des ersten `\footcite[ZitatBeschreibung]{ZitatSchluessel}` Makros
   * als Array `[ZitatSchluessel, ZitatBeschreibung]`.
   */
  get zitat (): string[] | undefined {
    const match = this.inhalt.match(/\\footcite(\[([^\]]+)\])?\{([^}]+)\}/)
    if (match != null) {
      const zitat = []
      if (match[3] != null) {
        zitat.push(match[3])
      }
      if (match[2] != null) {
        zitat.push(match[2])
      }
      return zitat
    }
  }

  /**
   * Siehe Dokumentation des Typs
   */
  get bearbeitungsStand (): BearbeitungsStand {
    if (this.metadaten_?.BearbeitungsStand != null) {
      return this.metadaten_.BearbeitungsStand
    }
    return 'unbekannt'
  }

  /**
   * Siehe Dokumentation des Typs
   */
  get korrektheit (): Korrektheit {
    if (this.metadaten_?.Korrektheit != null) {
      return this.metadaten_.Korrektheit
    }
    return 'unbekannt'
  }

  /**
   * Siehe Dokumentation des Typs
   */
  get identischeAufgabe (): string | undefined {
    if (this.metadaten_?.IdentischeAufgabe != null) {
      return this.metadaten_.IdentischeAufgabe
    }
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

  /**
   * `this.titel „this.thematik“`
   *
   * z. B. `Übung zum Master-Theorem` oder `Aufgabe 1 „Kleintierverein“`
   */
  get titelThematikFormatiert (): string {
    let ausgabe: string = this.titel
    if (this.thematik !== 'keine Thematik') {
      ausgabe += ` „${this.thematik}“`
    }
    return ausgabe
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
      generiereLink(this.titelThematikFormatiert, this.pfad) +
      this.stichwörterFormatiert +
      ' (' +
      this.linkTex +
      ') '
    )
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

/**
 * Eine Examensaufgabe
 */
export class ExamensAufgabe extends Aufgabe {
  public thema?: number
  public teilaufgabe?: number
  public aufgabe: number

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
      zeigeFehler(`Konnte den Pfad der Examensaufgabe nicht lesen: ${pfad}`)
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

  /**
   * @param ref z. B. `66116:2021:03`
   * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
   * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
   * @param arg3 Aufgabe-Nummer
   */
  public static erzeugeExamensAufgabe (
    referenz: string,
    arg1: string | number,
    arg2?: string | number,
    arg3?: string | number
  ): ExamensAufgabe {
    function gibNummer (arg: string | number | undefined): number | undefined {
      if (typeof arg === 'number') {
        return arg
      } else if (typeof arg === 'string') {
        return parseInt(arg)
      }
    }

    if (typeof arg1 === 'string') {
      arg1 = parseInt(arg1)
    }

    const pfad = ExamensAufgabe.erzeugePfad(
      arg1,
      gibNummer(arg2),
      gibNummer(arg3)
    )
    const examen = Examen.erzeugeExamenVonReferenz(referenz)
    return new ExamensAufgabe(
      path.join(examen.verzeichnis, pfad),
      examen
    )
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

  get aufgabeFormatiert (): string {
    return `Aufgabe ${this.aufgabe}`
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

  /**
   * Wie this.aufgabenReferenz bloß ohne Leerzeichen
   */
  get aufgabenReferenzKurz (): string {
    return this.aufgabenReferenz.replace(/ +/g, '')
  }

  get einbindenTexMakro (): string {
    let aufgabe = ''
    let suffix = ''
    const examen = `${this.examen.nummer} / ${this.examen.jahr} / ${this.examen.monat} :`
    if (
      this.thema != null &&
      this.teilaufgabe != null &&
      this.aufgabe != null
    ) {
      aufgabe = `Thema ${this.thema} Teilaufgabe ${this.teilaufgabe} Aufgabe ${this.aufgabe}`
      suffix = 'TTA'
    } else if (
      this.thema != null &&
      this.aufgabe != null &&
      this.teilaufgabe == null
    ) {
      aufgabe = `Thema ${this.thema} Aufgabe ${this.aufgabe}`
      suffix = 'TA'
    } else {
      aufgabe = `Aufgabe ${this.aufgabe}`
      suffix = 'A'
    }
    return `\n\\ExamensAufgabe${suffix} ${examen} ${aufgabe}`
  }

  /**
   * `„Greedy-Färben von Intervallen“ Examen 66115 Herbst 2017 T1 A8`
   */
  get titelKurz (): string {
    // `„Greedy-Färben von Intervallen“ Examen 66115 Herbst 2017 T1 A8`
    // const ausgabe = `${this.examen.titelKurz} ${this.aufgabenReferenz}`
    const ausgabe = `${this.examensReferenz} ${this.aufgabenReferenzKurz}`
    if (this.thematik !== 'keine Thematik') {
      return `„${this.thematik}“ ${ausgabe}`
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

let aufgabenSammlung: AufgabenSammlung

export function gibAufgabenSammlung (): AufgabenSammlung {
  if (aufgabenSammlung == null) {
    aufgabenSammlung = new AufgabenSammlung(gibExamenSammlung())
  }
  return aufgabenSammlung
}
