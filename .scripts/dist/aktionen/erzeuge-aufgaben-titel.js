"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeAufgabenTitel = void 0;
var path_1 = __importDefault(require("path"));
var sammlung_1 = require("../sammlung");
function sammleDaten(dateiPfad) {
    var aufgabe = sammlung_1.aufgabenSammlung.gib(dateiPfad);
    var titel = {
        Titel: aufgabe.titel != null ? aufgabe.titel : 'Aufgabe',
        Thematik: aufgabe.titel,
        RelativerPfad: aufgabe.relativerPfad
    };
    if (aufgabe.inhalt != null) {
        var section = aufgabe.inhalt.match(/\\section\{(.+?)[\\\}\{]/);
        if (section != null) {
            if (section[1] != null)
                titel.Titel = section[1];
        }
        var fussnoteZitat = aufgabe.inhalt.match(/\\footcite(\[([^\]]+)\])?\{([^\}]+)\}/);
        if (fussnoteZitat != null) {
            if (fussnoteZitat[2] != null)
                titel.FussnoteSeite = fussnoteZitat[2];
            if (fussnoteZitat[3] != null)
                titel.Fussnote = fussnoteZitat[3];
        }
    }
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
    titel.Titel = "{" + titel.Titel + "}";
    titel.Thematik = "{" + titel.Thematik + "}";
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
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   Fussnote = sosy:pu:4,
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
    dateiPfad = path_1.default.resolve(dateiPfad);
    var titel = sammleDaten(dateiPfad);
    var texMarkup = macheTex(titel);
    console.log(texMarkup);
}
exports.erzeugeAufgabenTitel = erzeugeAufgabenTitel;
