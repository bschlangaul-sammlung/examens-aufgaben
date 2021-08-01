import { ExamensAufgabe } from '../aufgabe'
import { aufgabenSammlung } from '../sammlung'

interface Titel {
  Titel: string
  Thematik?: string
  Fussnote?: string
  FussnoteSeite?: string
  RelativerPfad: string
  ExamenNummer?: number
  ExamenJahr?: number
  ExamenMonat?: string
  ExamenThemaNr?: number
  ExamenTeilaufgabeNr?: number
  ExamenAufgabeNr?: number
}

function sammleDaten (dateiPfad: string): Titel {
  const aufgabe = aufgabenSammlung.gib(dateiPfad)
  const titel: Titel = {
    Titel: aufgabe.titelFormatiert,
    Thematik: aufgabe.titel,
    RelativerPfad: aufgabe.relativerPfad
  }

  if (aufgabe.istExamen) {
    const examensAufgabe: ExamensAufgabe = aufgabe as ExamensAufgabe

    titel.ExamenNummer = examensAufgabe.examen.nummer
    titel.ExamenJahr = examensAufgabe.examen.jahr
    titel.ExamenMonat = examensAufgabe.examen.monatMitNullen

    if (examensAufgabe.thema != null) {
      titel.ExamenThemaNr = examensAufgabe.thema
    }
    if (examensAufgabe.teilaufgabe != null) {
      titel.ExamenTeilaufgabeNr = examensAufgabe.teilaufgabe
    }

    titel.ExamenAufgabeNr = examensAufgabe.aufgabe
  }

  return titel
}

function macheTex (titel: Titel): string {
  const schlüsselWertPaare: string[] = []
  Object.keys(titel).forEach(schlüssel => {
    const wert = titel[schlüssel as keyof Titel]
    schlüsselWertPaare.push(`  ${schlüssel} = ${wert},`)
  })
  const schlüsselWerte: string = schlüsselWertPaare.join('\n')
  return `\\liSetzeAufgabenTitel{\n${schlüsselWerte}\n}`
}

/**
 * ```latex
 * \liSetzeAufgabenTitel{
 *   Titel = Aufgabe 2,
 *   Thematik = Petri-Netz,
 *   Fussnote = sosy:pu:4,
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
export function erzeugeAufgabenTitel (dateiPfad: string): void {
  console.log(dateiPfad)

  const titel = sammleDaten(dateiPfad)
  const texMarkup = macheTex(titel)

  console.log(texMarkup)
}
