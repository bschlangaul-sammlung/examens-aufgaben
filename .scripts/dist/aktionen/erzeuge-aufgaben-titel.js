"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeAufgabenTitel = void 0;
var sammlung_1 = require("../sammlung");
function sammleDaten(dateiPfad) {
    var aufgabe = sammlung_1.aufgabenSammlung.gib(dateiPfad);
    var titel = {
        Titel: aufgabe.titelFormatiert,
        Thematik: aufgabe.titel,
        RelativerPfad: aufgabe.relativerPfad
    };
    if (aufgabe.istExamen) {
        var examensAufgabe = aufgabe;
        titel.ExamenNummer = examensAufgabe.examen.nummer;
        titel.ExamenJahr = examensAufgabe.examen.jahr;
        titel.ExamenMonat = examensAufgabe.examen.monatMitNullen;
        if (examensAufgabe.thema != null) {
            titel.ExamenThemaNr = examensAufgabe.thema;
        }
        if (examensAufgabe.teilaufgabe != null) {
            titel.ExamenTeilaufgabeNr = examensAufgabe.teilaufgabe;
        }
        titel.ExamenAufgabeNr = examensAufgabe.aufgabe;
    }
    return titel;
}
function macheTex(titel) {
    var schlüsselWertPaare = [];
    Object.keys(titel).forEach(function (schlüssel) {
        var wert = titel[schlüssel];
        schlüsselWertPaare.push("  " + schlüssel + " = " + wert + ",");
    });
    var schlüsselWerte = schlüsselWertPaare.join('\n');
    return "\\liSetzeAufgabenTitel{\n" + schlüsselWerte + "\n}";
}
/**
 * ```latex
 * \liSetzeAufgabenTitel{
 *   Titel = Aufgabe 2,
 *   Thematik = Petri-Netz,
 *   Fussnote = sosy:pu:4,
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
function erzeugeAufgabenTitel(dateiPfad) {
    console.log(dateiPfad);
    var titel = sammleDaten(dateiPfad);
    var texMarkup = macheTex(titel);
    console.log(texMarkup);
}
exports.erzeugeAufgabenTitel = erzeugeAufgabenTitel;
