"use strict";
/**
 * Aktionen, die über eine Sammlung an Aufgaben eine Ausgabe erzeugen.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeExamensLösungen = exports.erzeugeExamenScansSammlung = exports.generiereExamensÜbersicht = void 0;
const path_1 = __importDefault(require("path"));
const examen_1 = require("../examen");
const aufgabe_1 = require("../aufgabe");
const helfer_1 = require("../helfer");
const tex_1 = require("../tex");
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
    sammle(ausgabe) {
        if (this.redselig) {
            console.log(ausgabe);
        }
        if (ausgabe != null) {
            this.speicher.push(ausgabe);
        }
    }
    gibText() {
        return this.speicher.join('\n');
    }
}
function erzeugeDateiLink(examen, dateiName) {
    return examen.macheMarkdownLink(dateiName, dateiName);
}
/**
 * Erzeugen den Markdown-Code für die README-Datei.
 */
function generiereExamensÜbersicht() {
    const examenSammlung = examen_1.gibExamenSammlung();
    const examenBaum = examenSammlung.examenBaum;
    const ausgabe = new AusgabeSammler();
    for (const nummer in examenBaum) {
        ausgabe.sammle(`\n### ${nummer}: ${examen_1.Examen.fachDurchNummer(nummer)}\n`);
        for (const jahr in examenBaum[nummer]) {
            for (const monat in examenBaum[nummer][jahr]) {
                const examen = examenBaum[nummer][jahr][monat];
                const scanLink = erzeugeDateiLink(examen, 'Scan.pdf');
                const ocrLink = erzeugeDateiLink(examen, 'OCR.txt');
                ausgabe.sammle(`- ${examen.jahrJahreszeit}: ${scanLink} ${ocrLink} ${generiereAufgabenBaum(examen.verzeichnis)}`);
            }
        }
    }
    return ausgabe.gibText();
}
exports.generiereExamensÜbersicht = generiereExamensÜbersicht;
/**
 * Erzeugt eine TeX-Datei, die alle Examens-Scanns eines bestimmten Fachs (z. B.
 * 65116) als eine PDF-Datei zusammenfasst.
 */
function erzeugeExamenScansSammlung() {
    const examenSammlung = examen_1.gibExamenSammlung();
    const examenBaum = examenSammlung.examenBaum;
    for (const nummer in examenBaum) {
        const ausgabe = new AusgabeSammler();
        const nummernPfad = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen', nummer);
        for (const jahr in examenBaum[nummer]) {
            const jahrPfad = path_1.default.join(nummernPfad, jahr);
            for (const monat in examenBaum[nummer][jahr]) {
                const examen = examen_1.gibExamenSammlung().gib(nummer, jahr, monat);
                ausgabe.sammle(`\n\\liTrennSeite{${examen.jahreszeit} ${examen.jahr}}`);
                const scanPfad = helfer_1.macheRelativenPfad(path_1.default.join(jahrPfad, monat, 'Scan.pdf'));
                const includePdf = `\\liBindePdfEin{${scanPfad}}`;
                ausgabe.sammle(includePdf);
            }
        }
        const textKörper = ausgabe.gibText();
        const kopf = `\\liPruefungsNummer{${nummer}}\n` +
            `\\liPruefungsTitel{${examen_1.Examen.fachDurchNummer(nummer)}}\n`;
        tex_1.schreibeTexDatei(helfer_1.macheRepoPfad('Staatsexamen', nummer, 'Examensammlung.tex'), 'examen-scans', kopf, textKörper);
    }
}
exports.erzeugeExamenScansSammlung = erzeugeExamenScansSammlung;
/**
 * Erzeugt pro Examen eine TeX-Datei, die alle zum diesem Examen gehörenden
 * Aufgaben samt Lösungen einbindet.
 *
 * ```latex
 * \liSetzeExamen{66116}{2021}{03}
 *
 * \liSetzeExamenThemaNr{1}
 *
 * \liSetzeExamenTeilaufgabeNr{1}
 *
 * \liBindeAufgabeEin{1}
 * \liBindeAufgabeEin{2}
 * \liBindeAufgabeEin{3}
 * ```
 */
function erzeugeExamensLösung(examen) {
    const textKörper = examen.besucheAufgabenBaum({
        thema(nummer) {
            return `\n\n\\liSetzeExamenThemaNr{${nummer}}`;
        },
        teilaufgabe(nummer) {
            return `\n\\liSetzeExamenTeilaufgabeNr{${nummer}}\n`;
        },
        aufgabe(nummer) {
            return `\\liBindeAufgabeEin{${nummer}}`;
        }
    });
    const kopf = `\\liSetzeExamen{${examen.nummer}}{${examen.jahr}}{${examen.monatMitNullen}}`;
    const pfad = examen.machePfad('Examen.tex');
    if (textKörper != null) {
        tex_1.schreibeTexDatei(pfad, 'examen', kopf, textKörper);
    }
    else {
        helfer_1.löscheDatei(pfad);
    }
}
/**
 * Erzeugt pro Examen eine TeX-Datei, die alle zum diesem Examen gehörenden
 * Aufgaben samt Lösungen einbindet.
 */
function erzeugeExamensLösungen() {
    const examenSammlung = examen_1.gibExamenSammlung();
    const examenBaum = examenSammlung.examenBaum;
    for (const nummer in examenBaum) {
        for (const jahr in examenBaum[nummer]) {
            for (const monat in examenBaum[nummer][jahr]) {
                const examen = examenBaum[nummer][jahr][monat];
                erzeugeExamensLösung(examen);
            }
        }
    }
}
exports.erzeugeExamensLösungen = erzeugeExamensLösungen;
