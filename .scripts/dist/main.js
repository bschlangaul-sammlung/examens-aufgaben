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
var oeffne_durch_stichwort_1 = require("./aktionen/oeffne-durch-stichwort");
var erzeuge_examens_uebersicht_1 = require("./aktionen/erzeuge-examens-uebersicht");
var konvertiere_flaci_to_tikz_1 = require("./aktionen/konvertiere-flaci-to-tikz");
var programm = new commander_1.Command();
programm.description("Repository-Pfad: " + helfer_1.repositoryPfad);
programm.name('lehramt-informatik.js');
programm.version('0.1.0');
programm.on('command:*', function () {
    console.error('Ungültiger Befehl: %s\nBenutze das Argument --help, um eine Liste der verfügbaren Befehle anzuzeigen.', programm.args.join(' '));
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
    .command('oeffne-stichwort <stichwort>')
    .description('Öffne Aufgaben anhand des Stichworts')
    .alias('s')
    .action(function (stichwort, cmdObj) {
    oeffne_durch_stichwort_1.öffneDurchStichwort(stichwort);
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
programm
    .command('enumerate-item <tex-datei>')
    .alias('ei')
    .description('a) b) ... i) iii) durch \\item ersetzen.')
    .action(function (dateiPfad) {
    var inhalt = helfer_1.leseDatei(dateiPfad);
    inhalt = inhalt.replace(/\n(\(?[abcdefghijv]+\)\s*)/g, '\n%%\n% $1\n%%\n\n\\item ');
    helfer_1.schreibeDatei(dateiPfad, inhalt);
});
programm
    .command('examen-sammlung')
    .alias('es')
    .description('PDFs in denen mehrere PDFs zusammengefügt sind.')
    .action(function () {
    erzeuge_examens_uebersicht_1.generiereExamenSammlungPdf();
});
programm
    .command('examen-code-verschieben')
    .alias('ec')
    .description('Den Examen-Code im Java-Repository verschieben')
    .action(function (cmdObj) {
    var e_3, _a;
    var dateien = glob_1.default.sync('**/');
    try {
        for (var dateien_3 = __values(dateien), dateien_3_1 = dateien_3.next(); !dateien_3_1.done; dateien_3_1 = dateien_3.next()) {
            var pfad = dateien_3_1.value;
            if (pfad.match(/examen_\d{5}_\d{4}_\d{2}\/$/) &&
                !pfad.match(/docs/) &&
                !pfad.match(/target/)) {
                console.log(pfad);
                var match = pfad.match(/examen_(?<nummer>\d{5})_(?<jahr>\d{4})_(?<monat>\d{2})\/$/);
                if (match && match.groups) {
                    var monat = (match === null || match === void 0 ? void 0 : match.groups.monat) === '03' ? 'fruehjahr' : 'herbst';
                    var neuerPfad = "src/main/java/org/bschlangaul/examen/examen_" + (match === null || match === void 0 ? void 0 : match.groups.nummer) + "/jahr_" + (match === null || match === void 0 ? void 0 : match.groups.jahr) + "/" + monat;
                    console.log(neuerPfad);
                    try {
                        fs_1.default.mkdirSync(neuerPfad, { recursive: true });
                        fs_1.default.renameSync(pfad, neuerPfad);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (dateien_3_1 && !dateien_3_1.done && (_a = dateien_3.return)) _a.call(dateien_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
});
programm
    .command('flaci-to-tikz <jsonDatei>')
    .alias('flaci')
    .description('Konvertieren flaci.com Automaten to TikZ-Automaten')
    .action(konvertiere_flaci_to_tikz_1.konvertiereFlaciToTikz);
programm
    .command('dtx')
    .description('*.sty zu einem dtx zusammenfügen')
    .action(function (cmdObj) {
    var e_4, _a;
    var texPfad = path_1.default.join(helfer_1.repositoryPfad, '.tex');
    var styPfad = path_1.default.join(texPfad, 'erweiterungen');
    var styS = glob_1.default.sync('**/*.sty', { cwd: styPfad });
    var dtxPfad = path_1.default.join(texPfad, 'dokumentation.dtx');
    var dtxInhalte = [];
    function leseSty(dateiName) {
        var inhalt = helfer_1.leseDatei(path_1.default.join(styPfad, dateiName));
        var prefix = '%    \\end{macrocode}\n' +
            '% \\subsection{' + dateiName + '}\n' +
            '%    \\begin{macrocode}\n';
        dtxInhalte.push(prefix + inhalt);
    }
    function kompiliereDtxDatei() {
        helfer_1.führeAus('lualatex dokumentation.dtx', texPfad);
        helfer_1.führeAus('makeindex -s gglo.ist -o dokumentation.gls dokumentation.glo', texPfad);
        helfer_1.führeAus('makeindex -s gind.ist -o dokumentation.ind dokumentation.idx', texPfad);
        helfer_1.führeAus('lualatex dokumentation.dtx', texPfad);
    }
    try {
        for (var styS_1 = __values(styS), styS_1_1 = styS_1.next(); !styS_1_1.done; styS_1_1 = styS_1.next()) {
            var sty = styS_1_1.value;
            leseSty(sty);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (styS_1_1 && !styS_1_1.done && (_a = styS_1.return)) _a.call(styS_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    var dtxVorlage = helfer_1.leseDatei(path_1.default.join(texPfad, 'dokumentation_vorlage.dtx'));
    helfer_1.schreibeDatei(dtxPfad, dtxVorlage.replace('{{ einbinden }}', dtxInhalte.join('\n')));
    kompiliereDtxDatei();
    helfer_1.öffneProgramm('/usr/bin/xdg-open', path_1.default.join(texPfad, 'dokumentation.pdf'));
});
programm.parse(process.argv);
