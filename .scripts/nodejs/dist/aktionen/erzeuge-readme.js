"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeReadme = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const aufgabe_1 = require("../aufgabe");
const stichwort_verzeichnis_1 = require("../stichwort-verzeichnis");
const helfer_1 = require("../helfer");
const erzeuge_examens_uebersicht_1 = require("./erzeuge-examens-uebersicht");
const stichwortVerzeichnis = stichwort_verzeichnis_1.gibStichwortVerzeichnis();
function generiereMarkdownAufgabenListe(aufgabenListe) {
    const aufgaben = Array.from(aufgabenListe);
    aufgaben.sort(aufgabe_1.Aufgabe.vergleichePfade);
    const teil = [];
    for (const aufgabe of aufgaben) {
        teil.push('- ' + aufgabe.link);
    }
    return teil.join('\n');
}
function ersetzeStichwörterInReadme(inhalt) {
    return inhalt.replace(/\{\{ stichwort "([^"]*)" \}\}/g, function (treffer, stichwort) {
        return generiereMarkdownAufgabenListe(stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort));
    });
}
function erzeugeReadme() {
    let inhalt = helfer_1.leseRepoDatei('README_template.md');
    inhalt = ersetzeStichwörterInReadme(inhalt);
    const stichwörterInhalt = helfer_1.leseRepoDatei('Stichwortverzeichnis.yml');
    inhalt = inhalt.replace('{{ stichwortverzeichnis }}', stichwörterInhalt);
    inhalt = inhalt.replace('{{ staatsexamen }}', erzeuge_examens_uebersicht_1.generiereExamensÜbersicht());
    // console.log(readmeContent)
    fs_1.default.writeFileSync(path_1.default.join(helfer_1.repositoryPfad, 'README.md'), inhalt);
}
exports.erzeugeReadme = erzeugeReadme;
