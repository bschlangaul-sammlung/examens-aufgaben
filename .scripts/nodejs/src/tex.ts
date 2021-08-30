import { leseRepoDatei } from './helfer'

function assembleMacroRegExp (macroName: string): RegExp {
  return new RegExp('\\' + macroName + '{([^}]*)}', 'g')
}

function säubereStichwort (stichwort: string): string {
  return stichwort.replace(/\s+/g, ' ')
}

export function gibInhaltEinesTexMakros (
  makroName: string,
  markup: string
): string | undefined {
  const regExp = assembleMacroRegExp(makroName)
  const übereinstimmung = regExp.exec(markup)
  if (übereinstimmung != null) return übereinstimmung[1]
}

/**
 * Sammle alle Stichwörter eines TeX-Inhaltes (string). Doppelte Stichwörter
 * werden nur als eins aufgelistet.
 *
 * @param inhalt - Der Textinhalt einer TeX-Datei.
 */
export function sammleStichwörter (inhalt: string): string[] {
  const re = assembleMacroRegExp('index')
  let übereinstimmung
  const stichwörter = new Set<string>()
  do {
    übereinstimmung = re.exec(inhalt)
    if (übereinstimmung != null) {
      const stichwort = säubereStichwort(übereinstimmung[1])
      stichwörter.add(stichwort)
    }
  } while (übereinstimmung != null)
  return Array.from(stichwörter)
}

/**
 * Sammle alle Stichwörter einer TeX-Datei.
 */
export function sammleStichwörterEinerDatei (pfad: string): string[] {
  return sammleStichwörter(leseRepoDatei(pfad))
}
