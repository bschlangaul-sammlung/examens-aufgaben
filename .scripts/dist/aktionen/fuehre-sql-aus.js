"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.führeSqlAus = void 0;
var child_process_1 = __importDefault(require("child_process"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var helfer_1 = require("../helfer");
var TexDateiMitSql = /** @class */ (function () {
    function TexDateiMitSql(pfad) {
        this.anzahlAnfragen = 0;
        this.pfad = pfad;
        this.inhalt = helfer_1.leseDatei(pfad);
        this.datenbankName = this.findeErzeugungsCode();
    }
    TexDateiMitSql.prototype.gibTemporärenPfad = function (bezeichner) {
        return this.pfad + "_" + bezeichner + "_tmp.sql";
    };
    TexDateiMitSql.prototype.gibAnfrageBezeichner = function (anfrageNummer) {
        var anfrageNummerFormatiert = anfrageNummer.toString().padStart(3, '0');
        return "anfrage" + anfrageNummerFormatiert;
    };
    TexDateiMitSql.prototype.gibTemporärenAnfragenPfad = function (anfrageNummer) {
        return this.gibTemporärenPfad(this.gibAnfrageBezeichner(anfrageNummer));
    };
    TexDateiMitSql.prototype.gibTemporärenErzeugungsPfad = function () {
        return this.gibTemporärenPfad("erzeugung");
    };
    TexDateiMitSql.prototype.schreibeTemporäreSqlDatei = function (bezeichner, inhalt) {
        fs_1.default.writeFileSync(this.pfad + "_" + bezeichner + "_tmp.sql", inhalt);
    };
    TexDateiMitSql.prototype.führePostgresqlAus = function (datei) {
        var prozess = child_process_1.default.spawnSync('/usr/bin/sudo', [
            'PGPASSWORD=postgres',
            '-u', 'postgres',
            'psql',
            '-f', path_1.default.resolve(datei)
        ], { shell: '/usr/bin/zsh', encoding: 'utf-8' });
        if (prozess.status !== 0) {
            console.log(prozess.stderr);
            console.log(prozess.stdout);
            throw new Error('Postgresql wurde mit einem Fehler beendet.');
        }
        else {
            console.log(prozess.stdout);
            console.log(prozess.stderr);
        }
    };
    TexDateiMitSql.prototype.erzeugeDatenbank = function () {
        this.führePostgresqlAus(this.gibTemporärenErzeugungsPfad());
    };
    TexDateiMitSql.prototype.führeAlleAnfragenAus = function () {
        for (var index = 1; index <= this.anzahlAnfragen; index++) {
            this.führePostgresqlAus(this.gibTemporärenAnfragenPfad(index));
        }
    };
    TexDateiMitSql.prototype.erzeugeCodeDatenbankErstellung = function (datenbankName) {
        return "DROP DATABASE IF EXISTS " + datenbankName + ";\n" +
            ("CREATE DATABASE " + datenbankName + ";\n") +
            ("\\c " + datenbankName + "\n"); // mysql: USE name;
    };
    TexDateiMitSql.prototype.findeErzeugungsCode = function () {
        var regExp = /% ?Datenbankname: ?(\w+).*?\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs;
        var datenbank = regExp.exec(this.inhalt);
        if (!datenbank) {
            throw new Error('Keine Erzeugungs-Code gefunden: % Datenbankname: Name\\begin{minted}{sql}…\\end{minted}');
        }
        // postgresql \c funktioniert nur mit klein geschriebenen Datenbank-Namen
        var datenbankName = datenbank[1].toLowerCase();
        var erzeugungsCode = datenbank[2];
        this.inhalt = this.inhalt.replace(regExp, '');
        this.schreibeTemporäreSqlDatei('erzeugung', this.erzeugeCodeDatenbankErstellung(datenbankName) + erzeugungsCode);
        return datenbankName;
    };
    TexDateiMitSql.prototype.findeAnfragen = function () {
        var re = /\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs;
        var übereinstimmung;
        var zähler = 0;
        do {
            übereinstimmung = re.exec(this.inhalt);
            if (übereinstimmung) {
                console.log(übereinstimmung[1]);
                zähler++;
                this.schreibeTemporäreSqlDatei(this.gibAnfrageBezeichner(zähler), "\\c " + this.datenbankName + " \n" + übereinstimmung[1]);
            }
        } while (übereinstimmung);
        this.anzahlAnfragen = zähler;
    };
    return TexDateiMitSql;
}());
function führeSqlAus(pfad) {
    var datei = new TexDateiMitSql(pfad);
    datei.findeAnfragen();
    datei.erzeugeDatenbank();
    datei.führeAlleAnfragenAus();
    //childProcess.spawnSync('postgresql')
}
exports.führeSqlAus = führeSqlAus;
