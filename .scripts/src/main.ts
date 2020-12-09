#! /usr/bin/env node

import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'

import glob from 'glob'
import yaml from 'js-yaml'

import { Command } from 'commander'

import { stichwortVerzeichnis } from './stichwort-verzeichnis'
import { ExamensAufgabe, Aufgabe } from './aufgabe'

interface StringObject { [key: string]: any }

const configPath = path.join(path.sep, 'etc', 'lehramt-informatik.config.tex')

if (!fs.existsSync(configPath)) {
  throw new Error(`No configuration file found: ${configPath}`)
}

function parseConfigurationFile (configPath: string): string {
  const configContent = readFile(configPath)
  const match = configContent.match(/\\LehramtInformatikRepository\{(.*)\}/)
  if (!match) throw new Error(`Konfigurations-Datei nicht gefunden: ${configPath}`)
  return match[1]
}

const repositoryPfad = parseConfigurationFile(configPath)

const examTitles: { [key: number]: string } = {
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
}

const githubRawUrl = 'https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main'

function parseTags (): StringObject {
  try {
    return <StringObject> yaml.safeLoad(leseRepoDatei('Stichwortverzeichnis.yml'))
  } catch (e) {
    console.log(e)
    return {}
  }
}

const tagsTree = parseTags()

type TagsTreeInput = StringObject | StringObject[] | string

function flattenTagsTree (tree: TagsTreeInput, flat?: Set<string>): Set<string> {
  if (!flat) flat = new Set()
  if (typeof tree === 'string') {
    if (flat.has(tree)) {
      throw Error(`Duplicate tag: ${tree}`)
    }
    flat.add(tree)
  } else if (Array.isArray(tree)) {
    for (const t of tree) {
      flattenTagsTree(t, flat)
    }
  } else {
    for (const t in tree) {
      flattenTagsTree(t, flat)
      flattenTagsTree(tree[t], flat)
    }
  }
  return flat
}

const tagsFlat: Set<string> = flattenTagsTree(tagsTree)

/*******************************************************************************
 * low level functions
 ******************************************************************************/

function checkTag (tag: string): void {
  if (!tagsFlat.has(tag)) {
    throw Error(`Unkown tag: ${tag}`)
  }
}

