import { gibStichwortVerzeichnis, gibStichwortBaum } from '../stichwort-verzeichnis'

import { öffneProgramm } from '../helfer'

const stichwortVerzeichnis = gibStichwortVerzeichnis()
const stichwortBaum = gibStichwortBaum()

export function öffneDurchStichwort (stichwort: string): void {
  const aufgaben = stichwortVerzeichnis.gibAufgabenMitStichwort(stichwort)

  if (aufgaben.size === 0) {
    console.log(
      `Das Stichwort ${stichwort} gibt es nicht. War ${stichwortBaum.findeÄhnliches(
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
