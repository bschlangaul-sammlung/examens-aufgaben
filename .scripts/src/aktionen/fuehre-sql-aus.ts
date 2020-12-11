import childProcess from 'child_process'
import fs from 'fs'
import path from 'path'

import { leseDatei } from '../helfer'

class TexDateiMitSql {
  pfad: string
  inhalt: string
  datenbankName: string
  anzahlAnfragen: number = 0

  constructor(pfad: string) {
    this.pfad = pfad
    this.inhalt = leseDatei(pfad)
    this.datenbankName = this.findeErzeugungsCode()
  }

  private gibTemporärenPfad(bezeichner: string): string {
    return `${this.pfad}_${bezeichner}_tmp.sql`
  }

  private gibAnfrageBezeichner (anfrageNummer: number): string {
    const anfrageNummerFormatiert = anfrageNummer.toString().padStart(3, '0')
    return `anfrage${anfrageNummerFormatiert}`
  }

  private gibTemporärenAnfragenPfad(anfrageNummer: number): string {
    return this.gibTemporärenPfad(this.gibAnfrageBezeichner(anfrageNummer))
  }

  private gibTemporärenErzeugungsPfad(): string {
    return this.gibTemporärenPfad(`erzeugung`)
  }

  private schreibeTemporäreSqlDatei(bezeichner: string, inhalt: string): void {
    fs.writeFileSync(`${this.pfad}_${bezeichner}_tmp.sql`, inhalt)
  }

  private führePostgresqlAus (datei: string) {
    const prozess = childProcess.spawnSync('/usr/bin/sudo',
    [
      'PGPASSWORD=postgres',
      '-u', 'postgres',
      'psql',
      '-f', path.resolve(datei)
    ], { shell: '/usr/bin/zsh', encoding: 'utf-8' })
    if (prozess.status !== 0) {
      console.log(prozess.stderr)
      console.log(prozess.stdout)
      throw new Error('Postgresql wurde mit einem Fehler beendet.')
    } else {
      console.log(prozess.stdout)
      console.log(prozess.stderr)

    }
  }

  erzeugeDatenbank () {
    this.führePostgresqlAus(this.gibTemporärenErzeugungsPfad())
  }

  führeAlleAnfragenAus () {
    for (let index = 1; index <= this.anzahlAnfragen; index++) {
      this.führePostgresqlAus(this.gibTemporärenAnfragenPfad(index))
    }
  }

  private erzeugeCodeDatenbankErstellung (datenbankName: string): string {
    return `DROP DATABASE IF EXISTS ${datenbankName};\n` +
      `CREATE DATABASE ${datenbankName};\n` +
      `\\c ${datenbankName}\n` // mysql: USE name;
  }

  findeErzeugungsCode (): string {
    const regExp = /% ?Datenbankname: ?(\w+).*?\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs
    const datenbank = regExp.exec(this.inhalt)
    if (!datenbank) {
      throw new Error('Keine Erzeugungs-Code gefunden: % Datenbankname: Name\\begin{minted}{sql}…\\end{minted}')
    }
    // postgresql \c funktioniert nur mit klein geschriebenen Datenbank-Namen
    const datenbankName = datenbank[1].toLowerCase()
    const erzeugungsCode = datenbank[2]
    this.inhalt = this.inhalt.replace(regExp, '')

    this.schreibeTemporäreSqlDatei('erzeugung', this.erzeugeCodeDatenbankErstellung(datenbankName) + erzeugungsCode)
    return datenbankName
  }

  findeAnfragen () {
    const re = /\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs
    let übereinstimmung
    let zähler = 0
    do {
      übereinstimmung = re.exec(this.inhalt)
      if (übereinstimmung) {
        console.log(übereinstimmung[1])
        zähler++
        this.schreibeTemporäreSqlDatei(this.gibAnfrageBezeichner(zähler), `\\c ${this.datenbankName} \n` + übereinstimmung[1])
      }
    } while (übereinstimmung)
    this.anzahlAnfragen = zähler
  }

}

export function führeSqlAus (pfad: string) {

  const datei = new TexDateiMitSql(pfad)
  datei.findeAnfragen()
  datei.erzeugeDatenbank()
  datei.führeAlleAnfragenAus()

  //childProcess.spawnSync('postgresql')

}
