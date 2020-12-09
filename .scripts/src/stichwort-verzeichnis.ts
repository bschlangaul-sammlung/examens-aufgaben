
import yaml from 'js-yaml'
import glob from 'glob'

import { leseRepoDatei, repositoryPfad } from './helfer'
import { Aufgabe, ladeAufgabe } from './aufgabe'

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

  fügeStichwortSicherHinzu(stichwort: string): boolean {
    if (this.flach.has(stichwort)) {
      throw Error(`Doppeltes Stichwort: ${stichwort}`)
    } else {
      this.flach.add(stichwort)
      return false
    }
  }

  existiertStichwort(stichwort: string): boolean {
    return this.flach.has(stichwort)
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
      if (!this.fügeStichwortSicherHinzu(eingang)) {
        ausgang[eingang] = true
      }
    } else if (Array.isArray(eingang)) {
      for (const t of eingang) {
        this.normalisiereBaum(t, ausgang)
      }
    } else if (typeof eingang === 'object') {
      for (const stichwort in eingang) {
        if (!this.fügeStichwortSicherHinzu(stichwort)) {
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
    for (const s in baum) {
      if (s === stichwort) {
        if (typeof baum[s] === 'boolean') {
          return true
        } else {
          return <Baum> baum[s]
        }
      } else if (typeof baum[s] === 'object') {
        const ergebnis = this.gibUnterBaum(stichwort, <Baum> baum[s])
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

class StichwortVerzeichnis {
  verzeichnis: { [schlüssel: string]: Set<Aufgabe> }
  aufgaben: { [dateiPfad: string]: Aufgabe }

  constructor () {
    const dateien = glob.sync('**/*.tex', { cwd: repositoryPfad })
    this.verzeichnis = {}
    this.aufgaben = {}
    for (const pfad of dateien) {
      const aufgabe = this.ladeAufgabe(pfad)
      for (const stichwort of aufgabe.stichwörter) {
        if (!stichwortBaum.existiertStichwort(stichwort)) {
          throw new Error(`Das Stichwort „${stichwort}“ in der Datei „${pfad}“ gibt es nicht.`)
        }
        if (this.verzeichnis[stichwort]) {
          this.verzeichnis[stichwort].add(aufgabe)
        } else {
          this.verzeichnis[stichwort] = new Set<Aufgabe>()
          this.verzeichnis[stichwort].add(aufgabe)
        }
      }
    }
  }

  ladeAufgabe (pfad: string): Aufgabe {
    if (this.aufgaben[pfad]) return this.aufgaben[pfad]
    const aufgabe = ladeAufgabe(pfad)
    this.aufgaben[pfad] = aufgabe
    return aufgabe
  }

  gibAufgabenMitStichwort (stichwort: string): Set<Aufgabe>  {
    if (this.verzeichnis[stichwort]) {
      return this.verzeichnis[stichwort]
    }
    return new Set<Aufgabe>()
  }

  gibAufgabenMitStichwortUnterBaum (stichwort: string): Set<Aufgabe> {
    const stichwörter = stichwortBaum.gibFlacheListe(stichwort)
    const aufgaben = new Set<Aufgabe>()
    for (const stichwort of stichwörter) {
      for (const aufgabe of this.gibAufgabenMitStichwort(stichwort)) {
        aufgaben.add(aufgabe)
      }
    }
    return aufgaben
  }
}

export const stichwortVerzeichnis = new StichwortVerzeichnis()
