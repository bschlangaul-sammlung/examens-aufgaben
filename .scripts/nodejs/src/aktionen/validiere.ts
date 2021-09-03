import { gibAufgabenSammlung } from '../aufgabe'
import { gibStichwortVerzeichnis } from '../stichwort-verzeichnis'

export function validiere (): void {
  gibStichwortVerzeichnis()
  gibAufgabenSammlung()
}
