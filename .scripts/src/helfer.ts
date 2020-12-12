import fs from 'fs'
import path from 'path'

const konfigurationsDateiPfad = path.join(path.sep, 'etc', 'lehramt-informatik.config.tex')

const githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main'

export function leseDatei (pfad: string) {
  return fs.readFileSync(pfad, { encoding: 'utf-8' })
}

function leseKonfigurationsDatei (pfad: string): string {
  const inhalt = leseDatei(pfad)
  const treffer = inhalt.match(/\\LehramtInformatikRepository\{(.*)\}/)
  if (!treffer) throw new Error(`Konfigurations-Datei nicht gefunden: ${pfad}`)
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

export interface MarkdownLinkEinstellung {
  alsMarkdownLink?: boolean
  linkePdf?: boolean
}

export function generiereMarkdownLink (text: string, pfad: string, einstellung?: MarkdownLinkEinstellung): string {
  let linkePdf = true
  let alsMarkdownLink = true
  if (einstellung) {
    if (einstellung.linkePdf !== undefined) linkePdf = einstellung.linkePdf
    if (einstellung.alsMarkdownLink !== undefined) alsMarkdownLink = einstellung.alsMarkdownLink
  }
  pfad = pfad.replace(repositoryPfad, '')
  pfad = pfad.replace(/^\//, '')
  if (linkePdf) pfad = pfad.replace(/\.[\w]+$/, '.pdf')
  if (alsMarkdownLink) {
    return `[${text}](${githubRawUrl}/${pfad})`
  }
  return text
}
