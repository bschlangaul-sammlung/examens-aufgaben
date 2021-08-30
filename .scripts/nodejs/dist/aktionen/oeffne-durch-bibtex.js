"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneDurchBibtex = void 0;
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const helfer_1 = require("../helfer");
const bibtex_1 = require("../bibtex");
const basisPfadExterneDateien = path_1.default.join(os_1.homedir(), 'git-repositories/content/informatik-studium');
function öffneDurchBibtex(referenz) {
    const externeDateien = glob_1.default.sync('**/*.pdf', { cwd: basisPfadExterneDateien });
    const sammlung = bibtex_1.gibBigtexSammlung();
    const dateiNamen = sammlung.gibDateiNameDurchReferenz(referenz);
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
