import fs from 'fs'

import { gibExamenSammlung } from '../examen'
import { öffneProgramm } from '../helfer'

import {
  gibStichwortVerzeichnis,
  gibStichwortBaum
} from '../stichwort-verzeichnis'

import { homedir } from 'os'
import path from 'path'

import glob from 'glob'

import { gibBibtexSammlung } from '../bibtex'

const basisPfadExterneDateien = path.join(
  homedir(),
  'git-repositories/content/informatik-studium'
)

export function öffneDurchBibtex (referenz: string): void {
  const externeDateien = glob.sync('**/*.pdf', { cwd: basisPfadExterneDateien })
  const sammlung = gibBibtexSammlung()

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

export function öffneDurchStichwort (stichwort: string): void {
  const aufgaben = gibStichwortVerzeichnis().gibAufgabenMitStichwort(stichwort)

  if (aufgaben.size === 0) {
    console.log(
      `Das Stichwort ${stichwort} gibt es nicht. War ${gibStichwortBaum().findeÄhnliches(
        stichwort
      )} gemeint?`
    )
  } else {
    for (const aufgabe of aufgaben) {
      console.log(aufgabe.texEinbindenMakro)
      öffneProgramm('code', aufgabe.pfad)
    }
  }
}

function öffneExamen (referenz: string): void {
  const examen = gibExamenSammlung().gibDurchReferenz(referenz)
  if (fs.existsSync(examen.pfad)) {
    öffneProgramm('/usr/bin/xdg-open', examen.pfad)
  } else {
    console.log(`Den Pfad ${examen.pfad} gib es nicht.`)
  }
}

export function öffne (referenz: string | string[]): void {
  if (Array.isArray(referenz)) {
    referenz = referenz.join(':')
  }

  if (referenz.match(/\d{5}:\d{4}:\d{2}/) != null) {
    öffneExamen(referenz)
  } else {
    öffneDurchBibtex(referenz)
  }
}
