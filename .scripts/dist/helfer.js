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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generiereMarkdownLink = exports.leseRepoDatei = exports.macheRelativenPfad = exports.repositoryPfad = exports.leseDatei = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var konfigurationsDateiPfad = path_1.default.join(path_1.default.sep, 'etc', 'lehramt-informatik.config.tex');
var githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main';
function leseDatei(pfad) {
    return fs_1.default.readFileSync(pfad, { encoding: 'utf-8' });
}
exports.leseDatei = leseDatei;
function leseKonfigurationsDatei(pfad) {
    var inhalt = leseDatei(pfad);
    var treffer = inhalt.match(/\\LehramtInformatikRepository\{(.*)\}/);
    if (!treffer)
        throw new Error("Konfigurations-Datei nicht gefunden: " + pfad);
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
    if (args[0].indexOf(exports.repositoryPfad) > -1)
        return leseDatei(path_1.default.join.apply(path_1.default, __spread(args)));
    return leseDatei(path_1.default.join.apply(path_1.default, __spread([exports.repositoryPfad], args)));
}
exports.leseRepoDatei = leseRepoDatei;
function generiereMarkdownLink(text, pfad, einstellung) {
    var linkePdf = true;
    var alsMarkdownLink = true;
    if (einstellung) {
        if (einstellung.linkePdf !== undefined)
            linkePdf = einstellung.linkePdf;
        if (einstellung.alsMarkdownLink !== undefined)
            alsMarkdownLink = einstellung.alsMarkdownLink;
    }
    pfad = pfad.replace(exports.repositoryPfad, '');
    pfad = pfad.replace(/^\//, '');
    if (linkePdf)
        pfad = pfad.replace(/\.[\w]+$/, '.pdf');
    if (alsMarkdownLink) {
        return "[" + text + "](" + githubRawUrl + "/" + pfad + ")";
    }
    return text;
}
exports.generiereMarkdownLink = generiereMarkdownLink;
