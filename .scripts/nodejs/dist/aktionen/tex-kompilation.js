"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const aufgabe_1 = require("../aufgabe");
const helfer_1 = require("../helfer");
function default_1() {
    const staatsexamenPath = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen');
    const dateien = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    for (let pfad of dateien) {
        pfad = path_1.default.join(staatsexamenPath, pfad);
        if (pfad.match(aufgabe_1.ExamensAufgabe.schwacherPfadRegExp) != null) {
            console.log(pfad);
            const ergebnis = child_process_1.default.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', pfad], {
                encoding: 'utf-8'
            });
            if (ergebnis.status !== 0) {
                console.log(ergebnis.stdout);
                console.log(ergebnis.stderr);
                helfer_1.öffneVSCode(pfad);
                helfer_1.zeigeFehler(`Die Datei „${pfad}“ konnte nicht kompiliert werden.`);
            }
        }
    }
}
exports.default = default_1;
