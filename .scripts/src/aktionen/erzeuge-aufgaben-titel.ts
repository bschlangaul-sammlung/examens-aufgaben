import { aufgabenSammlung } from "../sammlung"

export function erzeugeAufgabenTitel (dateiPfad: string) {
  console.log(dateiPfad)
  console.log(aufgabenSammlung.gib(dateiPfad))
}
