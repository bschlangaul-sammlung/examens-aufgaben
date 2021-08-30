"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneDurchBibtex = void 0;
const biblatex_csl_converter_1 = require("biblatex-csl-converter");
const helfer_1 = require("../helfer");
const glob_1 = __importDefault(require("glob"));
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
const basisPfadExterneDateien = path_1.default.join(os_1.homedir(), 'git-repositories/content/informatik-studium');
function analysierteBibDatei(dateiPfad) {
    const parser = new biblatex_csl_converter_1.BibLatexParser(helfer_1.leseRepoDatei(dateiPfad), {
        processUnexpected: true,
        processUnknown: true
    });
    return parser.parse();
}
class BibtexReferenzZuDateiKonverter {
    constructor() {
        this.index = {};
    }
    leseBibTexJsonEin(bibtexJson) {
        const entries = bibtexJson.entries;
        for (const key in entries) {
            const entry = entries[key];
            if ((entry === null || entry === void 0 ? void 0 : entry.unexpected_fields.file) != null) {
                this.index[entry.entry_key] = this.findeMehrerePdfDatien(entry.unexpected_fields.file);
            }
        }
    }
    /**
     * @param eingabe z. B. AB1_Grundlagen.pdf AB1_Grundlagen_Lsg.pdf
     */
    findeMehrerePdfDatien(eingabe) {
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
function öffneDurchBibtex(referenz) {
    const bibDateien = glob_1.default.sync('**/*.bib', { cwd: helfer_1.repositoryPfad });
    const externeDateien = glob_1.default.sync('**/*.pdf', { cwd: basisPfadExterneDateien });
    const konverter = new BibtexReferenzZuDateiKonverter();
    for (const bibDateiPfad of bibDateien) {
        konverter.leseBibTexJsonEin(analysierteBibDatei(bibDateiPfad));
    }
    const dateiNamen = konverter.gibDateiNameDurchReferenz(referenz);
    if (dateiNamen == null) {
        console.log('Keine Datei gefunden');
    }
    else {
        for (const dateiName of dateiNamen) {
            externeDateien.filter(function (externerDateiPfad) {
                if (externerDateiPfad.includes(`${dateiName}.pdf`)) {
                    console.log(`Öffne Datei: ${externerDateiPfad}`);
                    helfer_1.öffneProgramm('xdg-open', path_1.default.join(basisPfadExterneDateien, externerDateiPfad));
                }
            });
        }
    }
}
exports.öffneDurchBibtex = öffneDurchBibtex;
