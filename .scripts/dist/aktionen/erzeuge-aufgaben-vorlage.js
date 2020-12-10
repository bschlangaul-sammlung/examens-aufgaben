"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.erzeugeAufgabenVorlage = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function gibVorlage(werte) {
    if (werte === void 0) { werte = {}; }
    var titel = '';
    if (werte.titel)
        titel = werte.titel;
    var aufgabenName = '';
    if (werte.aufgabenName)
        aufgabenName = werte.aufgabenName;
    var zitatReferenz = '';
    if (werte.zitatReferenz)
        zitatReferenz = werte.zitatReferenz;
    return '\\documentclass{lehramt-informatik-aufgabe}\n' +
        '\\liLadePakete{}\n' +
        '\\begin{document}\n' +
        '\\liAufgabenTitel{' + titel + '}\n' +
        '\\section{' + aufgabenName + '\n' +
        '\\index{}\n' +
        '\\footcite{' + zitatReferenz + '}}\n' +
        '\n' +
        '\\end{document}\n';
}
function erzeugeAufgabenVorlage(pfad, werte) {
    fs_1.default.mkdirSync(path_1.default.dirname(pfad), { recursive: true });
    if (!fs_1.default.existsSync(pfad)) {
        fs_1.default.writeFileSync(pfad, gibVorlage(werte), { encoding: 'utf-8' });
    }
}
exports.erzeugeAufgabenVorlage = erzeugeAufgabenVorlage;
