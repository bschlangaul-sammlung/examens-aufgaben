import path from 'path'
import { ExamensAufgabe, Aufgabe } from '../aufgabe'
import { aufgabenSammlung } from '../sammlung'
import { schreibeDatei } from '../helfer'

/**
 * Die Attribute beginnen hier mit Großbuchstaben, damit sie nicht für
 * die TeX-Ausgabe konvertiert werden müssen. Wir verwenden `PascalCase` als
 * Schlüsselnamen ähnlich wie das TeX-Paket `fontspec`.
 */
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
  BearbeitungsStand?: 'OCR' | 'TeX'
  Korrektheit?: 'unsicher' | 'absolut korrekt'
}

function umgebeMitKlammern (text: string): string {
  return `{${text}}`
}

function sammleDaten (aufgabe: Aufgabe): Titel {
  const titel: Titel = {
    Titel:
      aufgabe.titel != null && aufgabe.titel !== '' ? aufgabe.titel : 'Aufgabe',
    Thematik:
      aufgabe.titel != null && aufgabe.titel !== ''
        ? aufgabe.titel
        : 'keine Thematik',
    RelativerPfad: aufgabe.relativerPfad
  }

  if (aufgabe.inhalt != null) {
    const section = aufgabe.inhalt.match(/\\section\{(.+?)[\n\\\}\{]/)
    if (section != null) {
      if (section[1] != null) titel.Titel = section[1]
    }

    const fussnoteZitat = aufgabe.inhalt.match(
      /\\footcite(\[([^\]]+)\])?\{([^\}]+)\}/
    )
    if (fussnoteZitat != null) {
      if (fussnoteZitat[2] != null) { titel.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2]) }
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

export function schreibeTitel (
  dateiPfad: string,
  aufgabenInhalt: string,
  titelTexMakro: string
): boolean {
  let aufgabenTitelErsetzt: string

  titelTexMakro += '\n'

  if (aufgabenInhalt.includes('\\liSetzeAufgabenTitel{')) {
    // /s s (dotall) modifier, +? one or more (non-greedy)
    const regexp = new RegExp(/\\liSetzeAufgabenTitel\{.+?,?\n\}\n/, 's')
    aufgabenTitelErsetzt = aufgabenInhalt.replace(regexp, titelTexMakro)
  } else {
    aufgabenTitelErsetzt = aufgabenInhalt.replace(
      /(\\begin\{document\})/,
      '$1\n' + titelTexMakro
    )
  }

  if (aufgabenInhalt !== aufgabenTitelErsetzt) {
    schreibeDatei(dateiPfad, aufgabenTitelErsetzt)
    return true
  }
  return false
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
  const aufgabe = aufgabenSammlung.gib(dateiPfad)

  const titel = sammleDaten(aufgabe)
  const texMarkup = macheTex(titel)

  if (aufgabe.inhalt !== null) {
    const inhalt = aufgabe.inhalt as string
    schreibeTitel(dateiPfad, inhalt, texMarkup)
  }

  console.log(texMarkup)
}
