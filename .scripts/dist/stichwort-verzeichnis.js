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
exports.StichwortVerzeichnis = exports.StichwortBaum = void 0;
var js_yaml_1 = __importDefault(require("js-yaml"));
var glob_1 = __importDefault(require("glob"));
var helfer_1 = require("./helfer");
var StichwortBaum = /** @class */ (function () {
    function StichwortBaum() {
        this.flach = new Set();
        var roherBaum = js_yaml_1.default.safeLoad(helfer_1.leseRepoDatei('Stichwortverzeichnis.yml'));
        if (!roherBaum)
            throw new Error("Konnte die Konfigurationsdatei nicht lesen");
        this.baum = this.normalisiereBaum(roherBaum);
    }
    StichwortBaum.prototype.fügeStichwortSicherHinzu = function (stichwort) {
        if (this.flach.has(stichwort)) {
            throw Error("Doppeltes Stichwort: " + stichwort);
        }
        else {
            this.flach.add(stichwort);
            return false;
        }
    };
    StichwortBaum.prototype.existiertStichwort = function (stichwort) {
        return this.flach.has(stichwort);
    };
    /**
     * Da die YAML-Datei wegen der Anzeige in der README-Datei alle
     * Stichwörter mit einem vorangstellten `- ` auflistete, ist die
     * Ausgabe aus der YAML-Datei sehr verschachtelt
     *
     * @param eingang
     * @param ausgang
     */
    StichwortBaum.prototype.normalisiereBaum = function (eingang, ausgang) {
        var e_1, _a;
        if (!ausgang)
            ausgang = {};
        if (typeof eingang === 'string') {
            if (!this.fügeStichwortSicherHinzu(eingang)) {
                ausgang[eingang] = true;
            }
        }
        else if (Array.isArray(eingang)) {
            try {
                for (var eingang_1 = __values(eingang), eingang_1_1 = eingang_1.next(); !eingang_1_1.done; eingang_1_1 = eingang_1.next()) {
                    var t = eingang_1_1.value;
                    this.normalisiereBaum(t, ausgang);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (eingang_1_1 && !eingang_1_1.done && (_a = eingang_1.return)) _a.call(eingang_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (typeof eingang === 'object') {
            for (var stichwort in eingang) {
                if (!this.fügeStichwortSicherHinzu(stichwort)) {
                    ausgang[stichwort] = this.normalisiereBaum(eingang[stichwort]);
                }
            }
        }
        else {
            throw new Error("Unbekannter Datentyp f\u00FCr den Stichwortbaum: " + ausgang);
        }
        return ausgang;
    };
    StichwortBaum.prototype.gibUnterBaum = function (stichwort, baum) {
        if (!baum)
            baum = this.baum;
        for (var s in baum) {
            if (s === stichwort) {
                if (typeof baum[s] === 'boolean') {
                    return true;
                }
                else {
                    return baum[s];
                }
            }
            else if (typeof baum[s] === 'object') {
                var ergebnis = this.gibUnterBaum(stichwort, baum[s]);
                if (ergebnis)
                    return ergebnis;
            }
        }
        return false;
    };
    StichwortBaum.prototype.verflacheBaum = function (baum, flacherBaum) {
        if (!flacherBaum)
            flacherBaum = new Set();
        for (var s in baum) {
            if (baum[s] === true) {
                flacherBaum.add(s);
            }
            else {
                flacherBaum.add(s);
                this.verflacheBaum(baum[s], flacherBaum);
            }
        }
        return flacherBaum;
    };
    /**
     * Das übergebene Stichwort ist in der flachen Stichwortliste enthalten.
     * @param stichwort
     */
    StichwortBaum.prototype.gibFlacheListe = function (stichwort) {
        var unterBaum = this.gibUnterBaum(stichwort);
        if (!unterBaum) {
            return new Set();
        }
        else if (unterBaum === true) {
            return new Set([stichwort]);
        }
        else {
            var flacheListe = this.verflacheBaum(unterBaum);
            flacheListe.add(stichwort);
            return flacheListe;
        }
    };
    return StichwortBaum;
}());
exports.StichwortBaum = StichwortBaum;
var StichwortVerzeichnis = /** @class */ (function () {
    function StichwortVerzeichnis(stichwortBaum, aufgabenSammlung) {
        var e_2, _a, e_3, _b;
        this.stichwortBaum = stichwortBaum;
        this.aufgabenSammlung = aufgabenSammlung;
        var dateien = glob_1.default.sync('**/*.tex', { cwd: helfer_1.repositoryPfad });
        this.verzeichnis = {};
        try {
            for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
                var pfad = dateien_1_1.value;
                if (this.aufgabenSammlung.istAufgabenPfad(pfad)) {
                    var aufgabe = this.aufgabenSammlung.gib(pfad);
                    try {
                        for (var _c = (e_3 = void 0, __values(aufgabe.stichwörter)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var stichwort = _d.value;
                            if (!stichwortBaum.existiertStichwort(stichwort)) {
                                throw new Error("Das Stichwort \u201E" + stichwort + "\u201C in der Datei \u201E" + pfad + "\u201C gibt es nicht.");
                            }
                            if (this.verzeichnis[stichwort]) {
                                this.verzeichnis[stichwort].add(aufgabe);
                            }
                            else {
                                this.verzeichnis[stichwort] = new Set();
                                this.verzeichnis[stichwort].add(aufgabe);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (dateien_1_1 && !dateien_1_1.done && (_a = dateien_1.return)) _a.call(dateien_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    StichwortVerzeichnis.prototype.gibAufgabenMitStichwort = function (stichwort) {
        if (this.verzeichnis[stichwort]) {
            return this.verzeichnis[stichwort];
        }
        return new Set();
    };
    StichwortVerzeichnis.prototype.gibAufgabenMitStichwortUnterBaum = function (stichwort) {
        var e_4, _a, e_5, _b;
        var stichwörter = this.stichwortBaum.gibFlacheListe(stichwort);
        var aufgaben = new Set();
        try {
            for (var stichwörter_1 = __values(stichwörter), stichwörter_1_1 = stichwörter_1.next(); !stichwörter_1_1.done; stichwörter_1_1 = stichwörter_1.next()) {
                var stichwort_1 = stichwörter_1_1.value;
                try {
                    for (var _c = (e_5 = void 0, __values(this.gibAufgabenMitStichwort(stichwort_1))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var aufgabe = _d.value;
                        aufgaben.add(aufgabe);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (stichwörter_1_1 && !stichwörter_1_1.done && (_a = stichwörter_1.return)) _a.call(stichwörter_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return aufgaben;
    };
    return StichwortVerzeichnis;
}());
exports.StichwortVerzeichnis = StichwortVerzeichnis;
