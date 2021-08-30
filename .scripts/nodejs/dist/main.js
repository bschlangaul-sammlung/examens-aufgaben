#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
const glob_1 = __importDefault(require("glob"));
const commander_1 = require("commander");
const aufgabe_1 = require("./aufgabe");
const helfer_1 = require("./helfer");
const erzeuge_aufgaben_titel_1 = require("./aktionen/erzeuge-aufgaben-titel");
const erzeuge_aufgaben_vorlage_1 = require("./aktionen/erzeuge-aufgaben-vorlage");
const erzeuge_examens_aufgabe_vorlage_1 = require("./aktionen/erzeuge-examens-aufgabe-vorlage");
const erzeuge_readme_1 = require("./aktionen/erzeuge-readme");
const fuehre_sql_aus_1 = require("./aktionen/fuehre-sql-aus");
const erzeuge_examens_uebersicht_1 = require("./aktionen/erzeuge-examens-uebersicht");
const konvertiere_flaci_zu_tikz_1 = require("./aktionen/konvertiere-flaci-zu-tikz");
const oeffne_1 = require("./aktionen/oeffne");
const oeffne_durch_stichwort_1 = require("./aktionen/oeffne-durch-stichwort");
const programm = new commander_1.Command();
programm.description(`Repository-Pfad: ${helfer_1.repositoryPfad}`);
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
    let dateiName = 'Aufgabe_';
    if (titel != null) {
        const titelRein = titel.replace(/\s+/g, '-');
        dateiName = `${dateiName}${titelRein}`;
    }
    const pfad = path_1.default.join(process.cwd(), `${dateiName}.tex`);
    if (!fs_1.default.existsSync(pfad)) {
        erzeuge_aufgaben_vorlage_1.erzeugeAufgabenVorlage(pfad, {
            titel
        });
    }
    helfer_1.öffneVSCode(pfad);
});
programm
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('e')
    .action(function (ref, arg1, arg2, arg3) {
    const pfad = erzeuge_examens_aufgabe_vorlage_1.erzeugeExamensAufgabeVorlage(ref, arg1, arg2, arg3);
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
    const staatsexamenPath = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen');
    const dateien = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    for (let pfad of dateien) {
        pfad = path_1.default.join(staatsexamenPath, pfad);
        if (pfad.match(aufgabe_1.ExamensAufgabe.schwacherPfadRegExp) != null) {
            console.log(pfad);
            const ergebnis = child_process_1.default.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', pfad], {
                encoding: 'utf-8'
            });
            if (ergebnis.status !== 0) {
                console.log(ergebnis.stdout);
                console.log(ergebnis.stderr);
                helfer_1.öffneVSCode(pfad);
                helfer_1.zeigeFehler(`Die Datei „${pfad}“ konnte nicht kompiliert werden.`);
            }
        }
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
    function öffneMitAusgabe(pfad) {
        console.log(pfad);
        helfer_1.öffneVSCode(pfad);
    }
    if (typeof globMuster !== 'string') {
        globMuster = '**/*.tex';
    }
    const dateien = glob_1.default.sync(globMuster);
    for (let dateiPfad of dateien) {
        dateiPfad = path_1.default.resolve(dateiPfad);
        if (cmdObj.keinIndex != null || cmdObj.keinTitel != null) {
            const aufgabe = new aufgabe_1.Aufgabe(dateiPfad);
            if ((cmdObj.keinIndex != null && aufgabe.stichwörter.length === 0) ||
                (cmdObj.keinTitel != null && aufgabe.titel == null)) {
                öffneMitAusgabe(dateiPfad);
            }
        }
        else {
            öffneMitAusgabe(dateiPfad);
        }
    }
});
programm
    .command('seiten-loeschen <pdf-datei>')
    .alias('l')
    .description('Gerade Seiten in einer PDF-Datei löschen. Die erste, dritte Seite etc. bleibt bestehen.')
    .action(function (datei) {
    child_process_1.default.spawnSync('pdftk', [
        `A=${datei}`,
        'cat',
        'Aodd',
        'output',
        `${datei}_ungerade.pdf`
    ]);
});
programm
    .command('txt-exportieren <pdf-datei>')
    .alias('t')
    .description('TXT aus einer PDF-Datei exportieren.')
    .action(function (datei) {
    if (datei.includes('.pdf')) {
        console.log(datei);
        const txt = datei.replace('.pdf', '.txt');
        if (!fs_1.default.existsSync(txt)) {
            child_process_1.default.spawnSync('pdftotext', [datei]);
        }
    }
});
programm
    .command('ocr <pdf-datei>')
    .description('Texterkennung in einer PDF-Datei durchführen.')
    .action(function (datei) {
    const process = child_process_1.default.spawnSync('ocrmypdf', [
        '--deskew',
        '--rotate-pages',
        '-l',
        'deu+eng',
        '--sidecar',
        `${datei}.txt`,
        datei,
        datei
    ], { encoding: 'utf-8' });
    if (process.status !== 0) {
        console.log(process.stderr);
    }
});
programm
    .command('rotiere-pdf <pdf-datei>')
    .alias('r')
    .description('PDF-Datei rotieren.')
    .action(function (datei) {
    const process = child_process_1.default.spawnSync('pdftk', [
        datei,
        'cat',
        '1-endeast',
        'output',
        '--sidecar',
        `${datei}_rotated.pdf`
    ]);
    if (process.status !== 0) {
        console.log(process.stderr);
    }
});
programm
    .command('enumerate-item <tex-datei>')
    .alias('ei')
    .description('a) b) ... i) iii) durch \\item ersetzen.')
    .action(function (dateiPfad) {
    let inhalt = helfer_1.leseDatei(dateiPfad);
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
    const dateien = glob_1.default.sync('**/');
    for (const pfad of dateien) {
        if (pfad.match(/examen_\d{5}_\d{4}_\d{2}\/$/) != null &&
            pfad.match(/docs/) == null &&
            pfad.match(/target/) == null) {
            console.log(pfad);
            const match = pfad.match(/examen_(?<nummer>\d{5})_(?<jahr>\d{4})_(?<monat>\d{2})\/$/);
            if ((match === null || match === void 0 ? void 0 : match.groups) != null) {
                const monat = (match === null || match === void 0 ? void 0 : match.groups.monat) === '03' ? 'fruehjahr' : 'herbst';
                const neuerPfad = `src/main/java/org/bschlangaul/examen/examen_${match === null || match === void 0 ? void 0 : match.groups.nummer}/jahr_${match === null || match === void 0 ? void 0 : match.groups.jahr}/${monat}`;
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
});
programm
    .command('flaci-to-tikz <jsonDatei>')
    .alias('flaci')
    .description('Konvertieren flaci.com Automaten to TikZ-Automaten')
    .action(konvertiere_flaci_zu_tikz_1.konvertiereFlaciZuTikz);
programm
    .command('dtx')
    .description('*.sty zu einem dtx zusammenfügen')
    .action(function (cmdObj) {
    const texPfad = path_1.default.join(helfer_1.repositoryPfad, '.tex');
    const styPfad = path_1.default.join(texPfad, 'pakete');
    const styS = glob_1.default.sync('**/*.sty', { cwd: styPfad });
    const dtxPfad = path_1.default.join(texPfad, 'dokumentation.dtx');
    const dtxInhalte = [];
    function leseSty(dateiName) {
        const inhalt = helfer_1.leseDatei(path_1.default.join(styPfad, dateiName));
        const prefix = '%    \\end{macrocode}\n' +
            '% \\subsection{' +
            dateiName +
            '}\n' +
            '%    \\begin{macrocode}\n';
        dtxInhalte.push(prefix + inhalt);
    }
    function kompiliereDtxDatei() {
        helfer_1.führeAus('lualatex --shell-escape dokumentation.dtx', texPfad);
        helfer_1.führeAus('makeindex -s gglo.ist -o dokumentation.gls dokumentation.glo', texPfad);
        helfer_1.führeAus('makeindex -s gind.ist -o dokumentation.ind dokumentation.idx', texPfad);
        helfer_1.führeAus('lualatex --shell-escape dokumentation.dtx', texPfad);
    }
    for (const sty of styS) {
        leseSty(sty);
    }
    const dtxVorlage = helfer_1.leseDatei(path_1.default.join(texPfad, 'dokumentation_vorlage.dtx'));
    helfer_1.schreibeDatei(dtxPfad, dtxVorlage.replace('{{ einbinden }}', dtxInhalte.join('\n')));
    kompiliereDtxDatei();
    helfer_1.öffneProgramm('/usr/bin/xdg-open', path_1.default.join(texPfad, 'dokumentation.pdf'));
});
programm
    .command('aufgaben-titel <texDatei>')
    .alias('at')
    .description('Erzeuge den Titlel in einer TeX-Datei')
    .action(erzeuge_aufgaben_titel_1.erzeugeAufgabenTitel);
programm.parse(process.argv);
