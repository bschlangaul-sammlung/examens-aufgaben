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
  index: { [referenz: string]: string }

  constructor() {
    this.index = {}
  }

  leseBibTexJsonEin (bibtexJson: any) {
    const entries = bibtexJson.entries
    for (const key in entries) {
      const entry = entries[key]
      if (entry.unexpected_fields && entry.unexpected_fields.file) {
        this.index[entry.entry_key] = entry.unexpected_fields.file
      }
    }
  }

  gibDateiNameDurchReferenz (referenz: string): string | undefined {
    if (this.index[referenz]) {
      return this.index[referenz]
    }
  }
}

export function öffneDurchBibtex (referenz: string) {
  const bibDateien = glob.sync('**/*.bib', { cwd: repositoryPfad })

  const externeDateien = glob.sync('**/*', { cwd: basisPfadExterneDateien })

  const konverter = new BibtexReferenzZuDateiKonverter()
  for (const bibDateiPfad of bibDateien) {
    konverter.leseBibTexJsonEin(analysierteBibDatei(bibDateiPfad))
  }

  const dateiName = konverter.gibDateiNameDurchReferenz(referenz)
  if (dateiName) {
    externeDateien.filter(function (externeDateiPfad: string) {
      if (externeDateiPfad.includes(dateiName)) {
        console.log(externeDateiPfad)
        öffneProgramm('xdg-open', path.join(basisPfadExterneDateien, externeDateiPfad))
      }
    })
  } else {
    console.log('Keine Datei gefunden')
  }

}
