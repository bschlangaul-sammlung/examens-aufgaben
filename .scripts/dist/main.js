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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leseRepoDatei = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var child_process_1 = __importDefault(require("child_process"));
var glob_1 = __importDefault(require("glob"));
var js_yaml_1 = __importDefault(require("js-yaml"));
var commander_1 = require("commander");
var stichwort_verzeichnis_1 = require("./stichwort-verzeichnis");
var aufgabe_1 = require("./aufgabe");
var configPath = path_1.default.join(path_1.default.sep, 'etc', 'lehramt-informatik.config.tex');
if (!fs_1.default.existsSync(configPath)) {
    throw new Error("No configuration file found: " + configPath);
}
function parseConfigurationFile(configPath) {
    var configContent = readFile(configPath);
    var match = configContent.match(/\\LehramtInformatikRepository\{(.*)\}/);
    if (!match)
        throw new Error("Konfigurations-Datei nicht gefunden: " + configPath);
    return match[1];
}
var repositoryPfad = parseConfigurationFile(configPath);
var examTitles = {
    46110: 'Grundlagen der Informatik (nicht vertieft)',
    46111: 'Programmentwicklung / Systemprogrammierung / Datenbanksysteme (nicht vertieft)',
    46112: 'Grundlagen der Informatik (nicht vertieft)',
    46113: 'Theoretische Informatik (nicht vertieft)',
    46114: 'Algorithmen / Datenstrukturen / Programmiermethoden (nicht vertieft)',
    46115: 'Theoretische Informatik / Algorithmen / Datenstrukturen (nicht vertieft)',
    46116: 'Softwaretechnologie / Datenbanksysteme (nicht vertieft)',
    46118: 'Fachdidaktik (Mittelschulen)',
    46119: 'Fachdidaktik (Realschulen)',
    46121: 'Fachdidaktik (berufliche Schulen)',
    66110: 'Automatentheorie, Algorithmische Sprache (vertieft)',
    66111: 'Betriebssysteme / Datenbanksysteme / Rechnerarchitektur (vertieft)',
    66112: 'Automatentheorie / Komplexität / Algorithmen (vertieft)',
    66113: 'Rechnerarchitektur / Datenbanken / Betriebssysteme (vertieft)',
    66114: 'Datenbank- und Betriebssysteme (vertieft)',
    66115: 'Theoretische Informatik / Algorithmen (vertieft)',
    66116: 'Datenbanksysteme / Softwaretechnologie (vertieft)',
    66118: 'Fachdidaktik (Gymnasium)'
};
var githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main';
function parseTags() {
    try {
        return js_yaml_1.default.safeLoad(leseRepoDatei('Stichwortverzeichnis.yml'));
    }
    catch (e) {
        console.log(e);
        return {};
    }
}
var tagsTree = parseTags();
function flattenTagsTree(tree, flat) {
    var e_1, _a;
    if (!flat)
        flat = new Set();
    if (typeof tree === 'string') {
        if (flat.has(tree)) {
            throw Error("Duplicate tag: " + tree);
        }
        flat.add(tree);
    }
    else if (Array.isArray(tree)) {
        try {
            for (var tree_1 = __values(tree), tree_1_1 = tree_1.next(); !tree_1_1.done; tree_1_1 = tree_1.next()) {
                var t = tree_1_1.value;
                flattenTagsTree(t, flat);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tree_1_1 && !tree_1_1.done && (_a = tree_1.return)) _a.call(tree_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        for (var t in tree) {
            flattenTagsTree(t, flat);
            flattenTagsTree(tree[t], flat);
        }
    }
    return flat;
}
var tagsFlat = flattenTagsTree(tagsTree);
/*******************************************************************************
 * low level functions
 ******************************************************************************/
function checkTag(tag) {
    if (!tagsFlat.has(tag)) {
        throw Error("Unkown tag: " + tag);
    }
}
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
function readFile(filePath) {
    return fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
}
function leseRepoDatei() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (arguments[0].indexOf(repositoryPfad) > -1)
        return readFile(path_1.default.join.apply(path_1.default, __spread(args)));
    return readFile(path_1.default.join.apply(path_1.default, __spread([repositoryPfad], args)));
}
exports.leseRepoDatei = leseRepoDatei;
function generateExamBasePath(number, year, month) {
    return path_1.default.join(__dirname, '..', 'Staatsexamen', number, year, month);
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
function generiereMarkdownLink(text, pfad, einstellung) {
    var linkePdf = true;
    var alsMarkdownLink = true;
    if (einstellung) {
        if (einstellung.linkePdf !== undefined)
            linkePdf = einstellung.linkePdf;
        if (einstellung.alsMarkdownLink !== undefined)
            alsMarkdownLink = einstellung.alsMarkdownLink;
    }
    pfad = pfad.replace(repositoryPfad, '');
    pfad = pfad.replace(/^\//, '');
    if (linkePdf)
        pfad = pfad.replace(/\.[\w]+$/, '.pdf');
    if (alsMarkdownLink) {
        return "[" + text + "](" + githubRawUrl + "/" + pfad + ")";
    }
    return text;
}
var program = new commander_1.Command();
program.description("Repository path: " + repositoryPfad);
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
    .command('create-question <ref> <part-no> [sub-question-no] [question-no]')
    .description('Create a exam question template in the right directory folder: 66116:2020:09')
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
    var template = '\\documentclass{lehramt-informatik-aufgabe}\n' +
        '\\liLadePakete{}\n' +
        '\\begin{document}\n' +
        '\n' +
        '\\end{document}\n';
    fs_1.default.mkdirSync(path_1.default.dirname(questionPath), { recursive: true });
    if (!fs_1.default.existsSync(questionPath)) {
        fs_1.default.writeFileSync(questionPath, template, { encoding: 'utf-8' });
    }
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
function cleanTag(tag) {
    return tag.replace(/\s+/g, ' ');
}
function assembleMacroRegExp(macroName) {
    return new RegExp('\\' + macroName + '\{([^\}]*)\}', 'g');
}
/**
 * Collect the tags of a content string.
 *
 * @param {string} content - The content of a TeX file.
 */
function collectTagsOfContent(content) {
    var re = assembleMacroRegExp('index');
    var match;
    var tags = new Set();
    do {
        match = re.exec(content);
        if (match) {
            var tag = cleanTag(match[1]);
            try {
                checkTag(tag);
            }
            catch (error) {
                throw new Error("Unknown tag " + tag + " in file " + content);
            }
            tags.add(tag);
        }
    } while (match);
    return Array.from(tags);
}
/**
 * Collect the tags of a TeX file.
 * @param {string} filePath
 */
function collectTagsOfFile(filePath) {
    return collectTagsOfContent(leseRepoDatei(filePath));
}
var questionPathRegExp = /(Thema-\d\/)?(Teilaufgabe-\d\/)?Aufgabe-\d\.tex$/;
/**
 * ```js
 * [
 *   'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *   'Thema-1/Teilaufgabe-1/Aufgabe-4.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-1/Teilaufgabe-2/Aufgabe-4.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *   'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 * ]
 * ```
 *
 * ```js
 * {
 *   'Thema 1': {
 *     'Teilaufgabe 1': {
 *       'Aufgabe 3': 'Thema-1/Teilaufgabe-1/Aufgabe-3.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-1/Aufgabe-4.tex'
 *     },
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-1/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 4': 'Thema-1/Teilaufgabe-2/Aufgabe-4.tex'
 *     }
 *   },
 *   'Thema 2': {
 *     'Teilaufgabe 2': {
 *       'Aufgabe 2': 'Thema-2/Teilaufgabe-2/Aufgabe-2.tex',
 *       'Aufgabe 5': 'Thema-2/Teilaufgabe-2/Aufgabe-5.tex'
 *     }
 *   }
 * }
 * ```
 *
 * @param {string} relPath
 */
function parseQuestions(relPath) {
    var e_2, _a, e_3, _b;
    /**
     * Thema-1: Thema 1
     * Teilaufgabe-2: Teilaufgabe 2
     * Aufgabe-3.tex: Aufgabe 3
     */
    function makeSegmentReadable(segment) {
        return segment.replace('-', ' ').replace('.tex', '');
    }
    var files = glob_1.default.sync('**/*.tex', { cwd: relPath });
    var tree = {};
    try {
        for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
            var filePath = files_1_1.value;
            if (filePath.match(questionPathRegExp)) {
                var segments = filePath.split(path_1.default.sep);
                var subTree = tree;
                try {
                    for (var segments_1 = (e_3 = void 0, __values(segments)), segments_1_1 = segments_1.next(); !segments_1_1.done; segments_1_1 = segments_1.next()) {
                        var segment = segments_1_1.value;
                        var segmentReadable = makeSegmentReadable(segment);
                        if (!subTree[segmentReadable] && segment.indexOf('.tex') === -1) {
                            subTree[segmentReadable] = {};
                        }
                        else if (segment.indexOf('.tex') > -1) {
                            subTree[segmentReadable] = filePath;
                        }
                        if (segment.indexOf('.tex') === -1) {
                            subTree = subTree[segmentReadable];
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (segments_1_1 && !segments_1_1.done && (_b = segments_1.return)) _b.call(segments_1);
                    }
                    finally { if (e_3) throw e_3.error; }
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
    return tree;
}
function formatIndentation(level) {
    return '\n' + ' '.repeat(4 * level) + '- ';
}
/**
 * ```md
 * - 2015 Frühjahr: [Scan.pdf](...46116/2015/03/Scan.pdf) [OCR.txt](…46116/2015/03/OCR.txt)
 *     - Thema 1
 *         - Teilaufgabe 1
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-1/Aufgabe-3.pdf)
 *         - Teilaufgabe 2
 *             - [Aufgabe 1](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-1.pdf)
 *             - [Aufgabe 3](…46116/2015/03/Thema-1/Teilaufgabe-2/Aufgabe-3.pdf)
 *```
 *
 * @param {object} questionsTree
 * @param {string} examPath
 * @param {integer} level
 */
function formatQuestionsRecursive(questionsTree, examPath, level) {
    if (level === void 0) { level = 1; }
    var output = [];
    // title: Thema 1, Teilaufgabe 2, Aufgabe 3
    for (var title in questionsTree) {
        if (typeof questionsTree[title] === 'string') {
            var aufgabenPfad = path_1.default.join(examPath, questionsTree[title]);
            var aufgabe = new aufgabe_1.ExamensAufgabe(aufgabenPfad);
            output.push(formatIndentation(level) + aufgabe.gibTitelNurAufgabe(true));
        }
        else {
            output.push("" + formatIndentation(level) + title + " " + formatQuestionsRecursive(questionsTree[title], examPath, level + 1));
        }
    }
    return output.join(' ');
}
function formatQuestions(relPath) {
    return formatQuestionsRecursive(parseQuestions(relPath), relPath);
}
var OutputCollector = /** @class */ (function () {
    function OutputCollector(verbose) {
        if (verbose === void 0) { verbose = false; }
        this.store = [];
        this.verbose = verbose;
    }
    OutputCollector.prototype.add = function (output) {
        if (this.verbose)
            console.log(output);
        this.store.push(output);
    };
    OutputCollector.prototype.getString = function () {
        return this.store.join('\n');
    };
    return OutputCollector;
}());
function formatExamTitle(year, month) {
    var monthLong;
    if (month === '09') {
        monthLong = 'Herbst';
    }
    else {
        monthLong = 'Frühjahr';
    }
    return year + " " + monthLong;
}
function generiereMarkdownAufgabenListe(aufgabenListe) {
    var e_4, _a;
    var item = [];
    try {
        for (var aufgabenListe_1 = __values(aufgabenListe), aufgabenListe_1_1 = aufgabenListe_1.next(); !aufgabenListe_1_1.done; aufgabenListe_1_1 = aufgabenListe_1.next()) {
            var aufgabe = aufgabenListe_1_1.value;
            item.push('- ' + aufgabe.markdownLink);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (aufgabenListe_1_1 && !aufgabenListe_1_1.done && (_a = aufgabenListe_1.return)) _a.call(aufgabenListe_1);
        }
        finally { if (e_4) throw e_4.error; }
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
    var e_5, _a, e_6, _b;
    function fileLink(relPath, fileName, einstellungen) {
        return generiereMarkdownLink(fileName, path_1.default.join(relPath, fileName), einstellungen);
    }
    var output = new OutputCollector();
    var readmeContent = leseRepoDatei('README_template.md');
    readmeContent = ersetzeStichwörterInReadme(readmeContent);
    var tagsContent = leseRepoDatei('Stichwortverzeichnis.yml');
    readmeContent = readmeContent.replace('{{ stichwortverzeichnis }}', tagsContent);
    for (var examNumber in examTitles) {
        output.add("\n### " + examNumber + ": " + examTitles[examNumber] + "\n");
        var examNumberPath = path_1.default.join(repositoryPfad, 'Staatsexamen', examNumber);
        var yearDirs = fs_1.default.readdirSync(examNumberPath);
        try {
            for (var yearDirs_1 = (e_5 = void 0, __values(yearDirs)), yearDirs_1_1 = yearDirs_1.next(); !yearDirs_1_1.done; yearDirs_1_1 = yearDirs_1.next()) {
                var year = yearDirs_1_1.value;
                var yearPath = path_1.default.join(examNumberPath, year);
                var monthDirs = fs_1.default.readdirSync(yearPath);
                try {
                    for (var monthDirs_1 = (e_6 = void 0, __values(monthDirs)), monthDirs_1_1 = monthDirs_1.next(); !monthDirs_1_1.done; monthDirs_1_1 = monthDirs_1.next()) {
                        var month = monthDirs_1_1.value;
                        var monthPath = path_1.default.join(yearPath, month);
                        output.add("- " + formatExamTitle(year, month) + ": " + fileLink(monthPath, 'Scan.pdf') + " " + fileLink(monthPath, 'OCR.txt', { linkePdf: false }) + " " + formatQuestions(monthPath));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (monthDirs_1_1 && !monthDirs_1_1.done && (_b = monthDirs_1.return)) _b.call(monthDirs_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (yearDirs_1_1 && !yearDirs_1_1.done && (_a = yearDirs_1.return)) _a.call(yearDirs_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    }
    readmeContent = readmeContent.replace('{{ staatsexamen }}', output.getString());
    // console.log(readmeContent)
    fs_1.default.writeFileSync(path_1.default.join(repositoryPfad, 'README.md'), readmeContent);
});
/*******************************************************************************
 * compile-questions
 ******************************************************************************/
program
    .command('compile-questions')
    .description('Compile all questions')
    .alias('q')
    .action(function (cmdObj) {
    var e_7, _a;
    var staatsexamenPath = path_1.default.join(repositoryPfad, 'Staatsexamen');
    var files = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    try {
        for (var files_2 = __values(files), files_2_1 = files_2.next(); !files_2_1.done; files_2_1 = files_2.next()) {
            var filePath = files_2_1.value;
            filePath = path_1.default.join(staatsexamenPath, filePath);
            if (filePath.match(questionPathRegExp)) {
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
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (files_2_1 && !files_2_1.done && (_a = files_2.return)) _a.call(files_2);
        }
        finally { if (e_7) throw e_7.error; }
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
    var e_8, _a;
    function openWithLogging(filePath) {
        console.log(filePath);
        openCode(filePath);
    }
    if (typeof globPattern !== 'string') {
        globPattern = '**/*.tex';
    }
    var files = glob_1.default.sync(globPattern);
    try {
        for (var files_3 = __values(files), files_3_1 = files_3.next(); !files_3_1.done; files_3_1 = files_3.next()) {
            var filePath = files_3_1.value;
            filePath = path_1.default.resolve(filePath);
            if (cmdObj.notag) {
                var tags = collectTagsOfFile(filePath);
                if (tags.length == 0)
                    openWithLogging(filePath);
            }
            else {
                openWithLogging(filePath);
            }
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (files_3_1 && !files_3_1.done && (_a = files_3.return)) _a.call(files_3);
        }
        finally { if (e_8) throw e_8.error; }
    }
});
program.parse(process.argv);