function openWithExecutable (executable: string, filePath: string): void {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function openCode (filePath: string) {
  openWithExecutable('/usr/bin/code', filePath)
}

function readFile (filePath: string) {
  return fs.readFileSync(filePath, { encoding: 'utf-8' })
}

export function leseRepoDatei (...args: string[]) {
  if (arguments[0].indexOf(repositoryPfad) > -1) return readFile(path.join(...args))
  return readFile(path.join(repositoryPfad, ...args))
}

function generateExamBasePath (number: string, year: string, month: string): string {
  return path.join(__dirname, '..', 'Staatsexamen', number, year, month)
}

function generateQuestionPath (arg1: number, arg2?: number, arg3?: number): string {
  if (arg1 && arg2 && arg3) {
    return path.join(`Thema-${arg1}`, `Teilaufgabe-${arg2}`, `Aufgabe-${arg3}.tex`)
  } else if (arg1 && arg2 && !arg3) {
    return path.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`)
  } else {
    return `Aufgabe-${arg1}.tex`
  }
}

interface Exam {
  number: string
  year: string
  month: string
}

function generateTeXMacro (exam: Exam, arg1: string, arg2?: string, arg3?: string) {
  let questionMarkup = ''
  let macroSuffix = ''
  const examMarkup = `${exam.number} / ${exam.year} / ${exam.month} :`
  if (arg1 && arg2 && arg3) {
    questionMarkup = `Thema ${arg1} Teilaufgabe ${arg2} Aufgabe ${arg3}`
    macroSuffix = 'TTA'
  } else if (arg1 && arg2 && !arg3) {
    questionMarkup = `Thema ${arg1} Aufgabe ${arg2}`
    macroSuffix = 'TA'
  } else {
    questionMarkup = `Aufgabe ${arg1}`
    macroSuffix = 'A'
  }
  return `\n\\ExamensAufgabe${macroSuffix} ${examMarkup} ${questionMarkup}`
}

function splitExamRef (ref: string) {
  const exam = ref.split(':')
  if (exam.length !== 3) {
    console.log('Exam ref has to be in this format: 66116:2020:09')
    process.exit(1)
  }
  return {
    number: exam[0],
    year: exam[1],
    month: exam[2]
  }
}

interface MarkdownLinkEinstellung {
  alsMarkdownLink?: boolean
  linkePdf?: boolean
}

function generiereMarkdownLink (text: string, pfad: string, einstellung?: MarkdownLinkEinstellung): string {
  let linkePdf = true
  let alsMarkdownLink = true
  if (einstellung) {
    if (einstellung.linkePdf !== undefined) linkePdf = einstellung.linkePdf
    if (einstellung.alsMarkdownLink !== undefined) alsMarkdownLink = einstellung.alsMarkdownLink
  }
  pfad = pfad.replace(repositoryPfad, '')
  pfad = pfad.replace(/^\//, '')
  if (linkePdf) pfad = pfad.replace(/\.[\w]+$/, '.pdf')
  if (alsMarkdownLink) {
    return `[${text}](${githubRawUrl}/${pfad})`
  }
  return text
}

const program = new Command()
program.description(`Repository path: ${repositoryPfad}`)
program.name('lehramt-informatik.js')
program.version('0.1.0')

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

/*******************************************************************************
 * create-question
 ******************************************************************************/

function checkNumber (number: string | number): number | undefined {
  if (typeof number === 'string') { number = parseInt(number) }
  if (number) return number
}

program
  .command('create-question <ref> <part-no> [sub-question-no] [question-no]')
  .description('Create a exam question template in the right directory folder: 66116:2020:09')
  .alias('c')
  .action(function (ref: string, arg1: string, arg2: string, arg3: string, cmdObj: object): void {
    const num1 = checkNumber(arg1)
    const num2 = checkNumber(arg2)
    const num3 = checkNumber(arg3)

    if (!num1) {
      throw Error(`Undefined ${num1}`)
    }

    const exam = splitExamRef(ref)
    const questionPath = path.join(
      generateExamBasePath(exam.number, exam.year, exam.month),
      generateQuestionPath(num1, num2, num3)
    )

    const template =
      '\\documentclass{lehramt-informatik-aufgabe}\n' +
      '\\liLadePakete{}\n' +
      '\\begin{document}\n' +
      '\n' +
      '\\end{document}\n'

    fs.mkdirSync(path.dirname(questionPath), { recursive: true })
    if (!fs.existsSync(questionPath)) {
      fs.writeFileSync(questionPath, template, { encoding: 'utf-8' })
    }
    openCode(questionPath)
    console.log(generateTeXMacro(exam, arg1, arg2, arg3))
  })

/*******************************************************************************
 * open-exam
 ******************************************************************************/

program
  .command('open-exam <ref>')
  .description('Open a exam scan: 66116:2020:09')
  .alias('o')
  .action(function (ref: string, cmdObj: object): void {
    const exam = splitExamRef(ref)
    const examPath = path.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf')
    if (fs.existsSync(examPath)) {
      openWithExecutable('/usr/bin/xdg-open', examPath)
    } else {
      console.log(`Path ${examPath} doesn’t exist.`)
    }
  })

/*******************************************************************************
 * generate-readme
 ******************************************************************************/

function cleanTag (tag: string): string {
  return tag.replace(/\s+/g, ' ')
}

function assembleMacroRegExp (macroName: String): RegExp {
  return new RegExp('\\' + macroName + '\{([^\}]*)\}', 'g')
}

/**
 * Collect the tags of a content string.
 *
 * @param {string} content - The content of a TeX file.
 */
function collectTagsOfContent (content: string) {
  const re = assembleMacroRegExp('index')
  let match
  const tags = new Set<string>()
  do {
    match = re.exec(content)
    if (match) {
      const tag = cleanTag(match[1])
      try {
        checkTag(tag)
      } catch (error) {
        throw new Error(`Unknown tag ${tag} in file ${content}`)
      }
      tags.add(tag)
    }
  } while (match)
  return Array.from(tags)
}

/**
 * Collect the tags of a TeX file.
 * @param {string} filePath
 */
function collectTagsOfFile (filePath: string) {
  return collectTagsOfContent(leseRepoDatei(filePath))
}

const questionPathRegExp = /(Thema-\d\/)?(Teilaufgabe-\d\/)?Aufgabe-\d\.tex$/

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
function parseQuestions (relPath: string) {
  /**
   * Thema-1: Thema 1
   * Teilaufgabe-2: Teilaufgabe 2
   * Aufgabe-3.tex: Aufgabe 3
   */
  function makeSegmentReadable (segment: string): string {
    return segment.replace('-', ' ').replace('.tex', '')
  }
  const files = glob.sync('**/*.tex', { cwd: relPath })
  const tree = {}
  for (const filePath of files) {
    if (filePath.match(questionPathRegExp)) {
      const segments = filePath.split(path.sep)
      let subTree: StringObject = tree
      for (const segment of segments) {
        const segmentReadable = makeSegmentReadable(segment)
        if (!subTree[segmentReadable] && segment.indexOf('.tex') === -1) {
          subTree[segmentReadable] = {}
        } else if (segment.indexOf('.tex') > -1) {
          subTree[segmentReadable] = filePath
        }
        if (segment.indexOf('.tex') === -1) {
          subTree = subTree[segmentReadable]
        }
      }
    }
  }
  return tree
}

function formatIndentation (level: number): string {
  return '\n' + ' '.repeat(4 * level) + '- '
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
function formatQuestionsRecursive (questionsTree: StringObject, examPath: string, level: number = 1): string {
  const output = []
  // title: Thema 1, Teilaufgabe 2, Aufgabe 3
  for (const title in questionsTree) {
    if (typeof questionsTree[title] === 'string') {
      const aufgabenPfad = path.join(examPath, questionsTree[title])
      const aufgabe = new ExamensAufgabe(aufgabenPfad)
      output.push(formatIndentation(level) + aufgabe.gibTitelNurAufgabe(true))
    } else {
      output.push(`${formatIndentation(level)}${title} ${formatQuestionsRecursive(questionsTree[title], examPath, level + 1)}`)
    }
  }
  return output.join(' ')
}

function formatQuestions (relPath: string): string {
  return formatQuestionsRecursive(parseQuestions(relPath), relPath)
}

class OutputCollector {
  store: string[]
  verbose: boolean
  constructor (verbose = false) {
    this.store = []
    this.verbose = verbose
  }

  add (output: string) {
    if (this.verbose) console.log(output)
    this.store.push(output)
  }

  getString () {
    return this.store.join('\n')
  }
}

function formatExamTitle (year: string, month: string) {
  let monthLong
  if (month === '09') {
    monthLong = 'Herbst'
  } else {
    monthLong = 'Frühjahr'
  }
  return `${year} ${monthLong}`
}

function generiereMarkdownAufgabenListe (aufgabenListe: Set<Aufgabe>): string {
  const item = []
  for (const aufgabe of aufgabenListe) {
    item.push('- ' + aufgabe.markdownLink)
  }
  return item.join('\n')
}

function ersetzeStichwörterInReadme (inhalt: string): string {
  return inhalt.replace(/\{\{ stichwort "([\w\d- ]*)" \}\}/g, function (wholeMatch, stichwort) {
    return generiereMarkdownAufgabenListe(stichwortVerzeichnis.gibAufgabenMitStichwortUnterBaum(stichwort))
  })
}

program
  .command('generate-readme')
  .description('Generate the readme file')
  .alias('r')
  .action(function (cmdObj: object) {
    function fileLink (relPath: string, fileName: string, einstellungen?: MarkdownLinkEinstellung): string {
      return generiereMarkdownLink(fileName, path.join(relPath, fileName), einstellungen)
    }

    const output = new OutputCollector()

    let readmeContent = leseRepoDatei('README_template.md')

    readmeContent = ersetzeStichwörterInReadme(readmeContent)

    const tagsContent = leseRepoDatei('Stichwortverzeichnis.yml')
    readmeContent = readmeContent.replace('{{ stichwortverzeichnis }}', tagsContent)

    for (const examNumber in examTitles) {
      output.add(`\n### ${examNumber}: ${examTitles[examNumber]}\n`)
      const examNumberPath = path.join(repositoryPfad, 'Staatsexamen', examNumber)
      const yearDirs = fs.readdirSync(examNumberPath)
      for (const year of yearDirs) {
        const yearPath = path.join(examNumberPath, year)
        const monthDirs = fs.readdirSync(yearPath)
        for (const month of monthDirs) {
          const monthPath = path.join(yearPath, month)
          output.add(`- ${formatExamTitle(year, month)}: ${fileLink(monthPath, 'Scan.pdf')} ${fileLink(monthPath, 'OCR.txt', { linkePdf: false })} ${formatQuestions(monthPath)}`)
        }
      }
    }

    readmeContent = readmeContent.replace('{{ staatsexamen }}', output.getString())
    // console.log(readmeContent)
    fs.writeFileSync(path.join(repositoryPfad, 'README.md'), readmeContent)
  })

