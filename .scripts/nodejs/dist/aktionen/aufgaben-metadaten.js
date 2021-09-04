"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schreibe = exports.macheTexPlist = void 0;
const path_1 = __importDefault(require("path"));
const aufgabe_1 = require("../aufgabe");
const helfer_1 = require("../helfer");
function umgebeMitKlammern(text) {
    text = text.trim();
    if (text.charAt(0) !== '{' && text.charAt(text.length - 1) !== '}') {
        text = `{${text}}`;
    }
    return text;
}
/**
 * @returns
 *
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
function macheTexPlist(meta) {
    const m = meta;
    for (const schlüssel of [
        'Titel',
        'Thematik',
        'ZitatBeschreibung',
        'Stichwoerter'
    ]) {
        if (m[schlüssel] != null) {
            m[schlüssel] = umgebeMitKlammern(m[schlüssel]);
        }
    }
    meta = m;
    const schlüsselWertPaare = [];
    Object.keys(meta).forEach(schlüssel => {
        let wert = meta[schlüssel];
        if (wert == null)
            wert = '';
        schlüsselWertPaare.push(`  ${schlüssel} = ${wert},`);
    });
    const schlüsselWerte = schlüsselWertPaare.join('\n');
    return `\\liAufgabenMetadaten{\n${schlüsselWerte}\n}`;
}
exports.macheTexPlist = macheTexPlist;
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
    const texPlist = macheTexPlist(aufgabe.erzeugeMetadaten());
    if (aufgabe.inhalt !== null) {
        const inhalt = aufgabe.inhalt;
        schreibe(dateiPfad, inhalt, texPlist);
    }
    console.log(texPlist);
}
exports.default = default_1;
