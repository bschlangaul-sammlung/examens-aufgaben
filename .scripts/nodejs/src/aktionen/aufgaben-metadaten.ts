import path from 'path'

import { AufgabenMetadaten, gibAufgabenSammlung } from '../aufgabe'
import { schreibeDatei } from '../helfer'

function umgebeMitKlammern (text: string): string {
  text = text.trim()
  if (text.charAt(0) !== '{' && text.charAt(text.length - 1) !== '}') {
    text = `{${text}}`
  }
  return text
}

/**
 * @returns
 *
 * ```latex
 * \liAufgabenMetadaten{
 *   Titel = Aufgabe 2,
 *   Thematik = Petri-Netz,
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   ZitatSchluessel = sosy:pu:4,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
export function macheTexPlist (meta: AufgabenMetadaten): string {
  const m: any = meta
  for (const schlüssel of [
    'Titel',
    'Thematik',
    'ZitatBeschreibung',
    'Stichwoerter'
  ]) {
    if (m[schlüssel] != null) {
      m[schlüssel] = umgebeMitKlammern(m[schlüssel])
    }
  }
  meta = m as AufgabenMetadaten

  const schlüsselWertPaare: string[] = []
  Object.keys(meta).forEach(schlüssel => {
    let wert = meta[schlüssel as keyof AufgabenMetadaten]
    if (wert == null) wert = ''
    schlüsselWertPaare.push(`  ${schlüssel} = ${wert},`)
  })
  const schlüsselWerte: string = schlüsselWertPaare.join('\n')
  return `\\liAufgabenMetadaten{\n${schlüsselWerte}\n}`
}

export function schreibe (
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
 *   ZitatSchluessel = sosy:pu:4,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
export default function (dateiPfad: string): void {
  dateiPfad = path.resolve(dateiPfad)
  const aufgabenSammlung = gibAufgabenSammlung()
  const aufgabe = aufgabenSammlung.gib(dateiPfad)
  const texPlist = macheTexPlist(aufgabe.erzeugeMetadaten())

  if (aufgabe.inhalt !== null) {
    const inhalt = aufgabe.inhalt
    schreibe(dateiPfad, inhalt, texPlist)
  }

  console.log(texPlist)
}
