"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generiereExamensÜbersicht = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var glob_1 = __importDefault(require("glob"));
var aufgabe_1 = require("./aufgabe");
var helfer_1 = require("./helfer");
var titel = {
    46110: 'Grundlagen der Informatik (nicht vertieft)',
    46111: 'Programmentwicklung / Systemprogrammierung / Datenbanksysteme (nicht vertieft)',
    46112: 'Grundlagen der Informatik (nicht vertieft)',
    46113: 'Theoretische Informatik (nicht vertieft)',
    46114: 'Algorithmen / Datenstrukturen / Programmiermethoden (nicht vertieft)',
    46115: 'Theoretische Informatik / Algorithmen / Datenstrukturen (nicht vertieft)',
    46116: 'Softwaretechnologie / Datenbanksysteme (nicht vertieft)',
    46118: 'Fachdidaktik (Mittelschulen)',
    46119: 'Fachdidaktik (Realschulen)',
    46121: 'Fachdidaktik (berufliche Schulen)',
    66110: 'Automatentheorie, Algorithmische Sprache (vertieft)',
    66111: 'Betriebssysteme / Datenbanksysteme / Rechnerarchitektur (vertieft)',
    66112: 'Automatentheorie / Komplexität / Algorithmen (vertieft)',
    66113: 'Rechnerarchitektur / Datenbanken / Betriebssysteme (vertieft)',
    66114: 'Datenbank- und Betriebssysteme (vertieft)',
    66115: 'Theoretische Informatik / Algorithmen (vertieft)',
    66116: 'Datenbanksysteme / Softwaretechnologie (vertieft)',
    66118: 'Fachdidaktik (Gymnasium)'
};
/**
 * ```js
 * [
 *   'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *   'Thema-1/Teilaufgabe-1/Aufgabe-4.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-4.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 * ]
 * ```
 *
 * ```js
 * {
 *   'Thema 1': {
 *     'Teilaufgabe 1': {
 *       'Aufgabe 3': 'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-1/Aufgabe-4.tex'
 *     },
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-2/Aufgabe-4.tex'
 *     }
 *   },
 *   'Thema 2': {
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 5': 'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 *     }
 *   }
 * }
 * ```
 *
 * @param {string} relPath
 */
