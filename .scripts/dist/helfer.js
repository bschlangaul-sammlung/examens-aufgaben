"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leseRepoDatei = exports.repositoryPfad = exports.leseDatei = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var konfigurationsDateiPfad = path_1.default.join(path_1.default.sep, 'etc', 'lehramt-informatik.config.tex');
function leseDatei(pfad) {
    return fs_1.default.readFileSync(pfad, { encoding: 'utf-8' });
}
exports.leseDatei = leseDatei;
function leseKonfigurationsDatei(pfad) {
    var configContent = leseDatei(pfad);
    var match = configContent.match(/\\LehramtInformatikRepository\{(.*)\}/);
    if (!match)
        throw new Error("Konfigurations-Datei nicht gefunden: " + pfad);
    return match[1];
}
exports.repositoryPfad = leseKonfigurationsDatei(konfigurationsDateiPfad);
function leseRepoDatei() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (arguments[0].indexOf(exports.repositoryPfad) > -1)
        return leseDatei(path_1.default.join.apply(path_1.default, args));
    return leseDatei(path_1.default.join.apply(path_1.default, __spreadArrays([exports.repositoryPfad], args)));
}
exports.leseRepoDatei = leseRepoDatei;
