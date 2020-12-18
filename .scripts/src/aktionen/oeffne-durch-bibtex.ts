import { BibLatexParser } from 'biblatex-csl-converter'
import { leseRepoDatei, repositoryPfad, öffneProgramm } from '../helfer'
import glob from 'glob'
import { homedir } from 'os'
import path from 'path'

const basisPfadExterneDateien =  path.join(homedir(), 'git-repositories/content/informatik-studium')

function analysierteBibDatei(dateiPfad: string) {
  let parser = new BibLatexParser(leseRepoDatei(dateiPfad), {processUnexpected: true, processUnknown: true})
  return parser.parse()
}

class BibtexReferenzZuDateiKonverter {
  index: { [referenz: string]: string[] }

  constructor() {
    this.index = {}
  }

  leseBibTexJsonEin (bibtexJson: any) {
    const entries = bibtexJson.entries
    for (const key in entries) {
      const entry = entries[key]
      if (entry.unexpected_fields && entry.unexpected_fields.file) {
        this.index[entry.entry_key] = this.findeMehrerePdfDatien(entry.unexpected_fields.file)
      }
    }
  }

  /**
   *
   * @param eingabe z. B. AB1_Grundlagen.pdf AB1_Grundlagen_Lsg.pdf
   */
  findeMehrerePdfDatien (eingabe: string): string[] {
    let ergebnis = eingabe.split('.pdf')
    ergebnis = ergebnis.map(function(dateiBasisName: string): string {
      return dateiBasisName.trim().replace(/^, +/, '')
    }).filter(function(dateiBasisName: string): boolean {
      return dateiBasisName ? true : false
    })
    return ergebnis
  }

  gibDateiNameDurchReferenz (referenz: string): string[] | undefined {
    if (this.index[referenz]) {
      return this.index[referenz]
    }
  }
}

export function öffneDurchBibtex (referenz: string) {
  const bibDateien = glob.sync('**/*.bib', { cwd: repositoryPfad })
  const externeDateien = glob.sync('**/*.pdf', { cwd: basisPfadExterneDateien })
  const konverter = new BibtexReferenzZuDateiKonverter()
  for (const bibDateiPfad of bibDateien) {
    konverter.leseBibTexJsonEin(analysierteBibDatei(bibDateiPfad))
  }

  const dateiNamen = konverter.gibDateiNameDurchReferenz(referenz)

  if (!dateiNamen) {
    console.log('Keine Datei gefunden')
  } else {
    for (const dateiName of dateiNamen) {
      externeDateien.filter(function (externerDateiPfad: string) {
        if (externerDateiPfad.includes(`${dateiName}.pdf`)) {
          console.log(`Öffne Datei: ${externerDateiPfad}`)
          öffneProgramm('xdg-open', path.join(basisPfadExterneDateien, externerDateiPfad))
        }
      })
    }
  }
}
