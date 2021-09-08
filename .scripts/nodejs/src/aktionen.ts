/**
 * Sammle alle Aktionen im Unterverzeichnis ./aktionen in ein Objekt und exportiere dieses.
 */

import erzeugeReadme from './aktionen/readme'
import erzeugeTexDokumentation from './aktionen/tex-dokumentation'
import kompiliereTex from './aktionen/tex-kompilation'
import konvertiereFlaciZuTikz from './aktionen/flaci'
import validiere from './aktionen/validiere'
import führeSqlAus from './aktionen/sql'
import erzeugeAufgabenMetadaten from './aktionen/aufgaben-metadaten'
import { öffne, öffneDurchStichwort } from './aktionen/oeffne'
import {
  erzeugeAufgabenVorlage,
  erzeugeExamensAufgabeVorlage
} from './aktionen/aufgaben-vorlage'
import { erzeugeExamenScansSammlung, erzeugeExamensLösungen } from './aktionen/aufgaben-sammlung'

export default {
  erzeugeAufgabenMetadaten,
  erzeugeAufgabenVorlage,
  erzeugeExamensAufgabeVorlage,
  erzeugeExamenScansSammlung,
  erzeugeExamensLösungen,
  erzeugeReadme,
  erzeugeTexDokumentation,
  führeSqlAus,
  kompiliereTex,
  konvertiereFlaciZuTikz,
  öffne,
  öffneDurchStichwort,
  validiere
}
