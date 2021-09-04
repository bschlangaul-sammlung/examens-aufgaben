import path from 'path'
import fs from 'fs'

import { repositoryPfad, zeigeFehler, öffneVSCode } from '../helfer'
import { ExamensAufgabe } from '../aufgabe'
import { Examen, ExamenReferenz } from '../examen'

function überprüfeNummer (nummer: string | number): number | undefined {
  if (typeof nummer === 'string') {
    nummer = parseInt(nummer)
  }
  if (nummer != null) {
    return nummer
  }
}

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
    zitatReferenz: referenz
  })
  console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3))

  return pfad
}

export function erzeugeExamensAufgabeVorlage (
  ref: string,
  arg1: string,
  arg2: string,
  arg3: string
): void {
  const pfad = schreibeExamensAufgabeVorlage(ref, arg1, arg2, arg3)
  öffneVSCode(pfad)
}

interface AufgabenVorlagenWerte {
  /**
   * Der Wert kommt in das Makro
   * `liAufgabenTitel{}`. Es soll ein kurzer, einprägsamer Titel sein, z. B.
   * `Freizeitpark`
   *
   * @TODO Umbenennen in thematik
   */
  titel?: string

  /**
   * z. B. `Aufgabe 3`
   *
   * @TODO Umbenennen in titel
   */
  aufgabenName?: string

  /**
   * z. B. `db:ab:4` oder `examen:66111:2013:03`
   */
  zitatReferenz?: string
}

function gibVorlage (werte: AufgabenVorlagenWerte = {}): string {
  let titel = ''
  if (werte.titel != null) {
    titel = werte.titel
  }

  let aufgabenName = ''
  if (werte.aufgabenName != null) {
    aufgabenName = werte.aufgabenName
  }

  let zitatReferenz = ''
  if (werte.zitatReferenz != null) {
    zitatReferenz = werte.zitatReferenz
  }

  return (
    '\\documentclass{lehramt-informatik-aufgabe}\n' +
    '\\liLadePakete{}\n' +
    '\\begin{document}\n' +
    '\\liAufgabenTitel{' +
    titel +
    '}\n' +
    '\\section{' +
    aufgabenName +
    '\n' +
    '\\index{}\n' +
    '\\footcite{examen:' +
    zitatReferenz +
    '}}\n' +
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

export function erzeugeAufgabenVorlage (titel: string, cmdObj: object): void {
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
