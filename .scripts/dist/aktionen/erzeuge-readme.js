"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeReadme = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var aufgabe_1 = require("../aufgabe");
var sammlung_1 = require("../sammlung");
var helfer_1 = require("../helfer");
var erzeuge_examens_uebersicht_1 = require("./erzeuge-examens-uebersicht");
function generiereMarkdownAufgabenListe(aufgabenListe) {
    var e_1, _a;
    var aufgaben = Array.from(aufgabenListe);
    aufgaben.sort(aufgabe_1.Aufgabe.vergleichePfade);
    var teil = [];
    try {
        for (var aufgaben_1 = __values(aufgaben), aufgaben_1_1 = aufgaben_1.next(); !aufgaben_1_1.done; aufgaben_1_1 = aufgaben_1.next()) {
            var aufgabe = aufgaben_1_1.value;
            teil.push('- ' + aufgabe.link);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (aufgaben_1_1 && !aufgaben_1_1.done && (_a = aufgaben_1.return)) _a.call(aufgaben_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return teil.join('\n');
}
function ersetzeStichwörterInReadme(inhalt) {
    return inhalt.replace(/\{\{ stichwort "([^"]*)" \}\}/g, function (treffer, stichwort) {
        return generiereMarkdownAufgabenListe(sammlung_1.stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort));
    });
}
function erzeugeReadme() {
    var inhalt = helfer_1.leseRepoDatei('README_template.md');
    inhalt = ersetzeStichwörterInReadme(inhalt);
    var stichwörterInhalt = helfer_1.leseRepoDatei('Stichwortverzeichnis.yml');
    inhalt = inhalt.replace('{{ stichwortverzeichnis }}', stichwörterInhalt);
    inhalt = inhalt.replace('{{ staatsexamen }}', erzeuge_examens_uebersicht_1.generiereExamensÜbersicht());
    // console.log(readmeContent)
    fs_1.default.writeFileSync(path_1.default.join(helfer_1.repositoryPfad, 'README.md'), inhalt);
}
exports.erzeugeReadme = erzeugeReadme;
