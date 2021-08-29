"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeAufgabenTitel = exports.schreibeTitel = void 0;
var path_1 = __importDefault(require("path"));
var sammlung_1 = require("../sammlung");
var helfer_1 = require("../helfer");
function umgebeMitKlammern(text) {
    return "{" + text + "}";
}
function sammleDaten(aufgabe) {
    var titel = {
        Titel: aufgabe.titel != null && aufgabe.titel !== '' ? aufgabe.titel : 'Aufgabe',
        Thematik: aufgabe.titel != null && aufgabe.titel !== ''
            ? aufgabe.titel
            : 'keine Thematik',
        RelativerPfad: aufgabe.relativerPfad
    };
    if (aufgabe.inhalt != null) {
        var section = aufgabe.inhalt.match(/\\section\{(.+?)[\n\\\}\{]/);
        if (section != null) {
            if (section[1] != null)
                titel.Titel = section[1];
        }
        var fussnoteZitat = aufgabe.inhalt.match(/\\footcite(\[([^\]]+)\])?\{([^\}]+)\}/);
        if (fussnoteZitat != null) {
            if (fussnoteZitat[2] != null) {
                titel.FussnoteSeite = umgebeMitKlammern(fussnoteZitat[2]);
            }
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
    titel.Titel = umgebeMitKlammern(titel.Titel);
    if (titel.Thematik)
        titel.Thematik = umgebeMitKlammern(titel.Thematik);
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
function schreibeTitel(dateiPfad, aufgabenInhalt, titelTexMakro) {
    var aufgabenTitelErsetzt;
    titelTexMakro += '\n';
    if (aufgabenInhalt.includes('\\liSetzeAufgabenTitel{')) {
        // /s s (dotall) modifier, +? one or more (non-greedy)
        var regexp = new RegExp(/\\liSetzeAufgabenTitel\{.+?,?\n\}\n/, 's');
        aufgabenTitelErsetzt = aufgabenInhalt.replace(regexp, titelTexMakro);
    }
    else {
        aufgabenTitelErsetzt = aufgabenInhalt.replace(/(\\begin\{document\})/, '$1\n' + titelTexMakro);
    }
    if (aufgabenInhalt !== aufgabenTitelErsetzt) {
        helfer_1.schreibeDatei(dateiPfad, aufgabenTitelErsetzt);
        return true;
    }
    return false;
}
exports.schreibeTitel = schreibeTitel;
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
    var aufgabe = sammlung_1.aufgabenSammlung.gib(dateiPfad);
    var titel = sammleDaten(aufgabe);
    var texMarkup = macheTex(titel);
    if (aufgabe.inhalt !== null) {
        var inhalt = aufgabe.inhalt;
        schreibeTitel(dateiPfad, inhalt, texMarkup);
    }
    console.log(texMarkup);
}
exports.erzeugeAufgabenTitel = erzeugeAufgabenTitel;
