import { ExamensAufgabe } from '../aufgabe'
import { aufgabenSammlung } from '../sammlung'

/**
 *
 * ```latex
 * \liSetzeAufgabenTitel{
 *   Titel = Aufgabe 2,
 *   Thematik = Petri-Netz,
 *   Fussnote = sosy:pu:4,
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
export function erzeugeAufgabenTitel (dateiPfad: string) {
  console.log(dateiPfad)

  const aufgabe = aufgabenSammlung.gib(dateiPfad)
  const titel: any = {
    Thematik: aufgabe.titel,
    RelativerPfad: aufgabe.relativerPfad
  }

  if (aufgabe.istExamen) {
    const examensAufgabe: ExamensAufgabe = aufgabe as ExamensAufgabe

    titel['ExamenNummer'] = examensAufgabe.examen.nummer
    titel['ExamenJahr'] = examensAufgabe.examen.jahr
    titel['ExamenMonat'] = examensAufgabe.examen.monatMitNullen

    if (examensAufgabe.thema != null) {
      titel['ExamenThemaNr'] = examensAufgabe.thema
    }
    if (examensAufgabe.teilaufgabe != null) {
      titel['ExamenTeilaufgabeNr'] = examensAufgabe.teilaufgabe
    }

    titel['ExamenAufgabeNr'] = examensAufgabe.aufgabe
  }

  const schlüsselWertPaare: string[] = []
  for (const schlüssel in titel) {
    const wert = titel[schlüssel]
    schlüsselWertPaare.push(`  ${schlüssel} = ${wert},`)
  }

  console.log(titel)

  const schlüsselWerte: string = schlüsselWertPaare.join('\n')

  const texMakro: string = `\\liSetzeAufgabenTitel{\n${schlüsselWerte}\n}`
  console.log(texMakro)
}
