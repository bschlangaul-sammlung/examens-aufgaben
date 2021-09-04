import path from 'path'
import fs from 'fs'

import { Aufgabe } from '../aufgabe'
import { gibStichwortVerzeichnis } from '../stichwort-verzeichnis'
import { repositoryPfad, leseRepoDatei } from '../helfer'
import { generiereExamensÜbersicht } from './aufgaben-sammlung'

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
      gibStichwortVerzeichnis().gibAufgabenMitStichwortUnterBaum(stichwort)
    )
  })
}

export default function (): void {
  let inhalt = leseRepoDatei('README_template.md')
  console.log(inhalt)

  inhalt = ersetzeStichwörterInReadme(inhalt)
  console.log(inhalt)

  const stichwörterInhalt = leseRepoDatei('Stichwortverzeichnis.yml')
  inhalt = inhalt.replace('{{ stichwortverzeichnis }}', stichwörterInhalt)
  console.log(inhalt)

  inhalt = inhalt.replace('{{ staatsexamen }}', generiereExamensÜbersicht())
  console.log(inhalt)
  fs.writeFileSync(path.join(repositoryPfad, 'README.md'), inhalt)
}
