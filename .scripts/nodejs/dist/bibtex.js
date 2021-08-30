"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gibBibtexSammlung = exports.leseBibDatei = void 0;
const glob_1 = __importDefault(require("glob"));
const biblatex_csl_converter_1 = require("biblatex-csl-converter");
const helfer_1 = require("./helfer");
function leseBibDatei(dateiPfad) {
    const parser = new biblatex_csl_converter_1.BibLatexParser(helfer_1.leseRepoDatei(dateiPfad), {
        processUnexpected: true,
        processUnknown: true
    });
    return parser.parse();
}
exports.leseBibDatei = leseBibDatei;
class BibtexSammlung {
    constructor() {
        this.index = {};
        const bibDateien = glob_1.default.sync('**/*.bib', { cwd: helfer_1.repositoryPfad });
        for (const bibDateiPfad of bibDateien) {
            this.leseBibTexJsonEin(leseBibDatei(bibDateiPfad));
        }
    }
    leseBibTexJsonEin(bibtexJson) {
        var _a;
        const entries = bibtexJson.entries;
        for (const key in entries) {
            const entry = entries[key];
            if (((_a = entry === null || entry === void 0 ? void 0 : entry.unexpected_fields) === null || _a === void 0 ? void 0 : _a.file) != null) {
                this.index[entry.entry_key] = BibtexSammlung.findeMehrerePdfDateien(entry.unexpected_fields.file);
            }
        }
    }
    /**
     * @param eingabe z. B. AB1_Grundlagen.pdf AB1_Grundlagen_Lsg.pdf
     */
    static findeMehrerePdfDateien(eingabe) {
        let ergebnis = eingabe.split('.pdf');
        ergebnis = ergebnis
            .map(function (dateiBasisName) {
            return dateiBasisName.trim().replace(/^, +/, '');
        })
            .filter(function (dateiBasisName) {
            // eslint-disable-next-line
            return !!dateiBasisName;
        });
        return ergebnis;
    }
    gibDateiNameDurchReferenz(referenz) {
        if (this.index[referenz] != null) {
            return this.index[referenz];
        }
    }
}
let bibtexSammlung;
function gibBibtexSammlung() {
    if (bibtexSammlung == null) {
        bibtexSammlung = new BibtexSammlung();
    }
    return bibtexSammlung;
}
exports.gibBibtexSammlung = gibBibtexSammlung;
