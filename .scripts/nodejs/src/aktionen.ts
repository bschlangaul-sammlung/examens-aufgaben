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
export default {
  erzeugeReadme,
  erzeugeTexDokumentation,
  kompiliereTex,
  konvertiereFlaciZuTikz,
  validiere,
  führeSqlAus,
  erzeugeAufgabenMetadaten
}
