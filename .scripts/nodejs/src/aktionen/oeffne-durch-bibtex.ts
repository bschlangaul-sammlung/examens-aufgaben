import { homedir } from 'os'
import path from 'path'

import glob from 'glob'

import { öffneProgramm } from '../helfer'
import { gibBigtexSammlung } from '../bibtex'

const basisPfadExterneDateien = path.join(
  homedir(),
  'git-repositories/content/informatik-studium'
)

export function öffneDurchBibtex (referenz: string): void {
  const externeDateien = glob.sync('**/*.pdf', { cwd: basisPfadExterneDateien })
  const sammlung = gibBigtexSammlung()

  const dateiNamen = sammlung.gibDateiNameDurchReferenz(referenz)

  if (dateiNamen == null) {
    console.log('Keine Datei gefunden')
  } else {
    for (const dateiName of dateiNamen) {
      externeDateien.filter(function (externerDateiPfad: string) {
        if (externerDateiPfad.includes(`${dateiName}.pdf`)) {
          console.log(`Öffne Datei: ${externerDateiPfad}`)
          öffneProgramm(
            'xdg-open',
            path.join(basisPfadExterneDateien, externerDateiPfad)
          )
        }
      })
    }
  }
}
