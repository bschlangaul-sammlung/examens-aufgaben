#! /usr/bin/env node
"use strict";
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
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var child_process_1 = __importDefault(require("child_process"));
var glob_1 = __importDefault(require("glob"));
var commander_1 = require("commander");
var aufgabe_1 = require("./aufgabe");
var helfer_1 = require("./helfer");
var sammlung_1 = require("./sammlung");
var erzeuge_aufgaben_vorlage_1 = require("./aktionen/erzeuge-aufgaben-vorlage");
var erzeuge_readme_1 = require("./aktionen/erzeuge-readme");
var erzeuge_examens_aufgabe_vorlage_1 = require("./aktionen/erzeuge-examens-aufgabe-vorlage");
var fuehre_sql_aus_1 = require("./aktionen/fuehre-sql-aus");
/*******************************************************************************
 * low level functions
 ******************************************************************************/
function öffneProgramm(executable, filePath) {
    var subprocess = child_process_1.default.spawn(executable, [filePath], {
        detached: true,
        stdio: 'ignore'
    });
    subprocess.unref();
}
function öffneVSCode(filePath) {
    öffneProgramm('/usr/bin/code', filePath);
}
var programm = new commander_1.Command();
programm.description("Repository-Pfad: " + helfer_1.repositoryPfad);
programm.name('lehramt-informatik.js');
programm.version('0.1.0');
programm.on('command:*', function () {
    console.error('Ungültiger Befehlt: %s\nBenutze das Argument --help, um eine Liste der verfügbaren Befehle anzuzeigen.', programm.args.join(' '));
    process.exit(1);
});
programm
    .command('erzeuge-aufgabe [titel]')
    .description('Erzeuge eine Aufgabe im aktuellen Arbeitsverzeichnis.')
    .alias('a')
    .action(function (titel, cmdObj) {
    var dateiName = 'Aufgabe_';
    if (titel) {
        var titelRein = titel.replace(/\s+/g, '-');
        dateiName = "" + dateiName + titelRein;
    }
    var pfad = path_1.default.join(process.cwd(), dateiName + ".tex");
    if (!fs_1.default.existsSync(pfad)) {
        erzeuge_aufgaben_vorlage_1.erzeugeAufgabenVorlage(pfad, {
            titel: titel
        });
    }
    öffneVSCode(pfad);
});
programm
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('e')
    .action(function (ref, arg1, arg2, arg3) {
    var pfad = erzeuge_examens_aufgabe_vorlage_1.erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3);
    öffneVSCode(pfad);
});
programm
    .command('oeffne-examen <referenz>')
    .description('Öffne eine Staatsexamen durch die Referenz, z. B. 66116:2020:09.')
    .alias('o')
    .action(function (ref, cmdObj) {
    var examen = sammlung_1.examenSammlung.gibDurchReferenz(ref);
    if (fs_1.default.existsSync(examen.pfad)) {
        öffneProgramm('/usr/bin/xdg-open', examen.pfad);
    }
    else {
        console.log("Path " + examen.pfad + " doesn\u2019t exist.");
    }
});
programm
    .command('generiere-readme')
    .description('Erzeuge die README-Datei.')
    .alias('r')
    .action(erzeuge_readme_1.erzeugeReadme);
programm
    .command('kompiliere-aufgaben')
    .description('Kompiliere alle TeX-Dateien der Aufgaben.')
    .alias('k')
    .action(function (cmdObj) {
    var e_1, _a;
    var staatsexamenPath = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen');
    var dateien = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    try {
        for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
            var pfad = dateien_1_1.value;
            pfad = path_1.default.join(staatsexamenPath, pfad);
            if (pfad.match(aufgabe_1.ExamensAufgabe.schwacherPfadRegExp)) {
                console.log(pfad);
                var ergebnis = child_process_1.default.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', pfad], {
                    encoding: 'utf-8'
                });
                if (ergebnis.status !== 0) {
                    console.log(ergebnis.stdout);
                    console.log(ergebnis.stderr);
                    öffneVSCode(pfad);
                    throw new Error("Die Datei \u201E" + pfad + "\u201C konnte nicht kompiliert werden.");
                }
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
});
programm
    .command('sql <tex-datei>')
    .description('Führe SQL-Code in einer TeX-Datei aus. Der Code muss in \\begin{minted}{sql}…\\end{minted} eingerahmt sein.')
    .alias('s')
    .action(fuehre_sql_aus_1.führeSqlAus);
programm
    .command('code [glob]')
    .alias('c')
    .description('Öffne die mit glob spezifizierten Dateien in Visual Studio Code')
    .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
    .action(function (globMuster, cmdObj) {
    var e_2, _a;
    function öffneMitAusgabe(pfad) {
        console.log(pfad);
        öffneVSCode(pfad);
    }
    if (typeof globMuster !== 'string') {
        globMuster = '**/*.tex';
    }
    var dateien = glob_1.default.sync(globMuster);
    try {
        for (var dateien_2 = __values(dateien), dateien_2_1 = dateien_2.next(); !dateien_2_1.done; dateien_2_1 = dateien_2.next()) {
            var dateiPfad = dateien_2_1.value;
            dateiPfad = path_1.default.resolve(dateiPfad);
            if (cmdObj.keinindex) {
                var aufgabe = new aufgabe_1.Aufgabe(dateiPfad);
                if (aufgabe.stichwörter.length == 0)
                    öffneMitAusgabe(dateiPfad);
            }
            else {
                öffneMitAusgabe(dateiPfad);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (dateien_2_1 && !dateien_2_1.done && (_a = dateien_2.return)) _a.call(dateien_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
});
programm.parse(process.argv);
