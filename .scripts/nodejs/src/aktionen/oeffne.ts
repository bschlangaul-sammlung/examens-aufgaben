import fs from 'fs'

import { gibExamenSammlung } from '../examen'
import { öffneProgramm } from '../helfer'
import { öffneDurchBibtex } from './oeffne-durch-bibtex'

const examenSammlung = gibExamenSammlung()

function öffneExamen (referenz: string): void {
  const examen = examenSammlung.gibDurchReferenz(referenz)
  if (fs.existsSync(examen.pfad)) {
    öffneProgramm('/usr/bin/xdg-open', examen.pfad)
  } else {
    console.log(`Den Pfad ${examen.pfad} gib es nicht.`)
  }
}

export function öffne (referenz: string): void {
  if (referenz.match(/\d{5}:\d{4}:\d{2}/) != null) {
    öffneExamen(referenz)
  } else {
    öffneDurchBibtex(referenz)
  }
}
