"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stichwortBaum = void 0;
var js_yaml_1 = __importDefault(require("js-yaml"));
var helfer_1 = require("./helfer");
var StichwortBaum = /** @class */ (function () {
    function StichwortBaum() {
        this.flach = new Set();
        var roherBaum = js_yaml_1.default.safeLoad(helfer_1.leseRepoDatei('Stichwortverzeichnis.yml'));
        if (!roherBaum)
            throw new Error("Konnte die Konfigurationsdatei nicht lesen");
        this.baum = this.normalisiereBaum(roherBaum);
    }
    StichwortBaum.prototype.existiertStichwort = function (stichwort) {
        if (this.flach.has(stichwort)) {
            throw Error("Doppeltes Stichwort: " + stichwort);
        }
        else {
            this.flach.add(stichwort);
            return false;
        }
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
        if (!ausgang)
            ausgang = {};
        if (typeof eingang === 'string') {
            if (!this.existiertStichwort(eingang)) {
                ausgang[eingang] = true;
            }
        }
        else if (Array.isArray(eingang)) {
            for (var _i = 0, eingang_1 = eingang; _i < eingang_1.length; _i++) {
                var t = eingang_1[_i];
                this.normalisiereBaum(t, ausgang);
            }
        }
        else if (typeof eingang === 'object') {
            for (var stichwort in eingang) {
                if (!this.existiertStichwort(stichwort)) {
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
        for (var s in this.baum) {
            if (s === stichwort) {
                if (typeof this.baum[s] === 'boolean') {
                    return true;
                }
                else {
                    return this.baum[s];
                }
            }
            else if (typeof this.baum[s] === 'object') {
                var ergebnis = this.gibUnterBaum(stichwort, this.baum[s]);
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
exports.stichwortBaum = new StichwortBaum();
