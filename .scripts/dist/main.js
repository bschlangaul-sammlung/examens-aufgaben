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
function generateExamBasePath(number, year, month) {
    return path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen', number, year, month);
}
function generateQuestionPath(arg1, arg2, arg3) {
    if (arg1 && arg2 && arg3) {
        return path_1.default.join("Thema-" + arg1, "Teilaufgabe-" + arg2, "Aufgabe-" + arg3 + ".tex");
    }
    else if (arg1 && arg2 && !arg3) {
        return path_1.default.join("Thema-" + arg1, "Aufgabe-" + arg2 + ".tex");
    }
    else {
        return "Aufgabe-" + arg1 + ".tex";
    }
}
function generateTeXMacro(exam, arg1, arg2, arg3) {
    var questionMarkup = '';
    var macroSuffix = '';
    var examMarkup = exam.number + " / " + exam.year + " / " + exam.month + " :";
    if (arg1 && arg2 && arg3) {
        questionMarkup = "Thema " + arg1 + " Teilaufgabe " + arg2 + " Aufgabe " + arg3;
        macroSuffix = 'TTA';
    }
    else if (arg1 && arg2 && !arg3) {
        questionMarkup = "Thema " + arg1 + " Aufgabe " + arg2;
        macroSuffix = 'TA';
    }
    else {
        questionMarkup = "Aufgabe " + arg1;
        macroSuffix = 'A';
    }
    return "\n\\ExamensAufgabe" + macroSuffix + " " + examMarkup + " " + questionMarkup;
}
function splitExamRef(ref) {
    var exam = ref.split(':');
    if (exam.length !== 3) {
        console.log('Exam ref has to be in this format: 66116:2020:09');
        process.exit(1);
    }
    return {
        number: exam[0],
        year: exam[1],
        month: exam[2]
    };
}
var program = new commander_1.Command();
program.description("Repository path: " + helfer_1.repositoryPfad);
program.name('lehramt-informatik.js');
program.version('0.1.0');
program.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
});
/*******************************************************************************
 * create-question
 ******************************************************************************/
function checkNumber(number) {
    if (typeof number === 'string') {
        number = parseInt(number);
    }
    if (number)
        return number;
}
program
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
program
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('e')
    .action(function (ref, arg1, arg2, arg3, cmdObj) {
    var num1 = checkNumber(arg1);
    var num2 = checkNumber(arg2);
    var num3 = checkNumber(arg3);
    if (!num1) {
        throw Error("Undefined " + num1);
    }
    var exam = splitExamRef(ref);
    var questionPath = path_1.default.join(generateExamBasePath(exam.number, exam.year, exam.month), generateQuestionPath(num1, num2, num3));
    erzeuge_aufgaben_vorlage_1.erzeugeAufgabenVorlage(questionPath, {
        zitatReferenz: ref
    });
    öffneVSCode(questionPath);
    console.log(generateTeXMacro(exam, arg1, arg2, arg3));
});
/*******************************************************************************
 * open-exam
 ******************************************************************************/
program
    .command('oeffne-examen <referenz>')
    .description('Öffne eine Staatsexamen mit der Referenz, z. B. 66116:2020:09')
    .alias('o')
    .action(function (ref, cmdObj) {
    var exam = splitExamRef(ref);
    var examPath = path_1.default.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf');
    if (fs_1.default.existsSync(examPath)) {
        öffneProgramm('/usr/bin/xdg-open', examPath);
    }
    else {
        console.log("Path " + examPath + " doesn\u2019t exist.");
    }
});
/*******************************************************************************
 * generate-readme
 ******************************************************************************/
program
    .command('generiere-readme')
    .description('Generiere die README-Datei')
    .alias('r')
    .action(erzeuge_readme_1.erzeugeReadme);
/*******************************************************************************
 * compile-questions
 ******************************************************************************/
program
    .command('kompiliere-aufgaben')
    .description('Kompiliere alle TeX-Dateien der Aufgaben.')
    .alias('k')
    .action(function (cmdObj) {
    var e_1, _a;
    var staatsexamenPath = path_1.default.join(helfer_1.repositoryPfad, 'Staatsexamen');
    var files = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    try {
        for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
            var filePath = files_1_1.value;
            filePath = path_1.default.join(staatsexamenPath, filePath);
            if (filePath.match(aufgabe_1.ExamensAufgabe.schwacherPfadRegExp)) {
                console.log(filePath);
                var result = child_process_1.default.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', filePath], {
                    encoding: 'utf-8'
                });
                if (result.status !== 0) {
                    console.log(result.stdout);
                    console.log(result.stderr);
                    öffneVSCode(filePath);
                    throw new Error("Error compiling " + filePath);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
/*******************************************************************************
 * vscode
 ******************************************************************************/
program
    .command('code [glob]')
    .alias('c')
    .description('Öffne die mit glob spezifizierten Dateien in Visual Studio Code')
    .option('-n, --kein-index', 'Öffne nur die Dateien, die keinen Index haben.')
    .action(function (globPattern, cmdObj) {
    var e_2, _a;
    function öffneMitAusgabe(pfad) {
        console.log(pfad);
        öffneVSCode(pfad);
    }
    if (typeof globPattern !== 'string') {
        globPattern = '**/*.tex';
    }
    var dateien = glob_1.default.sync(globPattern);
    try {
        for (var dateien_1 = __values(dateien), dateien_1_1 = dateien_1.next(); !dateien_1_1.done; dateien_1_1 = dateien_1.next()) {
            var dateiPfad = dateien_1_1.value;
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
            if (dateien_1_1 && !dateien_1_1.done && (_a = dateien_1.return)) _a.call(dateien_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
});
program.parse(process.argv);
