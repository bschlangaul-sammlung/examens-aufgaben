"use strict";
/**
 * Sammle alle Aktionen im Unterverzeichnis ./aktionen in ein Objekt und exportiere dieses.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readme_1 = __importDefault(require("./aktionen/readme"));
const tex_dokumentation_1 = __importDefault(require("./aktionen/tex-dokumentation"));
const tex_kompilation_1 = __importDefault(require("./aktionen/tex-kompilation"));
const flaci_1 = __importDefault(require("./aktionen/flaci"));
const validiere_1 = __importDefault(require("./aktionen/validiere"));
const sql_1 = __importDefault(require("./aktionen/sql"));
const aufgaben_metadaten_1 = __importDefault(require("./aktionen/aufgaben-metadaten"));
const oeffne_1 = require("./aktionen/oeffne");
const aufgaben_vorlage_1 = require("./aktionen/aufgaben-vorlage");
const aufgaben_sammlung_1 = require("./aktionen/aufgaben-sammlung");
exports.default = {
    erzeugeAufgabenMetadaten: aufgaben_metadaten_1.default,
    erzeugeAufgabenVorlage: aufgaben_vorlage_1.erzeugeAufgabenVorlage,
    erzeugeExamensAufgabeVorlage: aufgaben_vorlage_1.erzeugeExamensAufgabeVorlage,
    erzeugeExamenScansSammlung: aufgaben_sammlung_1.erzeugeExamenScansSammlung,
    erzeugeExamensLösungen: aufgaben_sammlung_1.erzeugeExamensLösungen,
    erzeugeReadme: readme_1.default,
    erzeugeTexDokumentation: tex_dokumentation_1.default,
    führeSqlAus: sql_1.default,
    kompiliereTex: tex_kompilation_1.default,
    konvertiereFlaciZuTikz: flaci_1.default,
    öffne: oeffne_1.öffne,
    öffneDurchStichwort: oeffne_1.öffneDurchStichwort,
    validiere: validiere_1.default
};
