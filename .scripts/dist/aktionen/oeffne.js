"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffne = void 0;
var fs_1 = __importDefault(require("fs"));
var sammlung_1 = require("../sammlung");
var helfer_1 = require("../helfer");
var oeffne_durch_bibtex_1 = require("./oeffne-durch-bibtex");
function öffneExamen(referenz) {
    var examen = sammlung_1.examenSammlung.gibDurchReferenz(referenz);
    if (fs_1.default.existsSync(examen.pfad)) {
        helfer_1.öffneProgramm('/usr/bin/xdg-open', examen.pfad);
    }
    else {
        console.log("Den Pfad " + examen.pfad + " gib es nicht.");
    }
}
function öffne(referenz) {
    if (referenz.match(/\d{5}:\d{4}:\d{2}/) != null) {
        öffneExamen(referenz);
    }
    else {
        oeffne_durch_bibtex_1.öffneDurchBibtex(referenz);
    }
}
exports.öffne = öffne;
