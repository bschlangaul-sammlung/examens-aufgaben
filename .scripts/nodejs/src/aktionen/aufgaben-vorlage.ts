import path from 'path'
import fs from 'fs'

import { repositoryPfad, zeigeFehler, öffneVSCode } from '../helfer'
import { AufgabenMetadaten, ExamensAufgabe } from '../aufgabe'
import { Examen, ExamenReferenz } from '../examen'
import { macheTexPlist } from './aufgaben-metadaten'

function überprüfeNummer (nummer: string | number): number | undefined {
  if (typeof nummer === 'string') {
    nummer = parseInt(nummer)
  }
  if (nummer != null) {
    return nummer
  }
}

/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function erzeugeTeXMakro (
  referenz: ExamenReferenz,
  arg1: string,
  arg2?: string,
  arg3?: string
): string {
  let aufgabe = ''
  let suffix = ''
  const examen = `${referenz.nummer} / ${referenz.jahr} / ${referenz.monat} :`
  if (arg1 != null && arg2 != null && arg3 != null) {
    aufgabe = `Thema ${arg1} Teilaufgabe ${arg2} Aufgabe ${arg3}`
    suffix = 'TTA'
  } else if (arg1 != null && arg2 != null && arg3 == null) {
    aufgabe = `Thema ${arg1} Aufgabe ${arg2}`
    suffix = 'TA'
  } else {
    aufgabe = `Aufgabe ${arg1}`
    suffix = 'A'
  }
  return `\n\\ExamensAufgabe${suffix} ${examen} ${aufgabe}`
}

interface AufgabenVorlagenWerte {
  /**
   * z. B. `Aufgabe 3`
   */
  titel?: string

  /**
   * Der Wert kommt in das Makro
   * `liAufgabenTitel{}`. Es soll ein kurzer, einprägsamer Titel sein, z. B.
   * `Freizeitpark`
   */
  thematik?: string

  /**
   * z. B. `db:ab:4` oder `examen:66111:2013:03`
   */
  zitatSchlüssel?: string
}

function gibVorlage (werte: AufgabenVorlagenWerte = {}): string {
  const meta: { [schlüssel: string]: string } = {}
  meta.Titel = werte.titel != null ? werte.titel : ''
  meta.Thematik = werte.thematik != null ? werte.thematik : ''
  meta.ZitatSchluessel =
    werte.zitatSchlüssel != null ? werte.zitatSchlüssel : ''

  const m = meta as unknown
  const plist = macheTexPlist(m as AufgabenMetadaten)

  return (
    '\\documentclass{lehramt-informatik-aufgabe}\n' +
    '\\liLadePakete{}\n' +
    '\\begin{document}\n' +
    plist + '\n' +
    '\\index{}\n' +
    '\\footcite{' +  meta.ZitatSchluessel + '}\n' +
    '\n' +
    '\\end{document}\n'
  )
}

function schreibeAufgabenVorlage (
  pfad: string,
  werte: AufgabenVorlagenWerte
): void {
  fs.mkdirSync(path.dirname(pfad), { recursive: true })
  if (!fs.existsSync(pfad)) {
    fs.writeFileSync(pfad, gibVorlage(werte), { encoding: 'utf-8' })
  }
}

export function erzeugeAufgabenVorlage (titel: string): void {
  let dateiName = 'Aufgabe_'
  if (titel != null) {
    const titelRein = titel.replace(/\s+/g, '-')
    dateiName = `${dateiName}${titelRein}`
  }
  const pfad = path.join(process.cwd(), `${dateiName}.tex`)
  if (!fs.existsSync(pfad)) {
    schreibeAufgabenVorlage(pfad, {
      titel
    })
  }
  öffneVSCode(pfad)
}

/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function schreibeExamensAufgabeVorlage (
  referenz: string,
  arg1: string,
  arg2: string,
  arg3: string
): string {
  const num1 = überprüfeNummer(arg1)
  const num2 = überprüfeNummer(arg2)
  const num3 = überprüfeNummer(arg3)

  if (num1 == null) {
    zeigeFehler('Undefined num1')
  }

  const examenReferenz = Examen.teileReferenz(referenz)
  const pfad = path.join(
    repositoryPfad,
    Examen.erzeugePfad(
      examenReferenz.nummer,
      examenReferenz.jahr,
      examenReferenz.monat
    ),
    ExamensAufgabe.erzeugePfad(num1, num2, num3)
  )

  schreibeAufgabenVorlage(pfad, {
    zitatSchlüssel: referenz
  })
  console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3))

  return pfad
}

/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
export function erzeugeExamensAufgabeVorlage (
  ref: string,
  arg1: string,
  arg2: string,
  arg3: string
): void {
  const pfad = schreibeExamensAufgabeVorlage(ref, arg1, arg2, arg3)
  öffneVSCode(pfad)
}
