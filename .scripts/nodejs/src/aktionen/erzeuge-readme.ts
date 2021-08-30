import path from 'path'
import fs from 'fs'

import { Aufgabe } from '../aufgabe'
import { stichwortVerzeichnis } from '../sammlung'
import { repositoryPfad, leseRepoDatei } from '../helfer'
import { generiereExamensÜbersicht } from './erzeuge-examens-uebersicht'

function generiereMarkdownAufgabenListe (aufgabenListe: Set<Aufgabe>): string {
  const aufgaben = Array.from(aufgabenListe)
  aufgaben.sort(Aufgabe.vergleichePfade)
  const teil = []
  for (const aufgabe of aufgaben) {
    teil.push('- ' + aufgabe.link)
  }
  return teil.join('\n')
}

function ersetzeStichwörterInReadme (inhalt: string): string {
  return inhalt.replace(/\{\{ stichwort "([^"]*)" \}\}/g, function (
    treffer,
    stichwort
  ) {
    return generiereMarkdownAufgabenListe(
      stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort)
    )
  })
}

export function erzeugeReadme (): void {
  let inhalt = leseRepoDatei('README_template.md')

  inhalt = ersetzeStichwörterInReadme(inhalt)

  const stichwörterInhalt = leseRepoDatei('Stichwortverzeichnis.yml')
  inhalt = inhalt.replace('{{ stichwortverzeichnis }}', stichwörterInhalt)

  inhalt = inhalt.replace('{{ staatsexamen }}', generiereExamensÜbersicht())
  // console.log(readmeContent)
  fs.writeFileSync(path.join(repositoryPfad, 'README.md'), inhalt)
}
