import childProcess from 'child_process'
import fs from 'fs'
import chalk from 'chalk'

import { leseDatei, zeigeFehler } from '../helfer'

class TexDateiMitSql {
  pfad: string
  inhalt: string
  datenbankName: string
  anzahlAnfragen: number = 0

  constructor (pfad: string) {
    this.pfad = pfad
    this.inhalt = leseDatei(pfad)
    this.datenbankName = this.findeErzeugungsCode()
  }

  private gibTemporärenPfad (bezeichner: string): string {
    return `${this.pfad}_${bezeichner}_tmp.sql`
  }

  private gibAnfrageBezeichner (anfrageNummer: number): string {
    const anfrageNummerFormatiert = anfrageNummer.toString().padStart(3, '0')
    return `anfrage${anfrageNummerFormatiert}`
  }

  private gibTemporärenAnfragenPfad (anfrageNummer: number): string {
    return this.gibTemporärenPfad(this.gibAnfrageBezeichner(anfrageNummer))
  }

  private gibTemporärenErzeugungsPfad (): string {
    return this.gibTemporärenPfad('erzeugung')
  }

  private gibTemporärenLöschungsPfad (): string {
    return this.gibTemporärenPfad('loeschung')
  }

  private schreibeTemporäreSqlDatei (bezeichner: string, inhalt: string): void {
    fs.writeFileSync(`${this.pfad}_${bezeichner}_tmp.sql`, inhalt)
  }

  private führePostgresqlAus (datei: string, redselig: boolean = true): void {
    const pygmentize = childProcess.spawnSync(
      'pygmentize',
      ['-l', 'sql', datei],
      { encoding: 'utf-8' }
    )
    if (redselig) console.log(pygmentize.stdout)
    const prozess = childProcess.spawnSync(
      'sudo',
      [
        '-u',
        'postgres',
        'psql',
        '--quiet',
        '-f',
        datei,
        '-v',
        'ON_ERROR_STOP=1'
      ],
      {
        encoding: 'utf-8',
        env: { PGPASSWORD: 'postgres' },
        shell: '/usr/bin/zsh'
      }
    )
    if (prozess.status !== 0) {
      console.log(chalk.red(prozess.stderr))
      console.log(chalk.red(prozess.stdout))
      // zeigeFehler('Postgresql wurde mit einem Fehler beendet.')
    } else {
      if (redselig) console.log(prozess.stdout)
    }
  }

  erzeugeDatenbank (): void {
    this.führePostgresqlAus(this.gibTemporärenErzeugungsPfad(), false)
  }

  führeAnfrageAus (anfragenNummer: number): void {
    this.erzeugeDatenbank()
    console.log(chalk.red(`Anfrage Nummer ${anfragenNummer}:\n`))
    this.führePostgresqlAus(this.gibTemporärenAnfragenPfad(anfragenNummer))
  }

  führeAlleAnfragenAus (): void {
    for (let index = 1; index <= this.anzahlAnfragen; index++) {
      this.führeAnfrageAus(index)
    }
  }

  private erzeugeCodeDatenbankErstellung (datenbankName: string): string {
    return (
      `DROP DATABASE IF EXISTS ${datenbankName};\n` +
      `CREATE DATABASE ${datenbankName};\n` +
      `\\c ${datenbankName}\n`
    ) // mysql: USE name;
  }

  findeErzeugungsCode (): string {
    const regExp = /% ?Datenbankname: ?(\w+).*?\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs
    const datenbank = regExp.exec(this.inhalt)
    if (datenbank == null) {
      zeigeFehler(
        'Keine Erzeugungs-Code gefunden: % Datenbankname: Name\\begin{minted}{sql}…\\end{minted}'
      )
    }
    // postgresql \c funktioniert nur mit klein geschriebenen Datenbank-Namen
    const datenbankName = datenbank[1].toLowerCase()
    const erzeugungsCode = datenbank[2]
    this.inhalt = this.inhalt.replace(regExp, '')

    this.schreibeTemporäreSqlDatei(
      'erzeugung',
      this.erzeugeCodeDatenbankErstellung(datenbankName) + erzeugungsCode
    )
    return datenbankName
  }

  erzeugeLöschungsCode (): void {
    this.schreibeTemporäreSqlDatei(
      'loeschung',
      `DROP DATABASE IF EXISTS ${this.datenbankName};\n`
    )
  }

  findeAnfragen (): void {
    const re = /\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs
    let übereinstimmung
    let zähler = 0
    do {
      übereinstimmung = re.exec(this.inhalt)
      if (übereinstimmung != null) {
        zähler++
        this.schreibeTemporäreSqlDatei(
          this.gibAnfrageBezeichner(zähler),
          `\\c ${this.datenbankName} \n` + übereinstimmung[1]
        )
      }
    } while (übereinstimmung != null)
    this.anzahlAnfragen = zähler
  }

  aufräumen (): void {
    this.erzeugeLöschungsCode()
    this.führePostgresqlAus(this.gibTemporärenLöschungsPfad())
    fs.unlinkSync(this.gibTemporärenErzeugungsPfad())
    for (let index = 1; index <= this.anzahlAnfragen; index++) {
      fs.unlinkSync(this.gibTemporärenAnfragenPfad(index))
    }
    fs.unlinkSync(this.gibTemporärenLöschungsPfad())
  }
}

export default function (
  pfad: string,
  cmdObj: { [optionen: string]: any }
): void {
  const datei = new TexDateiMitSql(pfad)
  datei.findeAnfragen()
  if (cmdObj.anfrage != null) {
    datei.führeAnfrageAus(parseInt(cmdObj.anfrage))
  } else {
    datei.führeAlleAnfragenAus()
  }
  if (cmdObj.nichtLoeschen == null) {
    datei.aufräumen()
  }
}
