"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeExamensAufgabeVorlage = exports.erzeugeAufgabenVorlage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const helfer_1 = require("../helfer");
const aufgabe_1 = require("../aufgabe");
const tex_1 = require("../tex");
function gibVorlage(werte = {}) {
    const meta = {};
    meta.Titel = werte.titel != null ? werte.titel : '';
    meta.Thematik = werte.thematik != null ? werte.thematik : '';
    meta.ZitatSchluessel =
        werte.zitatSchlüssel != null ? werte.zitatSchlüssel : '';
    const plist = tex_1.machePlist('liAufgabenMetadaten', meta, [
        'Titel',
        'Thematik',
        'ZitatBeschreibung',
        'Stichwoerter'
    ]);
    return ('\\documentclass{lehramt-informatik-aufgabe}\n' +
        '\\liLadePakete{}\n' +
        '\\begin{document}\n' +
        plist +
        '\n' +
        '\\index{}\n' +
        '\\footcite{' +
        meta.ZitatSchluessel +
        '}\n' +
        '\n' +
        '\\end{document}\n');
}
function schreibeAufgabenVorlage(pfad, werte) {
    fs_1.default.mkdirSync(path_1.default.dirname(pfad), { recursive: true });
    if (!fs_1.default.existsSync(pfad)) {
        fs_1.default.writeFileSync(pfad, gibVorlage(werte), { encoding: 'utf-8' });
    }
}
function erzeugeAufgabenVorlage(titel) {
    let dateiName = 'Aufgabe_';
    if (titel != null) {
        const titelRein = titel.replace(/\s+/g, '-');
        dateiName = `${dateiName}${titelRein}`;
    }
    const pfad = path_1.default.join(process.cwd(), `${dateiName}.tex`);
    if (!fs_1.default.existsSync(pfad)) {
        schreibeAufgabenVorlage(pfad, {
            titel
        });
    }
    helfer_1.öffneVSCode(pfad);
}
exports.erzeugeAufgabenVorlage = erzeugeAufgabenVorlage;
function schreibeExamensAufgabeVorlage(examensAufgabe) {
    schreibeAufgabenVorlage(examensAufgabe.pfad, {
        titel: examensAufgabe.aufgabeFormatiert,
        zitatSchlüssel: 'examen:' + examensAufgabe.examen.referenz
    });
    return examensAufgabe.pfad;
}
/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3) {
    const examensAufgabe = aufgabe_1.ExamensAufgabe.erzeugeExamensAufgabe(ref, arg1, arg2, arg3);
    const pfad = schreibeExamensAufgabeVorlage(examensAufgabe);
    helfer_1.öffneVSCode(pfad);
}
exports.erzeugeExamensAufgabeVorlage = erzeugeExamensAufgabeVorlage;
