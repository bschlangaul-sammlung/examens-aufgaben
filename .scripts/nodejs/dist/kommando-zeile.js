#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const fs_1 = __importDefault(require("fs"));
const glob_1 = __importDefault(require("glob"));
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
const aufgabe_1 = require("./aufgabe");
const helfer_1 = require("./helfer");
const aktionen_1 = __importDefault(require("./aktionen"));
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
    .action(aktionen_1.default.erzeugeAufgabenVorlage);
programm
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('e')
    .action(aktionen_1.default.erzeugeExamensAufgabeVorlage);
programm
    .command('oeffne <referenz...>')
    .description('Öffne eine Staatsexamen oder andere Materialien durch die Referenz, z. B. 66116:2020:09.')
    .alias('o')
    .action(aktionen_1.default.öffne);
programm
    .command('oeffne-stichwort <stichwort>')
    .description('Öffne Aufgaben anhand des Stichworts')
    .alias('s')
    .action(aktionen_1.default.öffneDurchStichwort);
programm
    .command('generiere-readme')
    .description('Erzeuge die README-Datei.')
    .alias('r')
    .action(aktionen_1.default.erzeugeReadme);
programm
    .command('kompiliere-aufgaben')
    .description('Kompiliere alle TeX-Dateien der Aufgaben.')
    .alias('k')
    .action(aktionen_1.default.kompiliereTex);
programm
    .command('sql <tex-datei>')
    .description('Führe SQL-Code in einer TeX-Datei aus. Der Code muss in \\begin{minted}{sql}…\\end{minted} eingerahmt sein.')
    .alias('s')
    .option('-a, --anfrage <nummer>', 'Führe nur die Anfrage mit der gegebenen Nummer aus.')
    .option('-n, --nicht-loeschen', 'Die Datenbank und die temporären SQL-Dateien am Ende der Ausführung nicht löschen.')
    .action(aktionen_1.default.führeSqlAus);
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
    .action(aktionen_1.default.erzeugeExamenScansSammlung);
programm
    .command('tex-examen')
    .alias('te')
    .description('Erzeuge pro Examen eine TeX-Datei.' +
    'Das Examen muss mindestens eine gelöste Aufgabe haben')
    .action(aktionen_1.default.erzeugeExamensLösungen);
programm
    .command('flaci-to-tikz <jsonDatei>')
    .alias('flaci')
    .description('Konvertieren flaci.com Automaten to TikZ-Automaten')
    .action(aktionen_1.default.konvertiereFlaciZuTikz);
programm
    .command('dtx')
    .description('*.sty zu einem dtx zusammenfügen')
    .action(aktionen_1.default.erzeugeTexDokumentation);
programm
    .command('aufgaben-titel <texDatei>')
    .alias('at')
    .description('Erzeuge den Titel in einer TeX-Datei')
    .action(aktionen_1.default.erzeugeAufgabenMetadaten);
programm
    .command('validiere')
    .alias('v')
    .description('Überprüfe / validiere ob es die Stichwörter in \\index{} gibt. ' +
    'Ob es die Werte für die Metadaten-Schlüssel BearbeitungsStand und ' +
    'Korrektheit in den Metadaten gibt')
    .action(aktionen_1.default.validiere);
exports.default = programm;
