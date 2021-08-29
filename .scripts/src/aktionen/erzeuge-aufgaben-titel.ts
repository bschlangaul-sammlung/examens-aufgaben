import path from 'path'
import { ExamensAufgabe } from '../aufgabe'
import { aufgabenSammlung } from '../sammlung'

interface Titel {
  Titel: string
  Thematik?: string
  RelativerPfad: string
  Fussnote?: string
  FussnoteSeite?: string
  ExamenNummer?: number
  ExamenJahr?: number
  ExamenMonat?: string
  ExamenThemaNr?: number
  ExamenTeilaufgabeNr?: number
  ExamenAufgabeNr?: number
}

function umgebeMitKlammern (text: string): string {
  return `{${text}}`
}

function sammleDaten (dateiPfad: string): Titel {
  const aufgabe = aufgabenSammlung.gib(dateiPfad)
  const titel: Titel = {
    Titel: aufgabe.titel != null ? aufgabe.titel : 'Aufgabe',
    Thematik: aufgabe.titel,
    RelativerPfad: aufgabe.relativerPfad
  }

  if (aufgabe.inhalt != null) {
    const section = aufgabe.inhalt.match(/\\section\{(.+?)[\\\}\{]/)
    if (section != null) {
      if (section[1] != null) titel.Titel = section[1]
    }

    const fussnoteZitat = aufgabe.inhalt.match(
      /\\footcite(\[([^\]]+)\])?\{([^\}]+)\}/
    )
    if (fussnoteZitat != null) {
      if (fussnoteZitat[2] != null)
        titel.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2])
      if (fussnoteZitat[3] != null) titel.Fussnote = fussnoteZitat[3]
    }
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

  titel.Titel = umgebeMitKlammern(titel.Titel)
  if (titel.Thematik) titel.Thematik = umgebeMitKlammern(titel.Thematik)

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
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   Fussnote = sosy:pu:4,
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
  dateiPfad = path.resolve(dateiPfad)
  const titel = sammleDaten(dateiPfad)
  const texMarkup = macheTex(titel)

  console.log(texMarkup)
}
