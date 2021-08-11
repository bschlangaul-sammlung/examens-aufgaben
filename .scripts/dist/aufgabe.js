"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AufgabenSammlung = exports.ExamensAufgabe = exports.Aufgabe = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var glob_1 = __importDefault(require("glob"));
var helfer_1 = require("./helfer");
var tex_1 = require("./tex");
var Aufgabe = /** @class */ (function () {
    function Aufgabe(pfad) {
        this.stichwörter = [];
        /**
         * Zeigt an, ob die Aufgabe eine normale Aufgabe ist oder eine Examensaufgabe.
         * Dieser Wert wird in der spezialisierten Klasse Examensaufgabe auf wahr gesetzt.
         */
        this.istExamen = false;
        this.pfad = Aufgabe.normalisierePfad(pfad);
        if (fs_1.default.existsSync(this.pfad)) {
            this.inhalt = helfer_1.leseRepoDatei(this.pfad);
            if (this.inhalt) {
                this.stichwörter = tex_1.sammleStichwörter(this.inhalt);
                this.titel = tex_1.gibInhaltEinesTexMakros('liAufgabenTitel', this.inhalt);
            }
        }
    }
    Aufgabe.normalisierePfad = function (pfad) {
        if (pfad.includes(helfer_1.repositoryPfad)) {
            return pfad;
        }
        return path_1.default.join(helfer_1.repositoryPfad, pfad);
    };
    Aufgabe.istAufgabe = function (pfad) {
        if (pfad.match(Aufgabe.pfadRegExp)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Aufgabe.prototype, "titelFormatiert", {
        get: function () {
            var titel;
            if (this.titel) {
                titel = "\u201E" + this.titel + "\u201C";
            }
            else {
                titel = 'Aufgabe';
            }
            return titel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "stichw\u00F6rterFormatiert", {
        get: function () {
            if (this.stichwörter && this.stichwörter.length > 0) {
                return " (" + this.stichwörter.join(', ') + ")";
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "linkTex", {
        /**
         * Formatierter Link zur Tex-Datei.
         */
        get: function () {
            return helfer_1.generiereLink('.tex', this.pfad, { linkePdf: false });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "link", {
        /**
         * Formatierter Link zur PDF-Datei auf Github mit den Stichwörtern.
         */
        get: function () {
            var dateiName = path_1.default.basename(this.pfad);
            return (helfer_1.generiereLink(this.titelFormatiert, this.pfad) +
                this.stichwörterFormatiert +
                ' (' +
                this.linkTex +
                ') ');
        },
        enumerable: false,
        configurable: true
    });
    Aufgabe.vergleichePfade = function (a, b) {
        if (a.pfad < b.pfad) {
            return -1;
        }
        if (a.pfad > b.pfad) {
            return 1;
        }
        return 0;
    };
    Object.defineProperty(Aufgabe.prototype, "texEinbindenMakro", {
        get: function () {
            var relativerPfad = helfer_1.macheRelativenPfad(this.pfad);
            relativerPfad = relativerPfad.replace('.tex', '');
            return "\\liAufgabe{" + relativerPfad + "}";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "relativerPfad", {
        get: function () {
            return helfer_1.macheRelativenPfad(this.pfad);
        },
        enumerable: false,
        configurable: true
    });
    Aufgabe.pfadRegExp = /.*Aufgabe_.*\.tex/;
    return Aufgabe;
}());
exports.Aufgabe = Aufgabe;
var ExamensAufgabe = /** @class */ (function (_super) {
    __extends(ExamensAufgabe, _super);
    function ExamensAufgabe(pfad, examen) {
        var _this = _super.call(this, pfad) || this;
        _this.examen = examen;
        _this.istExamen = true;
        examen.aufgaben[pfad] = _this;
        var treffer = pfad.match(ExamensAufgabe.pfadRegExp);
        if (!treffer || !treffer.groups) {
            helfer_1.zeigeFehler("Konnten den Pfad der Examensaufgabe nicht lesen: " + pfad);
        }
        var gruppen = treffer.groups;
        _this.aufgabe = parseInt(gruppen.aufgabe);
        if (gruppen.thema) {
            _this.thema = parseInt(gruppen.thema);
        }
        if (gruppen.teilaufgabe) {
            _this.teilaufgabe = parseInt(gruppen.teilaufgabe);
        }
        return _this;
    }
    ExamensAufgabe.istExamensAufgabe = function (pfad) {
        if (pfad.match(ExamensAufgabe.pfadRegExp)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ExamensAufgabe.prototype, "examensReferenz", {
        get: function () {
            return this.examen.referenz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "aufgabenReferenz", {
        get: function () {
            var output = [];
            if (this.thema) {
                output.push("T" + this.thema);
            }
            if (this.teilaufgabe) {
                output.push("TA" + this.teilaufgabe);
            }
            output.push("A" + this.aufgabe);
            return output.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "titelKurz", {
        get: function () {
            var ausgabe = this.examen.titelKurz + " " + this.aufgabenReferenz;
            if (this.titel)
                return "\u201E" + this.titel + "\u201C " + ausgabe;
            return ausgabe;
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.prototype.gibTitelNurAufgabe = function (alsMarkdownLink) {
        if (alsMarkdownLink === void 0) { alsMarkdownLink = false; }
        var ausgabe = "Aufgabe " + this.aufgabe + this.stichwörterFormatiert;
        if (alsMarkdownLink) {
            return helfer_1.generiereLink(ausgabe, this.pfad);
        }
        return ausgabe;
    };
    Object.defineProperty(ExamensAufgabe.prototype, "dateiName", {
        get: function () {
            var aufgabenReferenz = this.aufgabenReferenz.replace(/ /g, '-');
            return this.examen.dateiName + "_" + aufgabenReferenz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "link", {
        get: function () {
            return (helfer_1.generiereLink(this.titelKurz, this.pfad) +
                this.stichwörterFormatiert +
                ' (' +
                this.linkTex +
                ') ');
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.erzeugePfad = function (arg1, arg2, arg3) {
        if (arg1 && arg2 && arg3) {
            return path_1.default.join("Thema-" + arg1, "Teilaufgabe-" + arg2, "Aufgabe-" + arg3 + ".tex");
        }
        else if (arg1 && arg2 && !arg3) {
            return path_1.default.join("Thema-" + arg1, "Aufgabe-" + arg2 + ".tex");
        }
        else {
            return "Aufgabe-" + arg1 + ".tex";
        }
    };
    Object.defineProperty(ExamensAufgabe.prototype, "texEinbindenMakro", {
        get: function () {
            var relativerPfad = helfer_1.macheRelativenPfad(this.pfad);
            relativerPfad = relativerPfad.replace('Staatsexamen/', '');
            relativerPfad = relativerPfad.replace('.tex', '');
            return "\\liExamensAufgabe{" + relativerPfad + "}";
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.pfadRegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
    ExamensAufgabe.schwacherPfadRegExp = /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
    return ExamensAufgabe;
}(Aufgabe));
exports.ExamensAufgabe = ExamensAufgabe;
var AufgabenSammlung = /** @class */ (function () {
    function AufgabenSammlung(examenSammlung) {
        var e_1, _a;
        this.examenSammlung = examenSammlung;
        this.aufgaben = {};
        var dateien = glob_1.default.sync('**/*.tex', { cwd: helfer_1.repositoryPfad });
        this.aufgaben = {};
        try {
            for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
                var pfad = dateien_1_1.value;
                var aufgabe = this.erzeugeAufgabe(pfad);
                if (aufgabe) {
                    this.aufgaben[helfer_1.macheRelativenPfad(pfad)] = aufgabe;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dateien_1_1 && !dateien_1_1.done && (_a = dateien_1.return)) _a.call(dateien_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    AufgabenSammlung.prototype.istAufgabenPfad = function (pfad) {
        return ExamensAufgabe.istExamensAufgabe(pfad) || Aufgabe.istAufgabe(pfad);
    };
    AufgabenSammlung.prototype.erzeugeAufgabe = function (pfad) {
        if (ExamensAufgabe.istExamensAufgabe(pfad)) {
            return new ExamensAufgabe(pfad, this.examenSammlung.gibDurchPfad(pfad));
        }
        else if (Aufgabe.istAufgabe(pfad)) {
            return new Aufgabe(pfad);
        }
    };
    AufgabenSammlung.prototype.gib = function (pfad) {
        return this.aufgaben[helfer_1.macheRelativenPfad(pfad)];
    };
    return AufgabenSammlung;
}());
exports.AufgabenSammlung = AufgabenSammlung;