/*******************************************************************************
 * compile-questions
 ******************************************************************************/

program
  .command('compile-questions')
  .description('Compile all questions')
  .alias('q')
  .action(function (cmdObj: object) {
    const staatsexamenPath = path.join(repositoryPfad, 'Staatsexamen')
    const files = glob.sync('**/*.tex', { cwd: staatsexamenPath })
    for (let filePath of files) {
      filePath = path.join(staatsexamenPath, filePath)
      if (filePath.match(questionPathRegExp)) {
        console.log(filePath)
        const result = childProcess.spawnSync('/usr/local/texlive/bin/x86_64-linux/latexmk', ['-shell-escape', '-cd', '--lualatex', filePath], {
          encoding: 'utf-8'
        })

        if (result.status !== 0) {
          console.log(result.stdout)
          console.log(result.stderr)
          openCode(filePath)
          throw new Error(`Error compiling ${filePath}`)
        }
      }
    }
  })

/*******************************************************************************
 * vscode
 ******************************************************************************/

program
  .command('vscode [glob]')
  .alias('vsc')
  .description('Open in Visual Studio Code')
  .option('-n, --notag', 'Open only questions without an tag macro in it.')
  .action(function (globPattern: string, cmdObj: StringObject): void {
    function openWithLogging (filePath: string) {
      console.log(filePath)
      openCode(filePath)
    }

    if (typeof globPattern !== 'string') {
      globPattern = '**/*.tex'
    }
    const files = glob.sync(globPattern)
    for (let filePath of files) {
      filePath = path.resolve(filePath)
      if (cmdObj.notag) {
        const tags = collectTagsOfFile(filePath)
        if (tags.length == 0) openWithLogging(filePath)
      } else {
        openWithLogging(filePath)
      }
    }
  })

program.parse(process.argv)
