"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneDurchStichwort = void 0;
const sammlung_1 = require("../sammlung");
const helfer_1 = require("../helfer");
function öffneDurchStichwort(stichwort) {
    const aufgaben = sammlung_1.stichwortVerzeichnis.gibAufgabenMitStichwort(stichwort);
    if (aufgaben.size === 0) {
        console.log(`Das Stichwort ${stichwort} gibt es nicht. War ${sammlung_1.stichwortBaum.findeÄhnliches(stichwort)} gemeint?`);
    }
    else {
        for (const aufgabe of aufgaben) {
            console.log(aufgabe.texEinbindenMakro);
            helfer_1.öffneProgramm('code', aufgabe.pfad);
        }
    }
}
exports.öffneDurchStichwort = öffneDurchStichwort;
