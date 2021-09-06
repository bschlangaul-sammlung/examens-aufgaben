"use strict";
/**
 * TeX-Datei
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.machePlist = exports.schreibeTexDatei = exports.sammleStichwörterEinerDatei = exports.sammleStichwörter = exports.gibInhaltEinesTexMakros = void 0;
const helfer_1 = require("./helfer");
function assembleMacroRegExp(macroName) {
    return new RegExp('\\' + macroName + '{([^}]*)}', 'g');
}
function säubereStichwort(stichwort) {
    return stichwort.replace(/\s+/g, ' ');
}
function gibInhaltEinesTexMakros(makroName, markup) {
    const regExp = assembleMacroRegExp(makroName);
    const übereinstimmung = regExp.exec(markup);
    if (übereinstimmung != null)
        return übereinstimmung[1];
}
exports.gibInhaltEinesTexMakros = gibInhaltEinesTexMakros;
/**
 * Sammle alle Stichwörter eines TeX-Inhaltes (string). Doppelte Stichwörter
 * werden nur als eins aufgelistet.
 *
 * @param inhalt - Der Textinhalt einer TeX-Datei.
 */
function sammleStichwörter(inhalt) {
    const re = assembleMacroRegExp('index');
    let übereinstimmung;
    const stichwörter = new Set();
    do {
        übereinstimmung = re.exec(inhalt);
        if (übereinstimmung != null) {
            const stichwort = säubereStichwort(übereinstimmung[1]);
            stichwörter.add(stichwort);
        }
    } while (übereinstimmung != null);
    return Array.from(stichwörter);
}
exports.sammleStichwörter = sammleStichwörter;
/**
 * Sammle alle Stichwörter einer TeX-Datei.
 */
function sammleStichwörterEinerDatei(pfad) {
    return sammleStichwörter(helfer_1.leseRepoDatei(pfad));
}
exports.sammleStichwörterEinerDatei = sammleStichwörterEinerDatei;
/**
 * @param dateiPfad - Ein Dateipfad.
 * @param klassenName - Ein Klassenname (ohne Präfix `lehramt-informatik-`)
 * @param kopf - Das TeX-Markup, das vor `\begin{document}` erscheint.
 * @param textkörper - Der Text der innerhalb der document-Umgebung erscheint.
 */
function schreibeTexDatei(dateiPfad, klassenName, kopf, textkörper) {
    textkörper = textkörper.trim();
    helfer_1.schreibeDatei(dateiPfad, `\\documentclass{lehramt-informatik-${klassenName}}\n${kopf}\n` +
        `\\begin{document}\n${textkörper}\n\\end{document}\n`);
}
exports.schreibeTexDatei = schreibeTexDatei;
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
 * \makroName{
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
function machePlist(makroName, daten, schlüsselMitKlammern) {
    if (schlüsselMitKlammern != null) {
        for (const schlüssel of schlüsselMitKlammern) {
            if (daten[schlüssel] != null) {
                daten[schlüssel] = umgebeMitKlammern(daten[schlüssel]);
            }
        }
    }
    const schlüsselWertPaare = [];
    Object.keys(daten).forEach(schlüssel => {
        let wert = daten[schlüssel];
        if (wert == null) {
            wert = '';
        }
        schlüsselWertPaare.push(`  ${schlüssel} = ${String(wert)},`);
    });
    const schlüsselWerte = schlüsselWertPaare.join('\n');
    return `\\${makroName}{\n${schlüsselWerte}\n}`;
}
exports.machePlist = machePlist;
