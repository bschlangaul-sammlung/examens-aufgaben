import { stichwortVerzeichnis, stichwortBaum } from '../sammlung'
import { öffneProgramm } from '../helfer'

export function öffneDurchStichwort (stichwort: string) {
  const aufgaben = stichwortVerzeichnis.gibAufgabenMitStichwort(stichwort)

  if (aufgaben.size === 0) {
    console.log(`Das Stichwort ${stichwort} gibt es nicht. War ${stichwortBaum.findeÄhnliches(stichwort)} gemeint?`)
  } else {
    for (const aufgabe of aufgaben) {
      console.log(aufgabe.texEinbindenMakro)
      öffneProgramm('code', aufgabe.pfad)
    }
  }
}
