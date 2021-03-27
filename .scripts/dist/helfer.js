"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.öffneVSCode = exports.öffneProgramm = exports.führeAus = exports.generiereLink = exports.macheRepoPfad = exports.leseRepoDatei = exports.macheRelativenPfad = exports.repositoryPfad = exports.zeigeFehler = exports.schreibeDatei = exports.leseDatei = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var child_process_1 = __importDefault(require("child_process"));
var chalk_1 = __importDefault(require("chalk"));
var konfigurationsDateiPfad = path_1.default.join(path_1.default.sep, 'etc', 'lehramt-informatik.config.tex');
var githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main';
function leseDatei(pfad) {
    return fs_1.default.readFileSync(pfad, { encoding: 'utf-8' });
}
exports.leseDatei = leseDatei;
function schreibeDatei(pfad, inhalt) {
    return fs_1.default.writeFileSync(pfad, inhalt, { encoding: 'utf-8' });
}
exports.schreibeDatei = schreibeDatei;
function zeigeFehler(meldung) {
    console.error(chalk_1.default.red(meldung));
    process.exit(1);
}
exports.zeigeFehler = zeigeFehler;
function leseKonfigurationsDatei(pfad) {
    var inhalt = leseDatei(pfad);
    var treffer = inhalt.match(/\\LehramtInformatikRepository\{(.*)\}/);
    if (!treffer)
        zeigeFehler("Konfigurations-Datei nicht gefunden: " + pfad);
    return treffer[1];
}
exports.repositoryPfad = leseKonfigurationsDatei(konfigurationsDateiPfad);
function macheRelativenPfad(pfad) {
    pfad = pfad.replace(exports.repositoryPfad, '');
    return pfad.replace(/^\//, '');
}
exports.macheRelativenPfad = macheRelativenPfad;
function leseRepoDatei() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args[0].includes(exports.repositoryPfad))
        return leseDatei(path_1.default.join.apply(path_1.default, __spreadArray([], __read(args))));
    return leseDatei(path_1.default.join.apply(path_1.default, __spreadArray([exports.repositoryPfad], __read(args))));
}
exports.leseRepoDatei = leseRepoDatei;
function macheRepoPfad() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args[0].includes(exports.repositoryPfad))
        return path_1.default.join.apply(path_1.default, __spreadArray([], __read(args)));
    return path_1.default.join.apply(path_1.default, __spreadArray([exports.repositoryPfad], __read(args)));
}
exports.macheRepoPfad = macheRepoPfad;
function generiereLink(text, pfad, dateiName, einstellung) {
    var linkePdf = true;
    var alsLink = true;
    var alsHtml = true;
    if (einstellung) {
        if (einstellung.linkePdf !== undefined)
            linkePdf = einstellung.linkePdf;
        if (einstellung.alsLink !== undefined)
            alsLink = einstellung.alsLink;
        if (einstellung.alsHtml !== undefined)
            alsHtml = einstellung.alsHtml;
    }
    pfad = pfad.replace(exports.repositoryPfad, '');
    pfad = pfad.replace(/^\//, '');
    if (linkePdf)
        pfad = pfad.replace(/\.[\w]+$/, '.pdf');
    if (alsLink) {
        if (alsHtml) {
            dateiName = dateiName.replace(/\.[a-z]{3,5}$/, '');
            return "<a href=\"" + githubRawUrl + "/" + pfad + "\" download=\"" + dateiName + "\">" + text + "</a>";
        }
        return "[" + text + "](" + githubRawUrl + "/" + pfad + ")";
    }
    return text;
}
exports.generiereLink = generiereLink;
function führeAus(programm, cwd) {
    var process = child_process_1.default.spawnSync(programm, { cwd: cwd, encoding: 'utf-8', shell: true });
    if (process.status !== 0)
        throw Error(process.stderr);
    console.log(process.stdout);
}
exports.führeAus = führeAus;
function öffneProgramm(programm, pfad) {
    var subprocess = child_process_1.default.spawn(programm, [pfad], {
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
