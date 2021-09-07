import path from 'path'

import { gibAufgabenSammlung } from '../aufgabe'
import { schreibeDatei } from '../helfer'
import { machePlist } from '../tex'

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

export function macheAufgabenMetadatenPlist (meta: {
  [schlüssel: string]: any
}): string {
  return machePlist('liAufgabenMetadaten', meta, [
    'Titel',
    'Thematik',
    'ZitatBeschreibung',
    'Stichwoerter'
  ])
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

  const texPlist = machePlist(
    'liAufgabenMetadaten',
    aufgabe.erzeugeMetadaten(),
    ['Titel', 'Thematik', 'ZitatBeschreibung', 'Stichwoerter']
  )

  if (aufgabe.inhalt !== null) {
    const inhalt = aufgabe.inhalt
    schreibe(dateiPfad, inhalt, texPlist)
  }

  console.log(texPlist)
}
