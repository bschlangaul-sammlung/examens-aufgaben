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
    var parser = new biblatex_csl_converter_1.BibLatexParser(helfer_1.leseRepoDatei(dateiPfad), { processUnexpected: true, processUnknown: true });
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
                this.index[entry.entry_key] = entry.unexpected_fields.file;
            }
        }
    };
    BibtexReferenzZuDateiKonverter.prototype.gibDateiNameDurchReferenz = function (referenz) {
        if (this.index[referenz]) {
            return this.index[referenz];
        }
    };
    return BibtexReferenzZuDateiKonverter;
}());
function öffneDurchBibtex(referenz) {
    var e_1, _a;
    var bibDateien = glob_1.default.sync('**/*.bib', { cwd: helfer_1.repositoryPfad });
    var externeDateien = glob_1.default.sync('**/*', { cwd: basisPfadExterneDateien });
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
    var dateiName = konverter.gibDateiNameDurchReferenz(referenz);
    if (dateiName) {
        externeDateien.filter(function (externeDateiPfad) {
            if (externeDateiPfad.includes(dateiName)) {
                console.log(externeDateiPfad);
                helfer_1.öffneProgramm('xdg-open', path_1.default.join(basisPfadExterneDateien, externeDateiPfad));
            }
        });
    }
    else {
        console.log('Keine Datei gefunden');
    }
}
exports.öffneDurchBibtex = öffneDurchBibtex;
