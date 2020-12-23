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
var erzeuge_aufgaben_vorlage_1 = require("./aktionen/erzeuge-aufgaben-vorlage");
var erzeuge_readme_1 = require("./aktionen/erzeuge-readme");
var erzeuge_examens_aufgabe_vorlage_1 = require("./aktionen/erzeuge-examens-aufgabe-vorlage");
var fuehre_sql_aus_1 = require("./aktionen/fuehre-sql-aus");
var oeffne_1 = require("./aktionen/oeffne");
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
    helfer_1.öffneVSCode(pfad);
});
programm
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('e')
    .action(function (ref, arg1, arg2, arg3) {
    var pfad = erzeuge_examens_aufgabe_vorlage_1.erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3);
    helfer_1.öffneVSCode(pfad);
});
programm
    .command('oeffne <referenz...>')
    .description('Öffne eine Staatsexamen oder andere Materialien durch die Referenz, z. B. 66116:2020:09.')
    .alias('o')
    .action(function (referenz, cmdObj) {
    if (referenz.length === 1) {
        oeffne_1.öffne(referenz[0]);
    }
    else {
        oeffne_1.öffne(referenz.join(':'));
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
                    helfer_1.öffneVSCode(pfad);
                    helfer_1.zeigeFehler("Die Datei \u201E" + pfad + "\u201C konnte nicht kompiliert werden.");
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
    .option('-a, --anfrage <nummer>', 'Führe nur die Anfrage mit der gegebenen Nummer aus.')
    .option('-n, --nicht-loeschen', 'Die Datenbank und die temporären SQL-Dateien am Ende der Ausführung nicht löschen.')
    .action(fuehre_sql_aus_1.führeSqlAus);
programm
    .command('code [glob]')
    .alias('c')
    .description('Öffne die mit glob spezifizierten Dateien in Visual Studio Code')
    .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
    .option('-t, --kein-titel', 'Öffne nur die Dateien, die keinen Titel haben. \\liAufgabenTitel{}.')
    .action(function (globMuster, cmdObj) {
    var e_2, _a;
    function öffneMitAusgabe(pfad) {
        console.log(pfad);
        helfer_1.öffneVSCode(pfad);
    }
    if (typeof globMuster !== 'string') {
        globMuster = '**/*.tex';
    }
    var dateien = glob_1.default.sync(globMuster);
    try {
        for (var dateien_2 = __values(dateien), dateien_2_1 = dateien_2.next(); !dateien_2_1.done; dateien_2_1 = dateien_2.next()) {
            var dateiPfad = dateien_2_1.value;
            dateiPfad = path_1.default.resolve(dateiPfad);
            if (cmdObj.keinIndex || cmdObj.keinTitel) {
                var aufgabe = new aufgabe_1.Aufgabe(dateiPfad);
                if ((cmdObj.keinIndex && aufgabe.stichwörter.length == 0) || (cmdObj.keinTitel && !aufgabe.titel)) {
                    öffneMitAusgabe(dateiPfad);
                }
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
programm
    .command('seiten-loeschen <pdf-datei>')
    .alias('l')
    .description('Gerade Seiten in einer PDF-Datei löschen. Die erste, dritte Seite etc. bleibt bestehen.')
    .action(function (datei) {
    child_process_1.default.spawnSync('pdftk', [
        "A=" + datei,
        'cat',
        'Aodd', 'output',
        datei + "_ungerade.pdf"
    ]);
});
programm
    .command('txt-exportieren <pdf-datei>')
    .alias('t')
    .description('TXT aus einer PDF-Datei exportieren.')
    .action(function (datei) {
    if (datei.includes('.pdf')) {
        console.log(datei);
        var txt = datei.replace('.pdf', '.txt');
        if (!fs_1.default.existsSync(txt)) {
            child_process_1.default.spawnSync('pdftotext', [datei]);
        }
    }
});
programm
    .command('ocr <pdf-datei>')
    .alias('o')
    .description('Texterkennung in einer PDF-Datei durchführen.')
    .action(function (datei) {
    child_process_1.default.spawnSync('ocrmypdf', [
        '--deskew',
        '--rotate-pages',
        '-l', 'deu+eng',
        '--sidecar',
        "" + datei,
        datei,
        datei
    ]);
});
programm
    .command('rotiere-pdf <pdf-datei>')
    .alias('r')
    .description('PDF-Datei rotieren.')
    .action(function (datei) {
    child_process_1.default.spawnSync('pdftk', [
        datei,
        'cat',
        '1-endeast', 'output',
        '--sidecar',
        datei + "_rotated.pdf"
    ]);
});
programm.parse(process.argv);