function leseAufgaben(relPath) {
    var e_1, _a, e_2, _b;
    /**
     * Thema-1: Thema 1
     * Teilaufgabe-2: Teilaufgabe 2
     * Aufgabe-3.tex: Aufgabe 3
     */
    function macheSegmenteLesbar(segment) {
        return segment.replace('-', ' ').replace('.tex', '');
    }
    var dateien = glob_1.default.sync('**/*.tex', { cwd: relPath });
    var baum = {};
    try {
        for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
            var pfad = dateien_1_1.value;
            if (pfad.match(/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/)) {
                var segmente = pfad.split(path_1.default.sep);
                var unterBaum = baum;
                try {
                    for (var segmente_1 = (e_2 = void 0, __values(segmente)), segmente_1_1 = segmente_1.next(); !segmente_1_1.done; segmente_1_1 = segmente_1.next()) {
                        var segment = segmente_1_1.value;
                        var segmentLesbar = macheSegmenteLesbar(segment);
                        if (!unterBaum[segmentLesbar] && segment.indexOf('.tex') === -1) {
                            unterBaum[segmentLesbar] = {};
                        }
                        else if (segment.indexOf('.tex') > -1) {
                            unterBaum[segmentLesbar] = pfad;
                        }
                        if (segment.indexOf('.tex') === -1) {
                            unterBaum = unterBaum[segmentLesbar];
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (segmente_1_1 && !segmente_1_1.done && (_b = segmente_1.return)) _b.call(segmente_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (dateien_1_1 && !dateien_1_1.done && (_a = dateien_1.return)) _a.call(dateien_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return baum;
}
function erzeugeEinrückung(ebene) {
    return '\n' + ' '.repeat(4 * ebene) + '- ';
}
/**
 * ```md
 * - 2015 Frühjahr: [Scan.pdf](...46116/2015/03/Scan.pdf) [OCR.txt](…46116/2015/03/OCR.txt)
 *     - Thema 1
 *         - Teilaufgabe 1
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf)
 *         - Teilaufgabe 2
 *             - [Aufgabe 1](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf)
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf)
 *```
 *
 * @param {object} aufgabenBaum
 * @param {string} pfad
 * @param {integer} ebene
 */
function generiereAufgabenRekursiv(aufgabenBaum, pfad, ebene) {
    if (ebene === void 0) { ebene = 1; }
    var ausgabe = [];
    // title: Thema 1, Teilaufgabe 2, Aufgabe 3
    for (var titel_1 in aufgabenBaum) {
        if (typeof aufgabenBaum[titel_1] === 'string') {
            var aufgabenPfad = path_1.default.join(pfad, aufgabenBaum[titel_1]);
            var aufgabe = new aufgabe_1.ExamensAufgabe(aufgabenPfad);
            ausgabe.push(erzeugeEinrückung(ebene) + aufgabe.gibTitelNurAufgabe(true));
        }
        else {
            ausgabe.push("" + erzeugeEinrückung(ebene) + titel_1 + " " + generiereAufgabenRekursiv(aufgabenBaum[titel_1], pfad, ebene + 1));
        }
    }
    return ausgabe.join(' ');
}
function generiereAufgabenBaum(pfad) {
    return generiereAufgabenRekursiv(leseAufgaben(pfad), pfad);
}
var AusgabeSammler = /** @class */ (function () {
    function AusgabeSammler(redselig) {
        if (redselig === void 0) { redselig = false; }
        this.speicher = [];
        this.redselig = redselig;
    }
    AusgabeSammler.prototype.add = function (ausgabe) {
        if (this.redselig)
            console.log(ausgabe);
        this.speicher.push(ausgabe);
    };
    AusgabeSammler.prototype.gibText = function () {
        return this.speicher.join('\n');
    };
    return AusgabeSammler;
}());
function formatExamTitle(year, month) {
    var monthLong;
    if (month === '09') {
        monthLong = 'Herbst';
    }
    else {
        monthLong = 'Frühjahr';
    }
    return year + " " + monthLong;
}
function erzeugeDateiLink(relPath, fileName, einstellungen) {
    return helfer_1.generiereMarkdownLink(fileName, path_1.default.join(relPath, fileName), einstellungen);
}
function generiereExamensÜbersicht() {
    var e_3, _a, e_4, _b;
    var ausgabe = new AusgabeSammler();
    for (var nummer in titel) {
        ausgabe.add("\n### " + nummer + ": " + titel[nummer] + "\n");
        var nummernPfad = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen', nummer);
        var jahrVerzeichnisse = fs_1.default.readdirSync(nummernPfad);
        try {
            for (var jahrVerzeichnisse_1 = (e_3 = void 0, __values(jahrVerzeichnisse)), jahrVerzeichnisse_1_1 = jahrVerzeichnisse_1.next(); !jahrVerzeichnisse_1_1.done; jahrVerzeichnisse_1_1 = jahrVerzeichnisse_1.next()) {
                var jahr = jahrVerzeichnisse_1_1.value;
                var jahrPfad = path_1.default.join(nummernPfad, jahr);
                var monatsVerzeichnisse = fs_1.default.readdirSync(jahrPfad);
                try {
                    for (var monatsVerzeichnisse_1 = (e_4 = void 0, __values(monatsVerzeichnisse)), monatsVerzeichnisse_1_1 = monatsVerzeichnisse_1.next(); !monatsVerzeichnisse_1_1.done; monatsVerzeichnisse_1_1 = monatsVerzeichnisse_1.next()) {
                        var monat = monatsVerzeichnisse_1_1.value;
                        var monatsPfad = path_1.default.join(jahrPfad, monat);
                        ausgabe.add("- " + formatExamTitle(jahr, monat) + ": " + erzeugeDateiLink(monatsPfad, 'Scan.pdf') + " " + erzeugeDateiLink(monatsPfad, 'OCR.txt', { linkePdf: false }) + " " + generiereAufgabenBaum(monatsPfad));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (monatsVerzeichnisse_1_1 && !monatsVerzeichnisse_1_1.done && (_b = monatsVerzeichnisse_1.return)) _b.call(monatsVerzeichnisse_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (jahrVerzeichnisse_1_1 && !jahrVerzeichnisse_1_1.done && (_a = jahrVerzeichnisse_1.return)) _a.call(jahrVerzeichnisse_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return ausgabe.gibText();
}
exports.generiereExamensÜbersicht = generiereExamensÜbersicht;
