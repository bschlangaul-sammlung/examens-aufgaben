import glob from 'glob'

import { BibLatexParser, BiblatexParseResult } from 'biblatex-csl-converter'
import { leseRepoDatei, repositoryPfad } from './helfer'

export function leseBibDatei (dateiPfad: string): BiblatexParseResult {
  const parser = new BibLatexParser(leseRepoDatei(dateiPfad), {
    processUnexpected: true,
    processUnknown: true
  })
  return parser.parse()
}

class BibtexSammlung {
  index: { [referenz: string]: string[] }

  constructor () {
    this.index = {}
    const bibDateien = glob.sync('**/*.bib', { cwd: repositoryPfad })
    for (const bibDateiPfad of bibDateien) {
      this.leseBibTexJsonEin(leseBibDatei(bibDateiPfad))
    }
  }

  private leseBibTexJsonEin (bibtexJson: BiblatexParseResult): void {
    const entries = bibtexJson.entries
    for (const key in entries) {
      const entry = entries[key]
      if (entry?.unexpected_fields?.file != null) {
        this.index[
          entry.entry_key
        ] = BibtexSammlung.findeMehrerePdfDateien(
          entry.unexpected_fields.file as string
        )
      }
    }
  }

  /**
   * @param eingabe z. B. AB1_Grundlagen.pdf AB1_Grundlagen_Lsg.pdf
   */
  private static findeMehrerePdfDateien (eingabe: string): string[] {
    let ergebnis = eingabe.split('.pdf')
    ergebnis = ergebnis
      .map(function (dateiBasisName: string): string {
        return dateiBasisName.trim().replace(/^, +/, '')
      })
      .filter(function (dateiBasisName: string): boolean {
        // eslint-disable-next-line
        return !!dateiBasisName
      })
    return ergebnis
  }

  gibDateiNameDurchReferenz (referenz: string): string[] | undefined {
    if (this.index[referenz] != null) {
      return this.index[referenz]
    }
  }
}

let bibtexSammlung: BibtexSammlung

export function gibBibtexSammlung (): BibtexSammlung {
  if (bibtexSammlung == null) {
    bibtexSammlung = new BibtexSammlung()
  }
  return bibtexSammlung
}
