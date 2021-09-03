import { gibAufgabenSammlung } from '../aufgabe'
import { gibStichwortVerzeichnis } from '../stichwort-verzeichnis'

export default function (): void {
  gibStichwortVerzeichnis()
  gibAufgabenSammlung()
}
