"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ladeAufgabe = exports.ExamensAufgabe = exports.Aufgabe = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var helfer_1 = require("./helfer");
var tex_1 = require("./tex");
var Aufgabe = /** @class */ (function () {
    function Aufgabe(pfad) {
        this.stichwörter = [];
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
        if (pfad.indexOf(helfer_1.repositoryPfad) > -1) {
            return pfad;
        }
        return path_1.default.join(helfer_1.repositoryPfad, pfad);
    };
    Object.defineProperty(Aufgabe.prototype, "titelFormatiert", {
        get: function () {
            var präfix;
            var stichwörter = '';
            if (this.titel) {
                präfix = this.titel;
            }
            else {
                präfix = 'Aufgabe';
            }
            if (this.stichwörter) {
                stichwörter = this.stichwörterFormatiert;
            }
            return "" + präfix + stichwörter;
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
    Object.defineProperty(Aufgabe.prototype, "markdownLink", {
        get: function () {
            return helfer_1.generiereMarkdownLink(this.titelFormatiert, this.pfad);
        },
        enumerable: false,
        configurable: true
    });
    return Aufgabe;
}());
exports.Aufgabe = Aufgabe;
var ExamensAufgabe = /** @class */ (function (_super) {
    __extends(ExamensAufgabe, _super);
    function ExamensAufgabe(pfad) {
        var _this = _super.call(this, pfad) || this;
        var match = pfad.match(ExamensAufgabe.pfadRegExp);
        if (!match || !match.groups) {
            throw new Error("Konnten den Examenspfad nicht lesen: " + pfad);
        }
        var gruppen = match.groups;
        _this.nummer = parseInt(gruppen.nummer);
        _this.jahr = parseInt(gruppen.jahr);
        _this.monat = parseInt(gruppen.monat);
        _this.aufgabe = parseInt(gruppen.aufgabe);
        if (gruppen.thema)
            _this.thema = parseInt(gruppen.thema);
        if (gruppen.teilaufgabe)
            _this.teilaufgabe = parseInt(gruppen.teilaufgabe);
        return _this;
    }
    ExamensAufgabe.istExamensAufgabe = function (pfad) {
        if (pfad.match(this.pfadRegExp)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ExamensAufgabe.prototype, "examensReferenz", {
        get: function () {
            return this.nummer + ":" + this.jahr + ":" + this.monat.toString().padStart(2, '0');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "aufgabenReferenz", {
        get: function () {
            var output = [];
            if (this.thema)
                output.push("T" + this.thema);
            if (this.teilaufgabe)
                output.push("TA" + this.teilaufgabe);
            output.push("A" + this.aufgabe);
            return output.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "titelKurz", {
        get: function () {
            return this.examensReferenz + " " + this.aufgabenReferenz + this.stichwörterFormatiert;
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.prototype.gibTitelNurAufgabe = function (alsMarkdownLink) {
        if (alsMarkdownLink === void 0) { alsMarkdownLink = false; }
        var ausgabe = "Aufgabe " + this.aufgabe + this.stichwörterFormatiert;
        if (alsMarkdownLink) {
            return helfer_1.generiereMarkdownLink(ausgabe, this.pfad);
        }
        return ausgabe;
    };
    Object.defineProperty(ExamensAufgabe.prototype, "markdownLink", {
        get: function () {
            return helfer_1.generiereMarkdownLink(this.titelKurz, this.pfad);
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.pfadRegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
    ExamensAufgabe.schwacherPfadRegExp = /(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
    return ExamensAufgabe;
}(Aufgabe));
exports.ExamensAufgabe = ExamensAufgabe;
function ladeAufgabe(pfad) {
    if (ExamensAufgabe.istExamensAufgabe(pfad)) {
        return new ExamensAufgabe(pfad);
    }
    else {
        return new Aufgabe(pfad);
    }
}
exports.ladeAufgabe = ladeAufgabe;
