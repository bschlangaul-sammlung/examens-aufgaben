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
const examen_1 = require("../examen");
const aufgaben_metadaten_1 = require("./aufgaben-metadaten");
function überprüfeNummer(nummer) {
    if (typeof nummer === 'string') {
        nummer = parseInt(nummer);
    }
    if (nummer != null) {
        return nummer;
    }
}
/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function erzeugeTeXMakro(referenz, arg1, arg2, arg3) {
    let aufgabe = '';
    let suffix = '';
    const examen = `${referenz.nummer} / ${referenz.jahr} / ${referenz.monat} :`;
    if (arg1 != null && arg2 != null && arg3 != null) {
        aufgabe = `Thema ${arg1} Teilaufgabe ${arg2} Aufgabe ${arg3}`;
        suffix = 'TTA';
    }
    else if (arg1 != null && arg2 != null && arg3 == null) {
        aufgabe = `Thema ${arg1} Aufgabe ${arg2}`;
        suffix = 'TA';
    }
    else {
        aufgabe = `Aufgabe ${arg1}`;
        suffix = 'A';
    }
    return `\n\\ExamensAufgabe${suffix} ${examen} ${aufgabe}`;
}
function gibVorlage(werte = {}) {
    const meta = {};
    meta.Titel = werte.titel != null ? werte.titel : '';
    meta.Thematik = werte.thematik != null ? werte.thematik : '';
    meta.ZitatSchluessel =
        werte.zitatSchlüssel != null ? werte.zitatSchlüssel : '';
    const m = meta;
    const plist = aufgaben_metadaten_1.macheTexPlist(m);
    return ('\\documentclass{lehramt-informatik-aufgabe}\n' +
        '\\liLadePakete{}\n' +
        '\\begin{document}\n' +
        plist + '\n' +
        '\\index{}\n' +
        '\\footcite{' + meta.ZitatSchluessel + '}\n' +
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
/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function schreibeExamensAufgabeVorlage(referenz, arg1, arg2, arg3) {
    const num1 = überprüfeNummer(arg1);
    const num2 = überprüfeNummer(arg2);
    const num3 = überprüfeNummer(arg3);
    if (num1 == null) {
        helfer_1.zeigeFehler('Undefined num1');
    }
    const examenReferenz = examen_1.Examen.teileReferenz(referenz);
    const pfad = path_1.default.join(helfer_1.repositoryPfad, examen_1.Examen.erzeugePfad(examenReferenz.nummer, examenReferenz.jahr, examenReferenz.monat), aufgabe_1.ExamensAufgabe.erzeugePfad(num1, num2, num3));
    schreibeAufgabenVorlage(pfad, {
        zitatSchlüssel: 'examen:' + referenz
    });
    console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3));
    return pfad;
}
/**
 * @param ref z. B. `66116:2021:03`
 * @param arg1 Thema-Nummer, Teilaufgaben-Nummer oder Aufgaben-Nummer
 * @param arg2 Teilaufgabe-Nummer oder Aufgabe-Nummer
 * @param arg3 Aufgabe-Nummer
 */
function erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3) {
    const pfad = schreibeExamensAufgabeVorlage(ref, arg1, arg2, arg3);
    helfer_1.öffneVSCode(pfad);
}
exports.erzeugeExamensAufgabeVorlage = erzeugeExamensAufgabeVorlage;
