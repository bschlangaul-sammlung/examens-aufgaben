import path from 'path'

import {
  ExamensAufgabe,
  Aufgabe,
  AufgabenMetadaten,
  gibAufgabenSammlung
} from '../aufgabe'
import { schreibeDatei } from '../helfer'

function umgebeMitKlammern (text: string): string {
  return `{${text}}`
}

function sammleDaten (aufgabe: Aufgabe): AufgabenMetadaten {
  const titel: AufgabenMetadaten = {
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
      if (fussnoteZitat[2] != null) {
        titel.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2])
      }
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

function macheTex (titel: AufgabenMetadaten): string {
  const schlüsselWertPaare: string[] = []
  Object.keys(titel).forEach(schlüssel => {
    const wert = titel[schlüssel as keyof AufgabenMetadaten]
    schlüsselWertPaare.push(`  ${schlüssel} = ${wert},`)
  })
  const schlüsselWerte: string = schlüsselWertPaare.join('\n')
  return `\\liAufgabenMetadaten{\n${schlüsselWerte}\n}`
}

export function schreibeTitel (
  dateiPfad: string,
  aufgabenInhalt: string,
  titelTexMakro: string
): boolean {
  let aufgabenTitelErsetzt: string

  titelTexMakro += '\n'

  if (aufgabenInhalt.includes('\\liAufgabenMetadaten{')) {
    // /s s (dotall) modifier, +? one or more (non-greedy)
    const regexp = new RegExp(/\\liAufgabenMetadaten\{.+?,?\n\}\n/, 's')
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
 * \liAufgabenMetadaten{
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
export function erzeugeAufgabenMetadaten (dateiPfad: string): void {
  dateiPfad = path.resolve(dateiPfad)
  const aufgabenSammlung = gibAufgabenSammlung()
  const aufgabe = aufgabenSammlung.gib(dateiPfad)

  const titel = sammleDaten(aufgabe)
  const texMarkup = macheTex(titel)

  if (aufgabe.inhalt !== null) {
    const inhalt = aufgabe.inhalt
    schreibeTitel(dateiPfad, inhalt, texMarkup)
  }

  console.log(texMarkup)
}
