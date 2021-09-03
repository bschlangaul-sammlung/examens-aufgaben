import childProcess from 'child_process'
import glob from 'glob'
import path from 'path'

import { ExamensAufgabe } from '../aufgabe'
import { repositoryPfad, öffneVSCode, zeigeFehler } from '../helfer'

export default function (): void {
  const staatsexamenPath = path.join(repositoryPfad, 'Staatsexamen')
  const dateien = glob.sync('**/*.tex', { cwd: staatsexamenPath })
  for (let pfad of dateien) {
    pfad = path.join(staatsexamenPath, pfad)
    if (pfad.match(ExamensAufgabe.schwacherPfadRegExp) != null) {
      console.log(pfad)
      const ergebnis = childProcess.spawnSync(
        '/usr/local/texlive/bin/x86_64-linux/latexmk',
        ['-shell-escape', '-cd', '--lualatex', pfad],
        {
          encoding: 'utf-8'
        }
      )

      if (ergebnis.status !== 0) {
        console.log(ergebnis.stdout)
        console.log(ergebnis.stderr)
        öffneVSCode(pfad)
        zeigeFehler(`Die Datei „${pfad}“ konnte nicht kompiliert werden.`)
      }
    }
  }
}
