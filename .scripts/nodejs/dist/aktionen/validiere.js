"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validiere = void 0;
const aufgabe_1 = require("../aufgabe");
const stichwort_verzeichnis_1 = require("../stichwort-verzeichnis");
function validiere() {
    stichwort_verzeichnis_1.gibStichwortVerzeichnis();
    aufgabe_1.gibAufgabenSammlung();
}
exports.validiere = validiere;
