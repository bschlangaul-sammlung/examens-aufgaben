import path from 'path'

import { repositoryPfad } from '../helfer'
import { ExamensAufgabe } from '../aufgabe'
import { Examen, ExamenReferenz } from '../examen'

import { erzeugeAufgabenVorlage } from './erzeuge-aufgaben-vorlage'

function überprüfeNummer (number: string | number): number | undefined {
  if (typeof number === 'string') { number = parseInt(number) }
  if (number) return number
}

function erzeugeTeXMakro (exam: ExamenReferenz, arg1: string, arg2?: string, arg3?: string) {
  let questionMarkup = ''
  let macroSuffix = ''
  const examMarkup = `${exam.nummer} / ${exam.jahr} / ${exam.monat} :`
  if (arg1 && arg2 && arg3) {
    questionMarkup = `Thema ${arg1} Teilaufgabe ${arg2} Aufgabe ${arg3}`
    macroSuffix = 'TTA'
  } else if (arg1 && arg2 && !arg3) {
    questionMarkup = `Thema ${arg1} Aufgabe ${arg2}`
    macroSuffix = 'TA'
  } else {
    questionMarkup = `Aufgabe ${arg1}`
    macroSuffix = 'A'
  }
  return `\n\\ExamensAufgabe${macroSuffix} ${examMarkup} ${questionMarkup}`
}

export  function erzeugeExamensAufgabeVorlage (ref: string, arg1: string, arg2: string, arg3: string): string {
  const num1 = überprüfeNummer(arg1)
  const num2 = überprüfeNummer(arg2)
  const num3 = überprüfeNummer(arg3)

  if (!num1) {
    throw Error(`Undefined ${num1}`)
  }

  const examenReferenz = Examen.teileReferenz(ref)
  const pfad = path.join(
    repositoryPfad,
    Examen.erzeugePfad(examenReferenz.nummer, examenReferenz.jahr, examenReferenz.monat),
    ExamensAufgabe.erzeugePfad(num1, num2, num3)
  )

  erzeugeAufgabenVorlage(pfad, {
    zitatReferenz: ref
  })
  console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3))

  return pfad
}
