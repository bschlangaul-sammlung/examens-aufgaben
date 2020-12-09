#! /usr/bin/env node
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var child_process_1 = __importDefault(require("child_process"));
var glob_1 = __importDefault(require("glob"));
var js_yaml_1 = __importDefault(require("js-yaml"));
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
var repositoryPath = parseConfigurationFile(configPath);
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
var Aufgabe = /** @class */ (function () {
    function Aufgabe(pfad) {
        this.pfad = path_1.default.join(repositoryPath, pfad);
        if (fs_1.default.existsSync(this.pfad)) {
            this.inhalt = readRepoFile(this.pfad);
            if (this.inhalt) {
                this.stichwörter = collectTagsOfContent(this.inhalt);
                this.titel = getContentOfTexMacro('liAufgabenTitel', this.inhalt);
            }
        }
    }
    Object.defineProperty(Aufgabe.prototype, "titelFormatiert", {
        get: function () {
            var präfix;
            var stichwörter = '';
            if (this.titel) {
                präfix = this.titel;
            }
            else {
                präfix = 'Aufgabe';
            }
            if (this.stichwörter) {
                stichwörter = formatTags(this.stichwörter);
            }
            return "" + präfix + stichwörter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "stichw\u00F6rterFormatiert", {
        get: function () {
            if (this.stichwörter && this.stichwörter.length > 0) {
                return " (" + this.stichwörter.join(', ') + ")";
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aufgabe.prototype, "markdownLink", {
        get: function () {
            return formatMarkdownLink(this.titelFormatiert, this.pfad);
        },
        enumerable: false,
        configurable: true
    });
    return Aufgabe;
}());
var ExamensAufgabe = /** @class */ (function (_super) {
    __extends(ExamensAufgabe, _super);
    function ExamensAufgabe(pfad) {
        var _this = _super.call(this, pfad) || this;
        var match = pfad.match(ExamensAufgabe.pfadRegExp);
        if (!match || !match.groups) {
            throw new Error("Konnten den Examenspfad nicht lesen: " + pfad);
        }
        var gruppen = match.groups;
        _this.nummer = parseInt(gruppen.nummer);
        _this.jahr = parseInt(gruppen.jahr);
        _this.monat = parseInt(gruppen.monat);
        _this.aufgabe = parseInt(gruppen.aufgabe);
        if (gruppen.thema)
            _this.thema = parseInt(gruppen.thema);
        if (gruppen.teilaufgabe)
            _this.teilaufgabe = parseInt(gruppen.teilaufgabe);
        return _this;
    }
    ExamensAufgabe.istExamensAufgabe = function (pfad) {
        if (pfad.match(this.pfadRegExp)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ExamensAufgabe.prototype, "examensReferenz", {
        get: function () {
            return this.nummer + ":" + this.jahr + ":" + this.monat.toString().padStart(2, '0');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "aufgabenReferenz", {
        get: function () {
            var output = [];
            if (this.thema)
                output.push("T" + this.thema);
            if (this.teilaufgabe)
                output.push("TA" + this.teilaufgabe);
            output.push("A" + this.aufgabe);
            return output.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "titelKurz", {
        get: function () {
            return this.examensReferenz + " " + this.aufgabenReferenz + this.stichwörterFormatiert;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExamensAufgabe.prototype, "markdownLink", {
        get: function () {
            return formatMarkdownLink(this.titelKurz, this.pfad);
        },
        enumerable: false,
        configurable: true
    });
    ExamensAufgabe.pfadRegExp = /(?<nummer>\d{5})\/(?<jahr>\d{4})\/(?<monat>\d{2})\/(Thema-(?<thema>\d)\/)?(Teilaufgabe-(?<teilaufgabe>\d)\/)?Aufgabe-(?<aufgabe>\d+)\.tex$/;
    return ExamensAufgabe;
}(Aufgabe));
var githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main';
function parseTags() {
    try {
        return js_yaml_1.default.safeLoad(readRepoFile('Stichwortverzeichnis.yml'));
    }
    catch (e) {
        console.log(e);
        return {};
    }
}
var tagsTree = parseTags();
function flattenTagsTree(tree, flat) {
    if (!flat)
        flat = new Set();
    if (typeof tree === 'string') {
        if (flat.has(tree)) {
            throw Error("Duplicate tag: " + tree);
        }
        flat.add(tree);
    }
    else if (Array.isArray(tree)) {
        for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
            var t = tree_1[_i];
            flattenTagsTree(t, flat);
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
function getSubTagsTreeByTag(tree, tag) {
    if (typeof tree === 'string') {
    }
    else if (Array.isArray(tree)) {
        for (var _i = 0, tree_2 = tree; _i < tree_2.length; _i++) {
            var t = tree_2[_i];
            var result = getSubTagsTreeByTag(t, tag);
            if (result)
                return result;
        }
    }
    else {
        for (var t in tree) {
            if (tag === t) {
                return tree[t];
            }
            else {
                var result = getSubTagsTreeByTag(tree[t], tag);
                if (result)
                    return result;
            }
        }
    }
}
function getFlatSubTagsByTag(tree, tag) {
    var subTree = getSubTagsTreeByTag(tree, tag);
    var tagList;
    if (subTree) {
        tagList = flattenTagsTree(subTree);
    }
    if (tagList && Array.isArray(tagList)) {
        tagList.push(tag);
        return tagList;
    }
    return [tag];
}
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
function readRepoFile() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (arguments[0].indexOf(repositoryPath) > -1)
        return readFile(path_1.default.join.apply(path_1.default, args));
    return readFile(path_1.default.join.apply(path_1.default, __spreadArrays([repositoryPath], args)));
}
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
function formatMarkdownLink(text, relPath) {
    relPath = relPath.replace(repositoryPath, '');
    relPath = relPath.replace(/^\//, '');
    return "[" + text + "](" + githubRawUrl + "/" + relPath + ")";
}
var Command = require('commander').Command;
var program = new Command();
program.description("Repository path: " + repositoryPath);
program.name('lehramt-informatik.js');
program.version('0.1.0');
function actionHelp() {
    console.log('Specify a subcommand.');
    program.outputHelp();
    process.exit(1);
}
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
    return collectTagsOfContent(readRepoFile(filePath));
}
function getContentOfTexMacro(macroName, markup) {
    var regExp = assembleMacroRegExp(macroName);
    var match = regExp.exec(markup);
    if (match)
        return match[1];
}
function formatTagsOfFile(filePath) {
    var tags = collectTagsOfFile(filePath);
    return formatTags(tags);
}
function formatTags(tagsList) {
    if (tagsList.length > 0) {
        return " (" + tagsList.join(', ') + ")";
    }
    return '';
}
function generateQuestionTitleFromPath(filePath) {
    var content = readRepoFile(filePath);
    var tags = formatTags(collectTagsOfContent(content));
    var title = getContentOfTexMacro('liAufgabenTitel', content);
    var prefix;
    if (title) {
        prefix = title;
    }
    else {
        prefix = 'Aufgabe';
    }
    return formatMarkdownLink("" + prefix + tags, filePath);
}
function generateFilePathsByTagCollection() {
    var files = glob_1.default.sync('**/*.tex', { cwd: repositoryPath });
    var tagsCollection = {};
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var filePath = files_1[_i];
        var tags = collectTagsOfFile(filePath);
        for (var _a = 0, tags_1 = tags; _a < tags_1.length; _a++) {
            var tag = tags_1[_a];
            if (tagsCollection[tag]) {
                tagsCollection[tag].push(filePath);
            }
            else {
                tagsCollection[tag] = [];
                tagsCollection[tag].push(filePath);
            }
        }
    }
    return tagsCollection;
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
    for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
        var filePath = files_2[_i];
        if (filePath.match(questionPathRegExp)) {
            var segments = filePath.split(path_1.default.sep);
            var subTree = tree;
            for (var _a = 0, segments_1 = segments; _a < segments_1.length; _a++) {
                var segment = segments_1[_a];
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
            var questionPath = path_1.default.join(examPath, questionsTree[title]);
            output.push(formatIndentation(level) + formatMarkdownLink(title + formatTagsOfFile(questionPath), questionPath.replace('.tex', '.pdf')));
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
function formatTopLevelFilePathList(filePathsList) {
    var item = [];
    for (var _i = 0, filePathsList_1 = filePathsList; _i < filePathsList_1.length; _i++) {
        var filePath = filePathsList_1[_i];
        var aufgabe = void 0;
        if (ExamensAufgabe.istExamensAufgabe(filePath)) {
            aufgabe = new ExamensAufgabe(filePath);
        }
        else {
            aufgabe = new Aufgabe(filePath);
        }
        item.push('- ' + aufgabe.markdownLink);
    }
    return item.join('\n');
}
function replaceTagsInReadme(content) {
    return content.replace(/\{\{ stichwort "([\w\d- ]*)" \}\}/g, function (wholeMatch, foundTag) {
        return formatTopLevelFilePathList(listFilePathsByTag(foundTag));
    });
}
var filePathsByTagCollection = generateFilePathsByTagCollection();
function listFilePathsByTag(tag) {
    var flatTags = getFlatSubTagsByTag(tagsTree, tag);
    var filePaths = new Set();
    for (var _i = 0, flatTags_1 = flatTags; _i < flatTags_1.length; _i++) {
        var t = flatTags_1[_i];
        if (filePathsByTagCollection[t]) {
            for (var _a = 0, _b = filePathsByTagCollection[t]; _a < _b.length; _a++) {
                var filePath = _b[_a];
                filePaths.add(filePath);
            }
        }
    }
    return Array.from(filePaths).sort();
}
program
    .command('generate-readme')
    .description('Generate the readme file')
    .alias('r')
    .action(function (cmdObj) {
    function fileLink(relPath, fileName) {
        return formatMarkdownLink(fileName, path_1.default.join(relPath, fileName));
    }
    var output = new OutputCollector();
    var readmeContent = readRepoFile('README_template.md');
    readmeContent = replaceTagsInReadme(readmeContent);
    var tagsContent = readRepoFile('Stichwortverzeichnis.yml');
    readmeContent = readmeContent.replace('{{ stichwortverzeichnis }}', tagsContent);
    for (var examNumber in examTitles) {
        output.add("\n### " + examNumber + ": " + examTitles[examNumber] + "\n");
        var examNumberPath = path_1.default.join(repositoryPath, 'Staatsexamen', examNumber);
        var yearDirs = fs_1.default.readdirSync(examNumberPath);
        for (var _i = 0, yearDirs_1 = yearDirs; _i < yearDirs_1.length; _i++) {
            var year = yearDirs_1[_i];
            var yearPath = path_1.default.join(examNumberPath, year);
            var monthDirs = fs_1.default.readdirSync(yearPath);
            for (var _a = 0, monthDirs_1 = monthDirs; _a < monthDirs_1.length; _a++) {
                var month = monthDirs_1[_a];
                var monthPath = path_1.default.join(yearPath, month);
                output.add("- " + formatExamTitle(year, month) + ": " + fileLink(monthPath, 'Scan.pdf') + " " + fileLink(monthPath, 'OCR.txt') + " " + formatQuestions(monthPath));
            }
        }
    }
    readmeContent = readmeContent.replace('{{ staatsexamen }}', output.getString());
    // console.log(readmeContent)
    fs_1.default.writeFileSync(path_1.default.join(repositoryPath, 'README.md'), readmeContent);
});
/*******************************************************************************
 * compile-questions
 ******************************************************************************/
program
    .command('compile-questions')
    .description('Compile all questions')
    .alias('q')
    .action(function (cmdObj) {
    var staatsexamenPath = path_1.default.join(repositoryPath, 'Staatsexamen');
    var files = glob_1.default.sync('**/*.tex', { cwd: staatsexamenPath });
    for (var _i = 0, files_3 = files; _i < files_3.length; _i++) {
        var filePath = files_3[_i];
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
    function openWithLogging(filePath) {
        console.log(filePath);
        openCode(filePath);
    }
    if (typeof globPattern !== 'string') {
        globPattern = '**/*.tex';
    }
    var files = glob_1.default.sync(globPattern);
    for (var _i = 0, files_4 = files; _i < files_4.length; _i++) {
        var filePath = files_4[_i];
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
});
program.parse(process.argv);
