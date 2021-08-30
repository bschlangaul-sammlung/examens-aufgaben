"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.examensTitel = exports.ExamenSammlung = exports.Examen = void 0;
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const helfer_1 = require("./helfer");
class Examen {
    constructor(nummer, jahr, monat) {
        this.aufgaben = {};
        this.nummer = nummer;
        this.jahr = jahr;
        this.monat = monat;
    }
    get pfad() {
        return path_1.default.join(helfer_1.repositoryPfad, Examen.erzeugePfad(this.nummer, this.jahr, this.monatMitNullen), 'Scan.pdf');
    }
    get jahreszeit() {
        if (this.monat === 3) {
            return 'Frühjahr';
        }
        else if (this.monat === 9) {
            return 'Herbst';
        }
        helfer_1.zeigeFehler('Die Monatsangabe in der Klasse Staatsexamen darf nur 3 oder 9 lauten.');
    }
    get dateiName() {
        return `Staatsexamen-Informatik_${this.nummer}-${this.jahr}-${this.jahreszeit}`;
    }
    get jahrJahreszeit() {
        return `${this.jahr} ${this.jahreszeit}`;
    }
    get monatMitNullen() {
        return this.monat.toString().padStart(2, '0');
    }
    get referenz() {
        return `${this.nummer}:${this.jahr}:${this.monatMitNullen}`;
    }
    get titelKurz() {
        return `Examen ${this.nummer} ${this.jahreszeit} ${this.jahr}`;
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
}
exports.ExamenSammlung = ExamenSammlung;
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
