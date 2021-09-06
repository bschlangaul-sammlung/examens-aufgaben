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
const helfer_1 = require("../helfer");
const tex_1 = require("../tex");
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
function erzeugeAufgabenBaumMarkdown(examen) {
    function rückeEin() {
        return ' '.repeat(4 * ebene) + '- ';
    }
    let ebene = 1;
    const ausgabe = examen.besucheAufgabenBaum({
        thema(nummer) {
            ebene = 1;
            const ausgabe = rückeEin() + `Thema ${nummer}`;
            ebene++;
            return ausgabe;
        },
        teilaufgabe(nummer) {
            ebene = 2;
            const ausgabe = rückeEin() + `Teilaufgabe ${nummer}`;
            ebene++;
            return ausgabe;
        },
        aufgabe(nummer, examen, aufgabe) {
            let titel;
            if (aufgabe != null) {
                titel = aufgabe.gibTitelNurAufgabe(true);
            }
            else {
                titel = `Aufgabe ${nummer}`;
            }
            return rückeEin() + titel;
        }
    });
    if (ausgabe == null)
        return '';
    return '\n' + ausgabe;
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
    const ausgabe = new helfer_1.AusgabeSammler();
    for (const nummer in examenBaum) {
        ausgabe.sammle(`\n### ${nummer}: ${examen_1.Examen.fachDurchNummer(nummer)}\n`);
        for (const jahr in examenBaum[nummer]) {
            for (const monat in examenBaum[nummer][jahr]) {
                const examen = examenBaum[nummer][jahr][monat];
                const scanLink = erzeugeDateiLink(examen, 'Scan.pdf');
                const ocrLink = erzeugeDateiLink(examen, 'OCR.txt');
                ausgabe.sammle(`- ${examen.jahrJahreszeit}: ${scanLink} ${ocrLink} ${erzeugeAufgabenBaumMarkdown(examen)}`);
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
        const ausgabe = new helfer_1.AusgabeSammler();
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
    const kopf = tex_1.machePlist('liMetaSetze', {
        ExamenNummer: examen.nummer,
        ExamenFach: examen.fach,
        ExamenJahr: examen.jahr,
        ExamenMonat: examen.monatMitNullen,
        ExamenJahreszeit: examen.jahreszeit
    });
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
