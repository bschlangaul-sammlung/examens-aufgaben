"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeExamensAufgabeVorlage = void 0;
const path_1 = __importDefault(require("path"));
const helfer_1 = require("../helfer");
const aufgabe_1 = require("../aufgabe");
const examen_1 = require("../examen");
const erzeuge_aufgaben_vorlage_1 = require("./erzeuge-aufgaben-vorlage");
function überprüfeNummer(nummer) {
    if (typeof nummer === 'string') {
        nummer = parseInt(nummer);
    }
    if (nummer != null) {
        return nummer;
    }
}
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
function erzeugeExamensAufgabeVorlage(referenz, arg1, arg2, arg3) {
    const num1 = überprüfeNummer(arg1);
    const num2 = überprüfeNummer(arg2);
    const num3 = überprüfeNummer(arg3);
    if (num1 == null) {
        helfer_1.zeigeFehler('Undefined num1');
    }
    const examenReferenz = examen_1.Examen.teileReferenz(referenz);
    const pfad = path_1.default.join(helfer_1.repositoryPfad, examen_1.Examen.erzeugePfad(examenReferenz.nummer, examenReferenz.jahr, examenReferenz.monat), aufgabe_1.ExamensAufgabe.erzeugePfad(num1, num2, num3));
    erzeuge_aufgaben_vorlage_1.erzeugeAufgabenVorlage(pfad, {
        zitatReferenz: referenz
    });
    console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3));
    return pfad;
}
exports.erzeugeExamensAufgabeVorlage = erzeugeExamensAufgabeVorlage;
