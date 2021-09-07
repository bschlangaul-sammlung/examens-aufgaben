"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.macheAufgabenMetadatenPlist = exports.schreibe = void 0;
const path_1 = __importDefault(require("path"));
const aufgabe_1 = require("../aufgabe");
const helfer_1 = require("../helfer");
const tex_1 = require("../tex");
function schreibe(dateiPfad, aufgabenInhalt, titelTexMakro) {
    let aufgabenTitelErsetzt;
    titelTexMakro += '\n';
    if (aufgabenInhalt.includes('\\liAufgabenMetadaten{')) {
        // /s s (dotall) modifier, +? one or more (non-greedy)
        const regexp = new RegExp(/\\liAufgabenMetadaten\{.+?,?\n\}\n/, 's');
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
exports.schreibe = schreibe;
function macheAufgabenMetadatenPlist(meta) {
    return tex_1.machePlist('liAufgabenMetadaten', meta, [
        'Titel',
        'Thematik',
        'ZitatBeschreibung',
        'Stichwoerter'
    ]);
}
exports.macheAufgabenMetadatenPlist = macheAufgabenMetadatenPlist;
/**
 * ```latex
 * \liAufgabenMetadaten{
 *   Titel = Aufgabe 2,
 *   Thematik = Petri-Netz,
 *   RelativerPfad = Staatsexamen/46116/2016/03/Thema-2/Teilaufgabe-1/Aufgabe-2.tex,
 *   ZitatSchluessel = sosy:pu:4,
 *   ExamenNummer = 46116,
 *   ExamenJahr = 2016,
 *   ExamenMonat = 03,
 *   ExamenThemaNr = 2,
 *   ExamenTeilaufgabeNr = 1,
 *   ExamenAufgabeNr = 2,
 * }
 * ```
 */
function default_1(dateiPfad) {
    dateiPfad = path_1.default.resolve(dateiPfad);
    const aufgabenSammlung = aufgabe_1.gibAufgabenSammlung();
    const aufgabe = aufgabenSammlung.gib(dateiPfad);
    const texPlist = tex_1.machePlist('liAufgabenMetadaten', aufgabe.erzeugeMetadaten(), ['Titel', 'Thematik', 'ZitatBeschreibung', 'Stichwoerter']);
    if (aufgabe.inhalt !== null) {
        const inhalt = aufgabe.inhalt;
        schreibe(dateiPfad, inhalt, texPlist);
    }
    console.log(texPlist);
}
exports.default = default_1;
