import glob from 'glob'
import path from 'path'

import {
  repositoryPfad,
  leseDatei,
  schreibeDatei,
  führeAus,
  öffneProgramm
} from '../helfer'

const texPfad = path.join(repositoryPfad, '.tex')
const styPfad = path.join(texPfad, 'pakete')
const dtxPfad = path.join(texPfad, 'dokumentation.dtx')

function leseStyDatei (dateiName: string, dtxInhalte: string[]): void {
  console.log(`lese *.sty datei ${dateiName}`)
  const inhalt = leseDatei(path.join(styPfad, dateiName))
  const prefix =
    '%    \\end{macrocode}\n' +
    '% \\subsection{' +
    dateiName +
    '}\n' +
    '%    \\begin{macrocode}\n'
  dtxInhalte.push(prefix + inhalt)
}

function kompiliereDtxDatei (): void {
  führeAus('lualatex --shell-escape dokumentation.dtx', texPfad)
  führeAus(
    'makeindex -s gglo.ist -o dokumentation.gls dokumentation.glo',
    texPfad
  )
  führeAus(
    'makeindex -s gind.ist -o dokumentation.ind dokumentation.idx',
    texPfad
  )
  führeAus('lualatex --shell-escape dokumentation.dtx', texPfad)
}

export default function (): void {
  const styS = glob.sync('**/*.sty', { cwd: styPfad })

  const dtxInhalte: string[] = []

  for (const sty of styS) {
    leseStyDatei(sty, dtxInhalte)
  }

  const dtxVorlage = leseDatei(path.join(texPfad, 'dokumentation_vorlage.dtx'))
  schreibeDatei(
    dtxPfad,
    dtxVorlage.replace('{{ einbinden }}', dtxInhalte.join('\n'))
  )

  kompiliereDtxDatei()
  öffneProgramm('/usr/bin/xdg-open', path.join(texPfad, 'dokumentation.pdf'))
}
