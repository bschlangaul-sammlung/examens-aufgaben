"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeExamensAufgabeVorlage = void 0;
var path_1 = __importDefault(require("path"));
var helfer_1 = require("../helfer");
var aufgabe_1 = require("../aufgabe");
var examen_1 = require("../examen");
var erzeuge_aufgaben_vorlage_1 = require("./erzeuge-aufgaben-vorlage");
function überprüfeNummer(number) {
    if (typeof number === 'string') {
        number = parseInt(number);
    }
    if (number)
        return number;
}
function erzeugeTeXMakro(exam, arg1, arg2, arg3) {
    var questionMarkup = '';
    var macroSuffix = '';
    var examMarkup = exam.nummer + " / " + exam.jahr + " / " + exam.monat + " :";
    if (arg1 && arg2 && arg3) {
        questionMarkup = "Thema " + arg1 + " Teilaufgabe " + arg2 + " Aufgabe " + arg3;
        macroSuffix = 'TTA';
    }
    else if (arg1 && arg2 && !arg3) {
        questionMarkup = "Thema " + arg1 + " Aufgabe " + arg2;
        macroSuffix = 'TA';
    }
    else {
        questionMarkup = "Aufgabe " + arg1;
        macroSuffix = 'A';
    }
    return "\n\\ExamensAufgabe" + macroSuffix + " " + examMarkup + " " + questionMarkup;
}
function erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3) {
    var num1 = überprüfeNummer(arg1);
    var num2 = überprüfeNummer(arg2);
    var num3 = überprüfeNummer(arg3);
    if (!num1) {
        throw Error("Undefined " + num1);
    }
    var examenReferenz = examen_1.Examen.teileReferenz(ref);
    var pfad = path_1.default.join(helfer_1.repositoryPfad, examen_1.Examen.erzeugePfad(examenReferenz.nummer, examenReferenz.jahr, examenReferenz.monat), aufgabe_1.ExamensAufgabe.erzeugePfad(num1, num2, num3));
    erzeuge_aufgaben_vorlage_1.erzeugeAufgabenVorlage(pfad, {
        zitatReferenz: ref
    });
    console.log(erzeugeTeXMakro(examenReferenz, arg1, arg2, arg3));
    return pfad;
}
exports.erzeugeExamensAufgabeVorlage = erzeugeExamensAufgabeVorlage;
