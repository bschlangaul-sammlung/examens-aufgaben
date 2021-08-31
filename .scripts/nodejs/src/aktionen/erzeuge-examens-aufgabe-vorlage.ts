import path from 'path'

import { repositoryPfad, zeigeFehler } from '../helfer'
import { ExamensAufgabe } from '../aufgabe'
import { Examen, ExamenReferenz } from '../examen'

import { erzeugeAufgabenVorlage } from './erzeuge-aufgaben-vorlage'

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

export function erzeugeExamensAufgabeVorlage (
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

  erzeugeAufgabenVorlage(pfad, {
    zitatReferenz: referenz
  })
  console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3))

  return pfad
}
