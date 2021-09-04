"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeExamenScansSammlung = exports.generiereExamensÜbersicht = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const examen_1 = require("../examen");
const aufgabe_1 = require("../aufgabe");
const helfer_1 = require("../helfer");
const glob_1 = __importDefault(require("glob"));
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
 */
function leseAufgaben(relativerPfad) {
    /**
     * Thema-1: Thema 1
     * Teilaufgabe-2: Teilaufgabe 2
     * Aufgabe-3.tex: Aufgabe 3
     */
    function macheSegmenteLesbar(segment) {
        return segment.replace('-', ' ').replace('.tex', '');
    }
    const dateien = glob_1.default.sync('**/*.tex', { cwd: relativerPfad });
    const baum = {};
    for (const pfad of dateien) {
        if (pfad.match(/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/) != null) {
            const segmente = pfad.split(path_1.default.sep);
            let unterBaum = baum;
            for (const segment of segmente) {
                const segmentLesbar = macheSegmenteLesbar(segment);
                if (unterBaum[segmentLesbar] == null && !segment.includes('.tex')) {
                    unterBaum[segmentLesbar] = {};
                }
                else if (segment.includes('.tex')) {
                    unterBaum[segmentLesbar] = pfad;
                }
                if (!segment.includes('.tex')) {
                    unterBaum = unterBaum[segmentLesbar];
                }
            }
        }
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
 */
function generiereAufgabenRekursiv(aufgabenBaum, pfad, ebene = 1) {
    const ausgabe = [];
    // title: Thema 1, Teilaufgabe 2, Aufgabe 3
    for (const titel in aufgabenBaum) {
        if (typeof aufgabenBaum[titel] === 'string') {
            const aufgabenPfad = path_1.default.join(pfad, aufgabenBaum[titel]);
            const aufgabe = aufgabe_1.gibAufgabenSammlung().gib(aufgabenPfad);
            ausgabe.push(erzeugeEinrückung(ebene) + aufgabe.gibTitelNurAufgabe(true));
        }
        else {
            ausgabe.push(`${erzeugeEinrückung(ebene)}${titel} ${generiereAufgabenRekursiv(aufgabenBaum[titel], pfad, ebene + 1)}`);
        }
    }
    return ausgabe.join(' ');
}
function generiereAufgabenBaum(pfad) {
    return generiereAufgabenRekursiv(leseAufgaben(pfad), pfad);
}
class AusgabeSammler {
    constructor(redselig = false) {
        this.speicher = [];
        this.redselig = redselig;
    }
    add(ausgabe) {
        if (this.redselig)
            console.log(ausgabe);
        this.speicher.push(ausgabe);
    }
    gibText() {
        return this.speicher.join('\n');
    }
}
function erzeugeDateiLink(pfad, dateiName, einstellungen) {
    return helfer_1.generiereLink(dateiName, path_1.default.join(pfad, dateiName), einstellungen);
}
function generiereExamensÜbersicht() {
    const ausgabe = new AusgabeSammler();
    for (const nummer in examen_1.examensTitel) {
        ausgabe.add(`\n### ${nummer}: ${examen_1.examensTitel[nummer]}\n`);
        const nummernPfad = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen', nummer);
        const jahrVerzeichnisse = fs_1.default.readdirSync(nummernPfad);
        for (const jahr of jahrVerzeichnisse) {
            const jahrPfad = path_1.default.join(nummernPfad, jahr);
            if (fs_1.default.statSync(jahrPfad).isDirectory()) {
                const monatsVerzeichnisse = fs_1.default.readdirSync(jahrPfad);
                for (const monat of monatsVerzeichnisse) {
                    const examen = examen_1.gibExamenSammlung().gib(nummer, jahr, monat);
                    const monatsPfad = path_1.default.join(jahrPfad, monat);
                    const scanLink = erzeugeDateiLink(monatsPfad, 'Scan.pdf');
                    const ocrLink = erzeugeDateiLink(monatsPfad, 'OCR.txt', {
                        linkePdf: false
                    });
                    ausgabe.add(`- ${examen.jahrJahreszeit}: ${scanLink} ${ocrLink} ${generiereAufgabenBaum(monatsPfad)}`);
                }
            }
        }
    }
    return ausgabe.gibText();
}
exports.generiereExamensÜbersicht = generiereExamensÜbersicht;
function erzeugeExamenScansSammlung() {
    for (const nummer in examen_1.examensTitel) {
        const ausgabe = new AusgabeSammler();
        const nummernPfad = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen', nummer);
        const jahrVerzeichnisse = fs_1.default.readdirSync(nummernPfad);
        for (const jahr of jahrVerzeichnisse) {
            const jahrPfad = path_1.default.join(nummernPfad, jahr);
            if (fs_1.default.statSync(jahrPfad).isDirectory()) {
                const monatsVerzeichnisse = fs_1.default.readdirSync(jahrPfad);
                for (const monat of monatsVerzeichnisse) {
                    const examen = examen_1.gibExamenSammlung().gib(nummer, jahr, monat);
                    ausgabe.add(`\n\\liTrennSeite{${examen.jahreszeit} ${examen.jahr}}`);
                    const scanPfad = helfer_1.macheRelativenPfad(path_1.default.join(jahrPfad, monat, 'Scan.pdf'));
                    // scanPfad = scanPfad.replace(`Staatsexamen/${nummer}/`, '')
                    const includePdf = `\\liBindePdfEin{${scanPfad}}`;
                    ausgabe.add(includePdf);
                }
            }
        }
        const ergebnis = ausgabe.gibText();
        const texMarkup = `\\documentclass{lehramt-informatik-examen-sammlung}
\\liPruefungsNummer{${nummer}}
\\liPruefungsTitel{${examen_1.examensTitel[nummer]}}

\\begin{document}
${ergebnis}
\\end{document}`;
        helfer_1.schreibeDatei(helfer_1.macheRepoPfad('Staatsexamen', nummer, 'Examensammlung.tex'), texMarkup);
    }
}
exports.erzeugeExamenScansSammlung = erzeugeExamenScansSammlung;
