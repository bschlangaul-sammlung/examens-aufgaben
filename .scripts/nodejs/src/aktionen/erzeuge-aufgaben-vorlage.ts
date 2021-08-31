import fs from 'fs'
import path from 'path'

interface AufgabenVorlagenWerte {
  /**
   * Der Wert kommt in das Makro
   * `liAufgabenTitel{}`. Es soll ein kurzer, einprägsamer Titel sein, z. B.
   * `Freizeitpark`
   *
   * @TODO Umbenennen in thematik
   */
  titel?: string

  /**
   * z. B. `Aufgabe 3`
   *
   * @TODO Umbenennen in titel
   */
  aufgabenName?: string

  /**
   * z. B. `db:ab:4` oder `examen:66111:2013:03`
   */
  zitatReferenz?: string
}

function gibVorlage (werte: AufgabenVorlagenWerte = {}): string {
  let titel = ''
  if (werte.titel != null) {
    titel = werte.titel
  }

  let aufgabenName = ''
  if (werte.aufgabenName != null) {
    aufgabenName = werte.aufgabenName
  }

  let zitatReferenz = ''
  if (werte.zitatReferenz != null) {
    zitatReferenz = werte.zitatReferenz
  }

  return (
    '\\documentclass{lehramt-informatik-aufgabe}\n' +
    '\\liLadePakete{}\n' +
    '\\begin{document}\n' +
    '\\liAufgabenTitel{' +
    titel +
    '}\n' +
    '\\section{' +
    aufgabenName +
    '\n' +
    '\\index{}\n' +
    '\\footcite{examen:' +
    zitatReferenz +
    '}}\n' +
    '\n' +
    '\\end{document}\n'
  )
}

export function erzeugeAufgabenVorlage (
  pfad: string,
  werte: AufgabenVorlagenWerte
): void {
  fs.mkdirSync(path.dirname(pfad), { recursive: true })
  if (!fs.existsSync(pfad)) {
    fs.writeFileSync(pfad, gibVorlage(werte), { encoding: 'utf-8' })
  }
}
