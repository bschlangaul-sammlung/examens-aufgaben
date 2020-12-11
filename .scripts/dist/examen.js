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
exports.examensTitel = exports.ExamenSammlung = exports.Examen = void 0;
var path_1 = __importDefault(require("path"));
var glob_1 = __importDefault(require("glob"));
var helfer_1 = require("./helfer");
var Examen = /** @class */ (function () {
    function Examen(nummer, jahr, monat) {
        this.aufgaben = [];
        this.nummer = nummer;
        this.jahr = jahr;
        this.monat = monat;
    }
    Object.defineProperty(Examen.prototype, "pfad", {
        get: function () {
            return path_1.default.join(helfer_1.repositoryPfad, Examen.erzeugePfad(this.nummer, this.jahr, this.monatMitNullen), 'Scan.pdf');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Examen.prototype, "jahreszeit", {
        get: function () {
            if (this.monat === 3) {
                return 'Frühjahr';
            }
            else if (this.monat === 9) {
                return 'Herbst';
            }
            throw new Error("Die Monatsangabe in der Klasse Staatsexamen darf nur 3 oder 9 lauten.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Examen.prototype, "jahrJahreszeit", {
        get: function () {
            return this.jahr + " " + this.jahreszeit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Examen.prototype, "monatMitNullen", {
        get: function () {
            return this.monat.toString().padStart(2, '0');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Examen.prototype, "referenz", {
        get: function () {
            return this.nummer + ":" + this.jahr + ":" + this.monatMitNullen;
        },
        enumerable: false,
        configurable: true
    });
    Examen.erzeugeExamenDurchTextArgumente = function (nummer, jahr, monat) {
        return new Examen(parseInt(nummer), parseInt(jahr), parseInt(monat));
    };
    Examen.erzeugeExamenVonPfad = function (pfad) {
        var treffer = pfad.match(Examen.regExp);
        if (!treffer || !treffer.groups) {
            throw new Error("Konnten den Examenspfad nicht lesen: " + pfad);
        }
        var gruppen = treffer.groups;
        return Examen.erzeugeExamenDurchTextArgumente(gruppen.nummer, gruppen.jahr, gruppen.monat);
    };
    Examen.gibReferenzVonPfad = function (pfad) {
        var treffer = pfad.match(Examen.regExp);
        if (!treffer || !treffer.groups) {
            throw new Error("Konnten den Examenspfad nicht lesen: " + pfad);
        }
        var gruppen = treffer.groups;
        return gruppen.nummer + ":" + gruppen.jahr + ":" + gruppen.monat;
    };
    Examen.erzeugeExamenVonReferenz = function (referenz) {
        var ergebnis = referenz.split(':');
        if (ergebnis.length !== 3) {
            throw new Error('Eine Staatsexamens-Referenz muss in diesem Format sein: 66116:2020:09');
        }
        return Examen.erzeugeExamenDurchTextArgumente(ergebnis[0], ergebnis[1], ergebnis[2]);
    };
    Examen.erzeugePfad = function (nummer, jahr, monat) {
        return path_1.default.join('Staatsexamen', "" + nummer, "" + jahr, "" + monat);
    };
    Examen.teileReferenz = function (referenz) {
        var tmp = referenz.split(':');
        if (tmp.length !== 3) {
            console.log('Exam ref has to be in this format: 66116:2020:09');
            process.exit(1);
        }
        return {
            nummer: tmp[0],
            jahr: tmp[1],
            monat: tmp[2]
        };
    };
    Examen.regExp = /^.*(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/.*$/;
    return Examen;
}());
exports.Examen = Examen;
var ExamenSammlung = /** @class */ (function () {
    function ExamenSammlung() {
        var e_1, _a;
        var dateien = glob_1.default.sync('**/Scan.pdf', { cwd: helfer_1.repositoryPfad });
        this.speicher = {};
        try {
            for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
                var pfad = dateien_1_1.value;
                var examen = Examen.erzeugeExamenVonPfad(pfad);
                this.speicher[examen.referenz] = examen;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dateien_1_1 && !dateien_1_1.done && (_a = dateien_1.return)) _a.call(dateien_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    ExamenSammlung.prototype.gib = function (nummer, jahr, monat) {
        return this.gibDurchReferenz(nummer + ":" + jahr + ":" + monat);
    };
    ExamenSammlung.prototype.gibDurchPfad = function (pfad) {
        return this.gibDurchReferenz(Examen.gibReferenzVonPfad(pfad));
    };
    ExamenSammlung.prototype.gibDurchReferenz = function (referenz) {
        return this.speicher[referenz];
    };
    return ExamenSammlung;
}());
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
