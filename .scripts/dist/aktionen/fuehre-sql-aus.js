"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.führeSqlAus = void 0;
var child_process_1 = __importDefault(require("child_process"));
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
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
    TexDateiMitSql.prototype.gibTemporärenLöschungsPfad = function () {
        return this.gibTemporärenPfad("loeschung");
    };
    TexDateiMitSql.prototype.schreibeTemporäreSqlDatei = function (bezeichner, inhalt) {
        fs_1.default.writeFileSync(this.pfad + "_" + bezeichner + "_tmp.sql", inhalt);
    };
    TexDateiMitSql.prototype.führePostgresqlAus = function (datei, redselig) {
        if (redselig === void 0) { redselig = true; }
        var pygmentize = child_process_1.default.spawnSync('pygmentize', ['-l', 'sql', datei], { encoding: 'utf-8' });
        if (redselig)
            console.log(pygmentize.stdout);
        var prozess = child_process_1.default.spawnSync('sudo', [
            '-u',
            'postgres',
            'psql',
            '--quiet',
            '-f',
            datei,
            '-v',
            'ON_ERROR_STOP=1'
        ], {
            encoding: 'utf-8',
            env: { PGPASSWORD: 'postgres' },
            shell: '/usr/bin/zsh'
        });
        if (prozess.status !== 0) {
            console.log(chalk_1.default.red(prozess.stderr));
            console.log(chalk_1.default.red(prozess.stdout));
            //zeigeFehler('Postgresql wurde mit einem Fehler beendet.')
        }
        else {
            if (redselig)
                console.log(prozess.stdout);
        }
    };
    TexDateiMitSql.prototype.erzeugeDatenbank = function () {
        this.führePostgresqlAus(this.gibTemporärenErzeugungsPfad(), false);
    };
    TexDateiMitSql.prototype.führeAnfrageAus = function (anfragenNummer) {
        this.erzeugeDatenbank();
        console.log(chalk_1.default.red("Anfrage Nummer " + anfragenNummer + ":\n"));
        this.führePostgresqlAus(this.gibTemporärenAnfragenPfad(anfragenNummer));
    };
    TexDateiMitSql.prototype.führeAlleAnfragenAus = function () {
        for (var index = 1; index <= this.anzahlAnfragen; index++) {
            this.führeAnfrageAus(index);
        }
    };
    TexDateiMitSql.prototype.erzeugeCodeDatenbankErstellung = function (datenbankName) {
        return ("DROP DATABASE IF EXISTS " + datenbankName + ";\n" +
            ("CREATE DATABASE " + datenbankName + ";\n") +
            ("\\c " + datenbankName + "\n")); // mysql: USE name;
    };
    TexDateiMitSql.prototype.findeErzeugungsCode = function () {
        var regExp = /% ?Datenbankname: ?(\w+).*?\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs;
        var datenbank = regExp.exec(this.inhalt);
        if (!datenbank) {
            helfer_1.zeigeFehler('Keine Erzeugungs-Code gefunden: % Datenbankname: Name\\begin{minted}{sql}…\\end{minted}');
        }
        // postgresql \c funktioniert nur mit klein geschriebenen Datenbank-Namen
        var datenbankName = datenbank[1].toLowerCase();
        var erzeugungsCode = datenbank[2];
        this.inhalt = this.inhalt.replace(regExp, '');
        this.schreibeTemporäreSqlDatei('erzeugung', this.erzeugeCodeDatenbankErstellung(datenbankName) + erzeugungsCode);
        return datenbankName;
    };
    TexDateiMitSql.prototype.erzeugeLöschungsCode = function () {
        this.schreibeTemporäreSqlDatei('loeschung', "DROP DATABASE IF EXISTS " + this.datenbankName + ";\n");
    };
    TexDateiMitSql.prototype.findeAnfragen = function () {
        var re = /\\begin\{minted\}\{sql\}(.*?)\\end\{minted\}/gs;
        var übereinstimmung;
        var zähler = 0;
        do {
            übereinstimmung = re.exec(this.inhalt);
            if (übereinstimmung) {
                zähler++;
                this.schreibeTemporäreSqlDatei(this.gibAnfrageBezeichner(zähler), "\\c " + this.datenbankName + " \n" + übereinstimmung[1]);
            }
        } while (übereinstimmung);
        this.anzahlAnfragen = zähler;
    };
    TexDateiMitSql.prototype.aufräumen = function () {
        this.erzeugeLöschungsCode();
        this.führePostgresqlAus(this.gibTemporärenLöschungsPfad());
        fs_1.default.unlinkSync(this.gibTemporärenErzeugungsPfad());
        for (var index = 1; index <= this.anzahlAnfragen; index++) {
            fs_1.default.unlinkSync(this.gibTemporärenAnfragenPfad(index));
        }
        fs_1.default.unlinkSync(this.gibTemporärenLöschungsPfad());
    };
    return TexDateiMitSql;
}());
function führeSqlAus(pfad, cmdObj) {
    var datei = new TexDateiMitSql(pfad);
    datei.findeAnfragen();
    if (cmdObj.anfrage) {
        datei.führeAnfrageAus(parseInt(cmdObj.anfrage));
    }
    else {
        datei.führeAlleAnfragenAus();
    }
    if (!cmdObj.nichtLoeschen) {
        datei.aufräumen();
    }
}
exports.führeSqlAus = führeSqlAus;
