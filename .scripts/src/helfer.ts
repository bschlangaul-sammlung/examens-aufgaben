import fs from 'fs'
import path from 'path'

const konfigurationsDateiPfad = path.join(path.sep, 'etc', 'lehramt-informatik.config.tex')

export function leseDatei (pfad: string) {
  return fs.readFileSync(pfad, { encoding: 'utf-8' })
}

function leseKonfigurationsDatei (pfad: string): string {
  const configContent = leseDatei(pfad)
  const match = configContent.match(/\\LehramtInformatikRepository\{(.*)\}/)
  if (!match) throw new Error(`Konfigurations-Datei nicht gefunden: ${pfad}`)
  return match[1]
}

export const repositoryPfad = leseKonfigurationsDatei(konfigurationsDateiPfad)

export function leseRepoDatei (...args: string[]) {
  if (arguments[0].indexOf(repositoryPfad) > -1) return leseDatei(path.join(...args))
  return leseDatei(path.join(repositoryPfad, ...args))
}
