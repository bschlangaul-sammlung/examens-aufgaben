"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gibExamenSammlung = exports.examensTitel = exports.ExamenSammlung = exports.Examen = void 0;
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const helfer_1 = require("./helfer");
const aufgabe_1 = require("./aufgabe");
/**
 * Die Klasse Examen repräsentiert eine Staatsexamensprüfung.
 */
class Examen {
    /**
     * @param nummer Die Examens-Nummer, z. B. 65116
     * @param jahr Das Jahr in dem das Staatsexamen statt fand, z. b. 2021
     * @param monat Das Monat, in dem das Staatsexamen statt fand. Mögliche Werte 3 für Frühjahr und 9 für Herbst.
     */
    constructor(nummer, jahr, monat) {
        /**
         * ```js
         * {
         *    'Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-5.tex': aufgabe
         * }
         * ```
         */
        this.aufgaben = {};
        this.nummer = nummer;
        this.jahr = jahr;
        this.monat = monat;
    }
    /**
     * Der Pfad zum Scan
     *
     * z. B. `...github/hbschlang/lehramt-informatik/Staatsexamen/66116/2020/09/Scan.pdf`
     */
    get pfad() {
        return path_1.default.join(helfer_1.repositoryPfad, Examen.erzeugePfad(this.nummer, this.jahr, this.monatMitNullen), 'Scan.pdf');
    }
    /**
     * Der übergeordnete Ordner, in dem das Staatsexamen liegt.
     *
     * @returns z. B. `...github/hbschlang/lehramt-informatik/Staatsexamen/66116/2020/09`
     */
    get verzeichnis() {
        return path_1.default.dirname(this.pfad);
    }
    /**
     * Der übergeordnete Ordner, in dem das Staatsexamen liegt, als relativen Pfad.
     *
     * @returns z. B. `Staatsexamen/66116/2020/09`
     */
    get verzeichnisRelativ() {
        return helfer_1.macheRelativenPfad(this.verzeichnis);
    }
    /**
     * Generiere eine absoluten Dateipfad, der im Verzeichnis des Examens liegt.
     *
     * @param pfadSegmente - z. B. `'Thema-1', 'Teilaufgabe-1', 'Aufgabe-1.tex'`
     */
    machePfad(...pfadSegmente) {
        return path_1.default.join(this.verzeichnis, ...pfadSegmente);
    }
    /**
     * @param pfadSegmente - z. B. `'Thema-1', 'Teilaufgabe-1', 'Aufgabe-1.tex'`
     */
    macheMarkdownLink(text, ...pfadSegmente) {
        return helfer_1.generiereLink(text, this.machePfad(...pfadSegmente));
    }
    /**
     * In welcher Jahreszeit das Examen stattfindet. Der Monat 3 gibt
     * `Frühjahr` und der Monat 9 `Herbst`.
     *
     * @returns `Frühjahr` oder `Herbst`
     */
    get jahreszeit() {
        if (this.monat === 3) {
            return 'Frühjahr';
        }
        else if (this.monat === 9) {
            return 'Herbst';
        }
        helfer_1.zeigeFehler('Die Monatsangabe in der Klasse Staatsexamen darf nur 3 oder 9 lauten.');
    }
    /**
     * @returns Ein lesbarer Dateiname, der das Examen identifiziert.
     */
    get dateiName() {
        return `Staatsexamen-Informatik_${this.nummer}-${this.jahr}-${this.jahreszeit}`;
    }
    get jahrJahreszeit() {
        return `${this.jahr} ${this.jahreszeit}`;
    }
    /**
     * @returns z. B. `03`
     */
    get monatMitNullen() {
        return this.monat.toString().padStart(2, '0');
    }
    /**
     * @returns z. B. `66116:2020:03`
     */
    get referenz() {
        return `${this.nummer}:${this.jahr}:${this.monatMitNullen}`;
    }
    /**
     * @returns z. B. `Examen 66116 Frühjahr 2020`
     */
    get titelKurz() {
        return `Examen ${this.nummer} ${this.jahreszeit} ${this.jahr}`;
    }
    /**
     * @returns z. B. `Datenbanksysteme / Softwaretechnologie (vertieft)`
     */
    get fach() {
        return exports.examensTitel[this.nummer];
    }
    /**
     * @param nummer z. B. `66116`
     *
     * @returns 'Datenbanksysteme / Softwaretechnologie (vertieft)'
     */
    static fachDurchNummer(nummer) {
        if (typeof nummer === 'string') {
            nummer = parseInt(nummer);
        }
        return exports.examensTitel[nummer];
    }
    static erzeugeExamenDurchTextArgumente(nummer, jahr, monat) {
        return new Examen(parseInt(nummer), parseInt(jahr), parseInt(monat));
    }
    static erzeugeExamenVonPfad(pfad) {
        const treffer = pfad.match(Examen.regExp);
        if (treffer == null || treffer.groups == null) {
            helfer_1.zeigeFehler(`Konnten den Examenspfad nicht lesen: ${pfad}`);
        }
        const gruppen = treffer.groups;
        return Examen.erzeugeExamenDurchTextArgumente(gruppen.nummer, gruppen.jahr, gruppen.monat);
    }
    static gibReferenzVonPfad(pfad) {
        const treffer = pfad.match(Examen.regExp);
        if (treffer == null || treffer.groups == null) {
            helfer_1.zeigeFehler(`Konnten den Examenspfad nicht lesen: ${pfad}`);
        }
        const gruppen = treffer.groups;
        return `${gruppen.nummer}:${gruppen.jahr}:${gruppen.monat}`;
    }
    static erzeugeExamenVonReferenz(referenz) {
        const ergebnis = referenz.split(':');
        if (ergebnis.length !== 3) {
            helfer_1.zeigeFehler('Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09');
        }
        return Examen.erzeugeExamenDurchTextArgumente(ergebnis[0], ergebnis[1], ergebnis[2]);
    }
    static erzeugePfad(nummer, jahr, monat) {
        return path_1.default.join('Staatsexamen', `${nummer}`, `${jahr}`, `${monat}`);
    }
    static teileReferenz(referenz) {
        const tmp = referenz.split(':');
        if (tmp.length !== 3) {
            console.log('Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09');
            process.exit(1);
        }
        return {
            nummer: tmp[0],
            jahr: tmp[1],
            monat: tmp[2]
        };
    }
    /**
     * ```js
     * {
     *   'Thema 1': {
     *     'Teilaufgabe 1': {
     *       'Aufgabe 3': aufgabe,
     *       'Aufgabe 4': aufgabe
     *     },
     *     'Teilaufgabe 2': {
     *       'Aufgabe 2': aufgabe,
     *       'Aufgabe 4': aufgabe
     *     }
     *   },
     *   'Thema 2': {
     *     'Teilaufgabe 2': {
     *       'Aufgabe 2': aufgabe,
     *       'Aufgabe 5': aufgabe
     *     }
     *   }
     * }
     * ```
     */
    get aufgabenBaum() {
        const aufgabenPfade = Object.keys(this.aufgaben);
        if (aufgabenPfade.length === 0) {
            return;
        }
        /**
         * Thema-1: Thema 1
         * Teilaufgabe-2: Teilaufgabe 2
         * Aufgabe-3.tex: Aufgabe 3
         */
        function macheSegmenteLesbar(segment) {
            return segment.replace('-', ' ').replace('.tex', '');
        }
        var collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base'
        });
        aufgabenPfade.sort(collator.compare);
        const baum = {};
        for (const pfad of aufgabenPfade) {
            const aufgabenPfad = pfad.replace(this.verzeichnisRelativ + path_1.default.sep, '');
            if (aufgabenPfad.match(/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/) != null) {
                const aufgabe = this.aufgaben[pfad];
                const segmente = aufgabenPfad.split(path_1.default.sep);
                let unterBaum = baum;
                for (const segment of segmente) {
                    const segmentLesbar = macheSegmenteLesbar(segment);
                    if (unterBaum[segmentLesbar] == null && !segment.includes('.tex')) {
                        unterBaum[segmentLesbar] = {};
                    }
                    else if (segment.includes('.tex')) {
                        unterBaum[segmentLesbar] = aufgabe;
                    }
                    if (!segment.includes('.tex')) {
                        unterBaum = unterBaum[segmentLesbar];
                    }
                }
            }
        }
        return baum;
    }
    besucheAufgabenBaum(besucher) {
        const baum = this.aufgabenBaum;
        if (baum == null) {
            return;
        }
        const ausgabe = new helfer_1.AusgabeSammler();
        function extrahiereNummer(titel) {
            const match = titel.match(/\d+/);
            if (match != null) {
                return parseInt(match[0]);
            }
            throw new Error('Konte keine Zahl finden');
        }
        const rufeBesucherFunktionAuf = (titel, aufgabe) => {
            const nr = extrahiereNummer(titel);
            if (titel.indexOf('Thema ') === 0) {
                if (besucher.thema != null) {
                    ausgabe.sammle(besucher.thema(nr, this, aufgabe));
                }
            }
            else if (titel.indexOf('Teilaufgabe ') === 0) {
                if (besucher.teilaufgabe != null) {
                    ausgabe.sammle(besucher.teilaufgabe(nr, this, aufgabe));
                }
            }
            else if (titel.indexOf('Aufgabe ') === 0) {
                if (besucher.aufgabe != null) {
                    ausgabe.sammle(besucher.aufgabe(nr, this, aufgabe));
                }
            }
        };
        for (const thema in baum) {
            rufeBesucherFunktionAuf(thema, baum[thema]);
            if (!(baum[thema] instanceof aufgabe_1.ExamensAufgabe)) {
                for (const teilaufgabe in baum[thema]) {
                    rufeBesucherFunktionAuf(teilaufgabe, baum[thema][teilaufgabe]);
                    if (!(baum[thema][teilaufgabe] instanceof aufgabe_1.ExamensAufgabe)) {
                        for (const aufgabe in baum[thema][teilaufgabe]) {
                            rufeBesucherFunktionAuf(aufgabe, baum[thema][teilaufgabe][aufgabe]);
                        }
                    }
                }
            }
        }
        return ausgabe.gibText();
    }
}
exports.Examen = Examen;
Examen.regExp = /^.*(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/.*$/;
class ExamenSammlung {
    constructor() {
        const dateien = glob_1.default.sync('**/Scan.pdf', { cwd: helfer_1.repositoryPfad });
        this.speicher = {};
        for (const pfad of dateien) {
            const examen = Examen.erzeugeExamenVonPfad(pfad);
            this.speicher[examen.referenz] = examen;
        }
    }
    gib(nummer, jahr, monat) {
        return this.gibDurchReferenz(`${nummer}:${jahr}:${monat}`);
    }
    gibDurchPfad(pfad) {
        return this.gibDurchReferenz(Examen.gibReferenzVonPfad(pfad));
    }
    gibDurchReferenz(referenz) {
        return this.speicher[referenz];
    }
    /**
     * @returns
     *
     * ```js
     * {
     *    '66116' : { '2021': { '03': Examen } }
     * }
     * ```
     */
    get examenBaum() {
        const referenzen = Object.keys(this.speicher);
        referenzen.sort(undefined);
        const baum = {};
        for (const referenz of referenzen) {
            const examen = this.speicher[referenz];
            const segmente = referenz.split(':');
            let unterBaum = baum;
            for (const segment of segmente) {
                if (unterBaum[segment] == null) {
                    unterBaum[segment] = {};
                }
                if (segment === '03' || segment === '09') {
                    unterBaum[segment] = examen;
                }
                else {
                    unterBaum = unterBaum[segment];
                }
            }
        }
        return baum;
    }
}
exports.ExamenSammlung = ExamenSammlung;
// auch in .tex/pakete/basis.sty
exports.examensTitel = {
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
let examenSammlung;
function gibExamenSammlung() {
    if (examenSammlung == null) {
        examenSammlung = new ExamenSammlung();
    }
    return examenSammlung;
}
exports.gibExamenSammlung = gibExamenSammlung;
