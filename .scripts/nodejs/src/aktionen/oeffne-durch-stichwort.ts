import { gibStichwortVerzeichnis, gibStichwortBaum } from '../stichwort-verzeichnis'

import { öffneProgramm } from '../helfer'

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
