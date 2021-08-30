"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneDurchStichwort = void 0;
const stichwort_verzeichnis_1 = require("../stichwort-verzeichnis");
const helfer_1 = require("../helfer");
const stichwortVerzeichnis = stichwort_verzeichnis_1.gibStichwortVerzeichnis();
const stichwortBaum = stichwort_verzeichnis_1.gibStichwortBaum();
function öffneDurchStichwort(stichwort) {
    const aufgaben = stichwortVerzeichnis.gibAufgabenMitStichwort(stichwort);
    if (aufgaben.size === 0) {
        console.log(`Das Stichwort ${stichwort} gibt es nicht. War ${stichwortBaum.findeÄhnliches(stichwort)} gemeint?`);
    }
    else {
        for (const aufgabe of aufgaben) {
            console.log(aufgabe.texEinbindenMakro);
            helfer_1.öffneProgramm('code', aufgabe.pfad);
        }
    }
}
exports.öffneDurchStichwort = öffneDurchStichwort;
