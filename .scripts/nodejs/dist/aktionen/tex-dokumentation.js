"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const helfer_1 = require("../helfer");
const texPfad = path_1.default.join(helfer_1.repositoryPfad, '.tex');
const styPfad = path_1.default.join(texPfad, 'pakete');
const dtxPfad = path_1.default.join(texPfad, 'dokumentation.dtx');
function leseStyDatei(dateiName, dtxInhalte) {
    console.log(`lese *.sty datei ${dateiName}`);
    const inhalt = helfer_1.leseDatei(path_1.default.join(styPfad, dateiName));
    const prefix = '%    \\end{macrocode}\n' +
        '% \\subsection{' +
        dateiName +
        '}\n' +
        '%    \\begin{macrocode}\n';
    dtxInhalte.push(prefix + inhalt);
}
function kompiliereDtxDatei() {
    helfer_1.führeAus('lualatex --shell-escape dokumentation.dtx', texPfad);
    helfer_1.führeAus('makeindex -s gglo.ist -o dokumentation.gls dokumentation.glo', texPfad);
    helfer_1.führeAus('makeindex -s gind.ist -o dokumentation.ind dokumentation.idx', texPfad);
    helfer_1.führeAus('lualatex --shell-escape dokumentation.dtx', texPfad);
}
function default_1() {
    const styS = glob_1.default.sync('**/*.sty', { cwd: styPfad });
    const dtxInhalte = [];
    for (const sty of styS) {
        leseStyDatei(sty, dtxInhalte);
    }
    const dtxVorlage = helfer_1.leseDatei(path_1.default.join(texPfad, 'dokumentation_vorlage.dtx'));
    helfer_1.schreibeDatei(dtxPfad, dtxVorlage.replace('{{ einbinden }}', dtxInhalte.join('\n')));
    kompiliereDtxDatei();
    helfer_1.öffneProgramm('/usr/bin/xdg-open', path_1.default.join(texPfad, 'dokumentation.pdf'));
}
exports.default = default_1;
