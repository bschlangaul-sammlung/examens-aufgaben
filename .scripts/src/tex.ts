import { leseRepoDatei } from './helfer'

function assembleMacroRegExp (macroName: String): RegExp {
  return new RegExp('\\' + macroName + '\{([^\}]*)\}', 'g')
}

function säubereStichwort (stichwort: string): string {
  return stichwort.replace(/\s+/g, ' ')
}

export function gibInhaltEinesTexMakros (macroName: string, markup: string): string | undefined {
  const regExp = assembleMacroRegExp(macroName)
  const match = regExp.exec(markup)
  if (match) return match[1]
}

/**
 * Sammle alle Stichwörter eines TeX-Inhaltes (string). Doppelte Stichwörter
 * werden nur als eins aufgelistet.
 *
 * @param {string} inhalt - Der Textinhalt einer TeX-Datei.
 */
export function sammleStichwörter (inhalt: string) {
  const re = assembleMacroRegExp('index')
  let match
  const stichwörter = new Set<string>()
  do {
    match = re.exec(inhalt)
    if (match) {
      const stichwort = säubereStichwort(match[1])
      stichwörter.add(stichwort)
    }
  } while (match)
  return Array.from(stichwörter)
}

/**
 * Collect the tags of a TeX file.
 * @param {string} pfad
 */
export function sammleStichwörterEinerDatei (pfad: string) {
  return sammleStichwörter(leseRepoDatei(pfad))
}
