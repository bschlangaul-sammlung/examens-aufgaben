import { AufgabenSammlung } from './aufgabe'
import { ExamenSammlung } from './examen'
import { StichwortBaum, StichwortVerzeichnis } from './stichwort-verzeichnis'

export const examenSammlung = new ExamenSammlung()

export const aufgabenSammlung = new AufgabenSammlung(examenSammlung)

export const stichwortBaum = new StichwortBaum()

export const stichwortVerzeichnis = new StichwortVerzeichnis(stichwortBaum, aufgabenSammlung)
