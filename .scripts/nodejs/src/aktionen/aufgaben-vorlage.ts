import path from 'path'
import fs from 'fs'

import { öffneVSCode } from '../helfer'
import { AufgabenMetadaten, ExamensAufgabe } from '../aufgabe'
import { macheTexPlist } from './aufgaben-metadaten'

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
    plist +
    '\n' +
    '\\index{}\n' +
    '\\footcite{' +
    meta.ZitatSchluessel +
    '}\n' +
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

function schreibeExamensAufgabeVorlage (
  examensAufgabe: ExamensAufgabe
): string {
  schreibeAufgabenVorlage(examensAufgabe.pfad, {
    titel: examensAufgabe.aufgabeFormatiert,
    zitatSchlüssel: 'examen:' + examensAufgabe.examen.referenz
  })
  return examensAufgabe.pfad
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
  const examensAufgabe = ExamensAufgabe.erzeugeExamensAufgabe(
    ref,
    arg1,
    arg2,
    arg3
  )
  const pfad = schreibeExamensAufgabeVorlage(examensAufgabe)
  öffneVSCode(pfad)
}
