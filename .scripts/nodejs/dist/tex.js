"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sammleStichwörterEinerDatei = exports.sammleStichwörter = exports.gibInhaltEinesTexMakros = void 0;
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
