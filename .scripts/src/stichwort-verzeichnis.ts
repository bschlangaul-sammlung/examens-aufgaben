
import yaml from 'js-yaml'

import { leseRepoDatei } from './helfer'

interface Baum {
  [key: string]: Baum | true
}

class StichwortBaum {
  baum: Baum
  flach: Set<string>

  constructor() {
    this.flach = new Set<string>()
    const roherBaum = yaml.safeLoad(leseRepoDatei('Stichwortverzeichnis.yml'))
    if (!roherBaum) throw new Error(`Konnte die Konfigurationsdatei nicht lesen`)
    this.baum = this.normalisiereBaum(roherBaum)
  }

  existiertStichwort(stichwort: string): boolean {
    if (this.flach.has(stichwort)) {
      throw Error(`Doppeltes Stichwort: ${stichwort}`)
    } else {
      this.flach.add(stichwort)
      return false
    }
  }

  /**
   * Da die YAML-Datei wegen der Anzeige in der README-Datei alle
   * Stichwörter mit einem vorangstellten `- ` auflistete, ist die
   * Ausgabe aus der YAML-Datei sehr verschachtelt
   *
   * @param eingang
   * @param ausgang
   */
  normalisiereBaum (eingang: any, ausgang?: Baum): Baum {
    if (!ausgang) ausgang = {}
    if (typeof eingang === 'string') {
      if (!this.existiertStichwort(eingang)) {
        ausgang[eingang] = true
      }
    } else if (Array.isArray(eingang)) {
      for (const t of eingang) {
        this.normalisiereBaum(t, ausgang)
      }
    } else if (typeof eingang === 'object') {
      for (const stichwort in eingang) {
        if (!this.existiertStichwort(stichwort)) {
          ausgang[stichwort] = this.normalisiereBaum(eingang[stichwort])
        }
      }
    } else {
      throw new Error(`Unbekannter Datentyp für den Stichwortbaum: ${ausgang}`)
    }
    return ausgang
  }

  gibUnterBaum (stichwort: string, baum?: Baum): Baum | boolean {
    if (!baum) baum = this.baum
    for (const s in this.baum) {
      if (s === stichwort) {
        if (typeof this.baum[s] === 'boolean') {
          return true
        } else {
          return <Baum> this.baum[s]
        }
      } else if (typeof this.baum[s] === 'object') {
        const ergebnis = this.gibUnterBaum(stichwort, <Baum> this.baum[s])
        if (ergebnis) return ergebnis
      }
    }
    return false
  }

  private verflacheBaum (baum: Baum, flacherBaum?: Set<string>): Set<string> {
    if (!flacherBaum) flacherBaum = new Set<string>()
    for (const s in baum) {
      if (baum[s] === true) {
        flacherBaum.add(s)
      } else {
        flacherBaum.add(s)
        this.verflacheBaum(<Baum> baum[s], flacherBaum)
      }
    }
    return flacherBaum
  }

  /**
   * Das übergebene Stichwort ist in der flachen Stichwortliste enthalten.
   * @param stichwort
   */
  gibFlacheListe (stichwort: string): Set<string> {
    const unterBaum = this.gibUnterBaum(stichwort)
    if (!unterBaum) {
      return new Set()
    } else if (unterBaum === true) {
      return new Set([stichwort])
    } else {
      const flacheListe = this.verflacheBaum(unterBaum)
      flacheListe.add(stichwort)
      return flacheListe
    }
  }
}

export const stichwortBaum = new StichwortBaum()
