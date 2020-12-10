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
var stichwort_verzeichnis_1 = require("./stichwort-verzeichnis");
var aufgabe_1 = require("./aufgabe");
var staatsexamen_1 = require("./staatsexamen");
var helfer_1 = require("./helfer");
var aufgaben_vorlage_1 = require("./aufgaben-vorlage");
/*******************************************************************************
 * low level functions
 ******************************************************************************/
function openWithExecutable(executable, filePath) {
    var subprocess = child_process_1.default.spawn(executable, [filePath], {
        detached: true,
        stdio: 'ignore'
    });
    subprocess.unref();
}
function openCode(filePath) {
    openWithExecutable('/usr/bin/code', filePath);
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
        aufgaben_vorlage_1.erzeugeAufgabenVorlage(pfad, {
            titel: titel
        });
    }
    openCode(pfad);
});
program
    .command('erzeuge-examens-aufgabe <referenz> <thema> [teilaufgabe] [aufgabe]')
    .description('Erzeuge eine Examensaufgabe im Verzeichnis „Staatsexamen“.')
    .alias('c')
    .action(function (ref, arg1, arg2, arg3, cmdObj) {
    var num1 = checkNumber(arg1);
    var num2 = checkNumber(arg2);
    var num3 = checkNumber(arg3);
    if (!num1) {
        throw Error("Undefined " + num1);
    }
    var exam = splitExamRef(ref);
    var questionPath = path_1.default.join(generateExamBasePath(exam.number, exam.year, exam.month), generateQuestionPath(num1, num2, num3));
    aufgaben_vorlage_1.erzeugeAufgabenVorlage(questionPath, {
        zitatReferenz: ref
    });
    openCode(questionPath);
    console.log(generateTeXMacro(exam, arg1, arg2, arg3));
});
/*******************************************************************************
 * open-exam
 ******************************************************************************/
program
    .command('open-exam <ref>')
    .description('Open a exam scan: 66116:2020:09')
    .alias('o')
    .action(function (ref, cmdObj) {
    var exam = splitExamRef(ref);
    var examPath = path_1.default.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf');
    if (fs_1.default.existsSync(examPath)) {
        openWithExecutable('/usr/bin/xdg-open', examPath);
    }
    else {
        console.log("Path " + examPath + " doesn\u2019t exist.");
    }
});
/*******************************************************************************
 * generate-readme
 ******************************************************************************/
function generiereMarkdownAufgabenListe(aufgabenListe) {
    var e_1, _a;
    var item = [];
    try {
        for (var aufgabenListe_1 = __values(aufgabenListe), aufgabenListe_1_1 = aufgabenListe_1.next(); !aufgabenListe_1_1.done; aufgabenListe_1_1 = aufgabenListe_1.next()) {
            var aufgabe = aufgabenListe_1_1.value;
            item.push('- ' + aufgabe.markdownLink);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (aufgabenListe_1_1 && !aufgabenListe_1_1.done && (_a = aufgabenListe_1.return)) _a.call(aufgabenListe_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return item.join('\n');
}
function ersetzeStichwörterInReadme(inhalt) {
    return inhalt.replace(/\{\{ stichwort "([\w\d- ]*)" \}\}/g, function (wholeMatch, stichwort) {
        return generiereMarkdownAufgabenListe(stichwort_verzeichnis_1.stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort));
    });
}
program
    .command('generate-readme')
    .description('Generate the readme file')
    .alias('r')
    .action(function (cmdObj) {
    var readmeContent = helfer_1.leseRepoDatei('README_template.md');
    readmeContent = ersetzeStichwörterInReadme(readmeContent);
    var tagsContent = helfer_1.leseRepoDatei('Stichwortverzeichnis.yml');
    readmeContent = readmeContent.replace('{{ stichwortverzeichnis }}', tagsContent);
    readmeContent = readmeContent.replace('{{ staatsexamen }}', staatsexamen_1.generiereExamensÜbersicht());
    // console.log(readmeContent)
    fs_1.default.writeFileSync(path_1.default.join(helfer_1.repositoryPfad, 'README.md'), readmeContent);
});
/*******************************************************************************
 * compile-questions
 ******************************************************************************/
program
    .command('compile-questions')
    .description('Compile all questions')
    .alias('q')
    .action(function (cmdObj) {
    var e_2, _a;
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
                    openCode(filePath);
                    throw new Error("Error compiling " + filePath);
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
});
/*******************************************************************************
 * vscode
 ******************************************************************************/
program
    .command('vscode [glob]')
    .alias('vsc')
    .description('Open in Visual Studio Code')
    .option('-n, --notag', 'Open only questions without an tag macro in it.')
    .action(function (globPattern, cmdObj) {
    var e_3, _a;
    function openWithLogging(filePath) {
        console.log(filePath);
        openCode(filePath);
    }
    if (typeof globPattern !== 'string') {
        globPattern = '**/*.tex';
    }
    var files = glob_1.default.sync(globPattern);
    try {
        for (var files_2 = __values(files), files_2_1 = files_2.next(); !files_2_1.done; files_2_1 = files_2.next()) {
            var filePath = files_2_1.value;
            filePath = path_1.default.resolve(filePath);
            if (cmdObj.notag) {
                var aufgabe = new aufgabe_1.Aufgabe(filePath);
                if (aufgabe.stichwörter.length == 0)
                    openWithLogging(filePath);
            }
            else {
                openWithLogging(filePath);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (files_2_1 && !files_2_1.done && (_a = files_2.return)) _a.call(files_2);
        }
        finally { if (e_3) throw e_3.error; }
    }
});
program.parse(process.argv);
