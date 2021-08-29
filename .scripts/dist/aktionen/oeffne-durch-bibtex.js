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
exports.öffneDurchBibtex = void 0;
var biblatex_csl_converter_1 = require("biblatex-csl-converter");
var helfer_1 = require("../helfer");
var glob_1 = __importDefault(require("glob"));
var os_1 = require("os");
var path_1 = __importDefault(require("path"));
var basisPfadExterneDateien = path_1.default.join(os_1.homedir(), 'git-repositories/content/informatik-studium');
function analysierteBibDatei(dateiPfad) {
    var parser = new biblatex_csl_converter_1.BibLatexParser(helfer_1.leseRepoDatei(dateiPfad), {
        processUnexpected: true,
        processUnknown: true
    });
    return parser.parse();
}
var BibtexReferenzZuDateiKonverter = /** @class */ (function () {
    function BibtexReferenzZuDateiKonverter() {
        this.index = {};
    }
    BibtexReferenzZuDateiKonverter.prototype.leseBibTexJsonEin = function (bibtexJson) {
        var entries = bibtexJson.entries;
        for (var key in entries) {
            var entry = entries[key];
            if (entry.unexpected_fields && entry.unexpected_fields.file) {
                this.index[entry.entry_key] = this.findeMehrerePdfDatien(entry.unexpected_fields.file);
            }
        }
    };
    /**
     *
     * @param eingabe z. B. AB1_Grundlagen.pdf AB1_Grundlagen_Lsg.pdf
     */
    BibtexReferenzZuDateiKonverter.prototype.findeMehrerePdfDatien = function (eingabe) {
        var ergebnis = eingabe.split('.pdf');
        ergebnis = ergebnis
            .map(function (dateiBasisName) {
            return dateiBasisName.trim().replace(/^, +/, '');
        })
            .filter(function (dateiBasisName) {
            return !!dateiBasisName;
        });
        return ergebnis;
    };
    BibtexReferenzZuDateiKonverter.prototype.gibDateiNameDurchReferenz = function (referenz) {
        if (this.index[referenz]) {
            return this.index[referenz];
        }
    };
    return BibtexReferenzZuDateiKonverter;
}());
function öffneDurchBibtex(referenz) {
    var e_1, _a, e_2, _b;
    var bibDateien = glob_1.default.sync('**/*.bib', { cwd: helfer_1.repositoryPfad });
    var externeDateien = glob_1.default.sync('**/*.pdf', { cwd: basisPfadExterneDateien });
    var konverter = new BibtexReferenzZuDateiKonverter();
    try {
        for (var bibDateien_1 = __values(bibDateien), bibDateien_1_1 = bibDateien_1.next(); !bibDateien_1_1.done; bibDateien_1_1 = bibDateien_1.next()) {
            var bibDateiPfad = bibDateien_1_1.value;
            konverter.leseBibTexJsonEin(analysierteBibDatei(bibDateiPfad));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bibDateien_1_1 && !bibDateien_1_1.done && (_a = bibDateien_1.return)) _a.call(bibDateien_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var dateiNamen = konverter.gibDateiNameDurchReferenz(referenz);
    if (dateiNamen == null) {
        console.log('Keine Datei gefunden');
    }
    else {
        var _loop_1 = function (dateiName) {
            externeDateien.filter(function (externerDateiPfad) {
                if (externerDateiPfad.includes(dateiName + ".pdf")) {
                    console.log("\u00D6ffne Datei: " + externerDateiPfad);
                    helfer_1.öffneProgramm('xdg-open', path_1.default.join(basisPfadExterneDateien, externerDateiPfad));
                }
            });
        };
        try {
            for (var dateiNamen_1 = __values(dateiNamen), dateiNamen_1_1 = dateiNamen_1.next(); !dateiNamen_1_1.done; dateiNamen_1_1 = dateiNamen_1.next()) {
                var dateiName = dateiNamen_1_1.value;
                _loop_1(dateiName);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (dateiNamen_1_1 && !dateiNamen_1_1.done && (_b = dateiNamen_1.return)) _b.call(dateiNamen_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}
exports.öffneDurchBibtex = öffneDurchBibtex;
