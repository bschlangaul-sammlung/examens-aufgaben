import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'
import chalk from 'chalk'

const konfigurationsDateiPfad = path.join(
  path.sep,
  'etc',
  'lehramt-informatik.config.tex'
)

const githubRawUrl =
  'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main'

export function leseDatei (pfad: string) {
  return fs.readFileSync(pfad, { encoding: 'utf-8' })
}

export function schreibeDatei (pfad: string, inhalt: string) {
  return fs.writeFileSync(pfad, inhalt, { encoding: 'utf-8' })
}

export function zeigeFehler (meldung: string): never {
  console.error(chalk.red(meldung))
  process.exit(1)
}

function leseKonfigurationsDatei (pfad: string): string {
  const inhalt = leseDatei(pfad)
  const treffer = inhalt.match(/\\LehramtInformatikRepository\{(.*)\}/)
  if (!treffer) zeigeFehler(`Konfigurations-Datei nicht gefunden: ${pfad}`)
  return treffer[1]
}

export const repositoryPfad = leseKonfigurationsDatei(konfigurationsDateiPfad)

export function macheRelativenPfad (pfad: string): string {
  pfad = pfad.replace(repositoryPfad, '')
  return pfad.replace(/^\//, '')
}

export function leseRepoDatei (...args: string[]) {
  if (args[0].includes(repositoryPfad)) return leseDatei(path.join(...args))
  return leseDatei(path.join(repositoryPfad, ...args))
}

export function macheRepoPfad (...args: string[]) {
  if (args[0].includes(repositoryPfad)) return path.join(...args)
  return path.join(repositoryPfad, ...args)
}

export interface LinkEinstellung {
  /**
   * Wenn wahr, wird die PDF-Datei verlink und nicht die TeX-Datei.
   */
  linkePdf?: boolean
}

/**
 * Generiere eine Markdown- oder HTML-Link.
 *
 * @param text Der Text, der als Link gesetzt werden soll.
 * @param pfad Der Datei-Pfad, zu dem gelinkt werden soll.
 * @param downloadDateiName Der Dateiname, den die Datei haben soll, wenn sie
 * heruntergeladen wird. Dieser Parameter wird nur berücksichtig, wenn die Link
 * als HTML ausgegeben wird.
 * @param einstellung
 *
 * @returns Ein Link zu einer Datei auf Github, entweder im Markdown- oder im
 * HTML-Format.
 */
export function generiereLink (
  text: string,
  pfad: string,
  einstellung?: LinkEinstellung
): string {
  let linkePdf = true
  if (einstellung) {
    if (einstellung.linkePdf !== undefined) {
      linkePdf = einstellung.linkePdf
    }
  }
  pfad = pfad.replace(repositoryPfad, '')
  pfad = pfad.replace(/^\//, '')
  if (linkePdf) {
    pfad = pfad.replace(/\.[\w]+$/, '.pdf')
  }

  return `[${text}](${githubRawUrl}/${pfad})`
}

export function führeAus (programm: string, cwd: string) {
  const process = childProcess.spawnSync(programm, {
    cwd: cwd,
    encoding: 'utf-8',
    shell: true
  })
  if (process.status !== 0) throw Error(process.stderr + process.stdout)
  console.log(process.stdout)
}

export function öffneProgramm (programm: string, pfad: string): void {
  const subprocess = childProcess.spawn(programm, [pfad], {
    detached: true,
    stdio: 'ignore'
  })
  subprocess.unref()
}

export function öffneVSCode (pfad: string) {
  öffneProgramm('/usr/bin/code', macheRepoPfad(pfad))
}
