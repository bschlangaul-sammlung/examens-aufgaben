"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffne = exports.öffneDurchStichwort = exports.öffneDurchBibtex = void 0;
const fs_1 = __importDefault(require("fs"));
const examen_1 = require("../examen");
const helfer_1 = require("../helfer");
const stichwort_verzeichnis_1 = require("../stichwort-verzeichnis");
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const bibtex_1 = require("../bibtex");
const basisPfadExterneDateien = path_1.default.join(os_1.homedir(), 'git-repositories/content/informatik-studium');
function öffneDurchBibtex(referenz) {
    const externeDateien = glob_1.default.sync('**/*.pdf', { cwd: basisPfadExterneDateien });
    const sammlung = bibtex_1.gibBibtexSammlung();
    const dateiNamen = sammlung.gibDateiNameDurchReferenz(referenz);
    if (dateiNamen == null) {
        console.log('Keine Datei gefunden');
    }
    else {
        for (const dateiName of dateiNamen) {
            externeDateien.filter(function (externerDateiPfad) {
                if (externerDateiPfad.includes(`${dateiName}.pdf`)) {
                    console.log(`Öffne Datei: ${externerDateiPfad}`);
                    helfer_1.öffneProgramm('xdg-open', path_1.default.join(basisPfadExterneDateien, externerDateiPfad));
                }
            });
        }
    }
}
exports.öffneDurchBibtex = öffneDurchBibtex;
function öffneDurchStichwort(stichwort) {
    const aufgaben = stichwort_verzeichnis_1.gibStichwortVerzeichnis().gibAufgabenMitStichwort(stichwort);
    if (aufgaben.size === 0) {
        console.log(`Das Stichwort ${stichwort} gibt es nicht. War ${stichwort_verzeichnis_1.gibStichwortBaum().findeÄhnliches(stichwort)} gemeint?`);
    }
    else {
        for (const aufgabe of aufgaben) {
            console.log(aufgabe.texEinbindenMakro);
            helfer_1.öffneProgramm('code', aufgabe.pfad);
        }
    }
}
exports.öffneDurchStichwort = öffneDurchStichwort;
function öffneExamen(referenz) {
    const examen = examen_1.gibExamenSammlung().gibDurchReferenz(referenz);
    if (fs_1.default.existsSync(examen.pfad)) {
        helfer_1.öffneProgramm('/usr/bin/xdg-open', examen.pfad);
    }
    else {
        console.log(`Den Pfad ${examen.pfad} gib es nicht.`);
    }
}
function öffne(referenz) {
    if (Array.isArray(referenz)) {
        referenz = referenz.join(':');
    }
    if (referenz.match(/\d{5}:\d{4}:\d{2}/) != null) {
        öffneExamen(referenz);
    }
    else {
        öffneDurchBibtex(referenz);
    }
}
exports.öffne = öffne;
