"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneVSCode = exports.öffneProgramm = exports.führeAus = exports.generiereLink = exports.macheRepoPfad = exports.leseRepoDatei = exports.macheRelativenPfad = exports.repositoryPfad = exports.zeigeFehler = exports.schreibeDatei = exports.leseDatei = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = __importDefault(require("child_process"));
const chalk_1 = __importDefault(require("chalk"));
const konfigurationsDateiPfad = path_1.default.join(path_1.default.sep, 'etc', 'lehramt-informatik.config.tex');
const githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main';
function leseDatei(pfad) {
    return fs_1.default.readFileSync(pfad, { encoding: 'utf-8' });
}
exports.leseDatei = leseDatei;
function schreibeDatei(pfad, inhalt) {
    fs_1.default.writeFileSync(pfad, inhalt, { encoding: 'utf-8' });
}
exports.schreibeDatei = schreibeDatei;
function zeigeFehler(meldung) {
    console.error(chalk_1.default.red(meldung));
    process.exit(1);
}
exports.zeigeFehler = zeigeFehler;
function leseKonfigurationsDatei(pfad) {
    const inhalt = leseDatei(pfad);
    const treffer = inhalt.match(/\\LehramtInformatikRepository\{(.*)\}/);
    if (treffer == null) {
        zeigeFehler(`Konfigurations-Datei nicht gefunden: ${pfad}`);
    }
    return treffer[1];
}
exports.repositoryPfad = leseKonfigurationsDatei(konfigurationsDateiPfad);
function macheRelativenPfad(pfad) {
    pfad = pfad.replace(exports.repositoryPfad, '');
    return pfad.replace(/^\//, '');
}
exports.macheRelativenPfad = macheRelativenPfad;
function leseRepoDatei(...args) {
    if (args[0].includes(exports.repositoryPfad)) {
        return leseDatei(path_1.default.join(...args));
    }
    return leseDatei(path_1.default.join(exports.repositoryPfad, ...args));
}
exports.leseRepoDatei = leseRepoDatei;
function macheRepoPfad(...args) {
    if (args[0].includes(exports.repositoryPfad)) {
        return path_1.default.join(...args);
    }
    return path_1.default.join(exports.repositoryPfad, ...args);
}
exports.macheRepoPfad = macheRepoPfad;
/**
 * Generiere eine Markdown- oder HTML-Link.
 *
 * @param text Der Text, der als Link gesetzt werden soll.
 * @param pfad Der Datei-Pfad, zu dem gelinkt werden soll.
 * @param downloadDateiName Der Dateiname, den die Datei haben soll, wenn sie
 * heruntergeladen wird. Dieser Parameter wird nur berücksichtig, wenn die Link
 * als HTML ausgegeben wird.
 * @param einstellung
 *
 * @returns Ein Link zu einer Datei auf Github, entweder im Markdown- oder im
 * HTML-Format.
 */
function generiereLink(text, pfad, einstellung) {
    let linkePdf = true;
    if (einstellung != null) {
        if (einstellung.linkePdf !== undefined) {
            linkePdf = einstellung.linkePdf;
        }
    }
    pfad = pfad.replace(exports.repositoryPfad, '');
    pfad = pfad.replace(/^\//, '');
    if (linkePdf) {
        pfad = pfad.replace(/\.[\w]+$/, '.pdf');
    }
    return `[${text}](${githubRawUrl}/${pfad})`;
}
exports.generiereLink = generiereLink;
function führeAus(programm, cwd) {
    const process = child_process_1.default.spawnSync(programm, {
        cwd: cwd,
        encoding: 'utf-8',
        shell: true
    });
    if (process.status !== 0)
        throw Error(process.stderr + process.stdout);
    console.log(process.stdout);
}
exports.führeAus = führeAus;
function öffneProgramm(programm, pfad) {
    const subprocess = child_process_1.default.spawn(programm, [pfad], {
        detached: true,
        stdio: 'ignore'
    });
    subprocess.unref();
}
exports.öffneProgramm = öffneProgramm;
function öffneVSCode(pfad) {
    öffneProgramm('/usr/bin/code', macheRepoPfad(pfad));
}
exports.öffneVSCode = öffneVSCode;
