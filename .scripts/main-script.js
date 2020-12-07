#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')

const glob = require('glob')
const yaml = require('js-yaml')

const configPath = path.join(path.sep, 'etc', 'lehramt-informatik.config.tex')

if (!fs.existsSync(configPath)) {
  throw new Error(`No configuration file found: ${configPath}`)
}

function parseConfigurationFile (configPath) {
  const configContent = readFile(configPath)
  const match = configContent.match(/\\LehramtInformatikRepository\{(.*)\}/)
  return match[1]
}

const repositoryPath = parseConfigurationFile(configPath)

const examTitles = {
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

function parseTags () {
  try {
    return yaml.safeLoad(readRepoFile('Stichwörter.yml'))
  } catch (e) {
    console.log(e);
  }
}

const tagsTree = parseTags()

function flattenTagsTree (tree, flat) {
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

const tagsFlat = flattenTagsTree(tagsTree)

function getSubTagsTreeByTag (tree, tag) {
  if (typeof tree === 'string') {
    return
  } else if (Array.isArray(tree)) {
    for (const t of tree) {
      const result = getSubTagsTreeByTag(t, tag)
      if (result) return result
    }
  } else {
    for (const t in tree) {
      if (tag === t) {
        return tree[t]
      } else {
        const result = getSubTagsTreeByTag(tree[t], tag)
        if (result) return result
      }
    }
  }
}

function getFlatSubTagsByTag (tree, tag) {
  return flattenTagsTree(getSubTagsTreeByTag(tree, tag))
}

/*******************************************************************************
 * low level functions
 ******************************************************************************/

function checkTag (tag) {
  if (!tagsFlat.has(tag)) {
    throw Error(`Unkown tag: ${tag}`)
  }
}

function open (executable, filePath) {
  const subprocess = childProcess.spawn(executable, [filePath], {
    detached: true,
    stdio: 'ignore'
  })

  subprocess.unref()
}

function openCode (filePath) {
  open('/usr/bin/code', filePath)
}

function readFile (filePath) {
  return fs.readFileSync(filePath, { encoding: 'utf-8' })
}

function readRepoFile () {
  if (arguments[0].indexOf(repositoryPath) > -1) return readFile(path.join(...arguments))
  return readFile(path.join(repositoryPath, ...arguments))
}

function generateExamBasePath (number, year, month) {
  return path.join(__dirname, '..', 'Staatsexamen', number, year, month)
}

function generateQuestionPath (arg1, arg2, arg3) {
  if (arg1 && arg2 && arg3) {
    return path.join(`Thema-${arg1}`, `Teilaufgabe-${arg2}`, `Aufgabe-${arg3}.tex`)
  } else if (arg1 && arg2 && !arg3) {
    return path.join(`Thema-${arg1}`, `Aufgabe-${arg2}.tex`)
  } else {
    return `Aufgabe-${arg1}.tex`
  }
}

function generateTeXMacro (exam, arg1, arg2, arg3) {
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

function splitExamRef (ref) {
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

function formatMarkdownLink (text, relPath) {
  relPath = relPath.replace(repositoryPath, '')
  relPath = relPath.replace(/^\//, '')
  return `[${text}](${githubRawUrl}/${relPath})`
}

const { Command } = require('commander')
const program = new Command()
program.description(`Repository path: ${repositoryPath}`)
program.name('lehramt-informatik.js')
program.version('0.1.0')

function actionHelp () {
  console.log('Specify a subcommand.')
  program.outputHelp()
  process.exit(1)
}

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
  process.exit(1)
})

/*******************************************************************************
 * create-question
 ******************************************************************************/

function checkNumber (number) {
  number = parseInt(number)
  if (number) return number
}

program
  .command('create-question <ref> <part-no> [sub-question-no] [question-no]')
  .description('Create a exam question template in the right directory folder: 66116:2020:09')
  .alias('c')
  .action(function (ref, arg1, arg2, arg3, cmdObj) {
    arg1 = checkNumber(arg1)
    arg2 = checkNumber(arg2)
    arg3 = checkNumber(arg3)

    const exam = splitExamRef(ref)
    const questionPath = path.join(
      generateExamBasePath(exam.number, exam.year, exam.month),
      generateQuestionPath(arg1, arg2, arg3)
    )

    const template =
      '\\documentclass{lehramt-informatik-minimal}\n' +
      '\\InformatikPakete{}\n' +
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
  .action(function (ref, cmdObj) {
    const exam = splitExamRef(ref)
    const examPath = path.join(generateExamBasePath(exam.number, exam.year, exam.month), 'Scan.pdf')
    if (fs.existsSync(examPath)) {
      open('/usr/bin/xdg-open', examPath)
    } else {
      console.log(`Path ${examPath} doesn’t exist.`)
    }
  })

/*******************************************************************************
 * generate-readme
 ******************************************************************************/

function cleanTag (tag) {
  return tag.replace(/\s+/g, ' ')
}

/**
 * Collect the tags of a TeX file.
 * @param {string} filePath
 */
function collectTagsOfFile (filePath) {
  const content = readRepoFile(filePath)
  const re = /\\index\{([^\}]*)\}/g
  let match
  const tags = new Set()
  do {
    match = re.exec(content)
    if (match) {
      const tag = cleanTag(match[1])
      try {
        checkTag(tag)
      } catch (error) {
        openCode(filePath)
        throw new Error(`Unknown tag ${tag} in file ${filePath}`)
      }
      tags.add(tag)
    }
  } while (match)
  return [...tags]
}

function formatTagsOfFile (filePath) {
  const tags = collectTagsOfFile(filePath)
  if (tags.length > 0) {
    return ` (${tags.join(', ')})`
  }
  return ''
}

function collectFilePathsOfTag () {
  const files = glob.sync('**/*.tex')
  const tagsCollection = {}
  for (const filePath of files) {
    const tags = collectTagsOfFile(filePath)
    for (const tag of tags) {
      if (tagsCollection[tag]) {
        tagsCollection[tag].push(filePath)
      } else {
        tagsCollection[tag] = []
        tagsCollection[tag].push(filePath)
      }
    }
  }
  return tagsCollection
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
function parseQuestions (relPath) {
  /**
   * Thema-1: Thema 1
   * Teilaufgabe-2: Teilaufgabe 2
   * Aufgabe-3.tex: Aufgabe 3
   */
  function makeSegmentReadable (segment) {
    return segment.replace('-', ' ').replace('.tex', '')
  }
  const files = glob.sync('**/*.tex', { cwd: relPath })
  const tree = {}
  for (const filePath of files) {
    if (filePath.match(questionPathRegExp)) {
      const segments = filePath.split(path.sep)
      let subTree = tree
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

function formatIndentation(level) {
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
function formatQuestionsRecursive (questionsTree, examPath, level = 1) {
  let output = []
  // title: Thema 1, Teilaufgabe 2, Aufgabe 3
  for (const title in questionsTree) {
    if (typeof questionsTree[title] === 'string') {
      const questionPath = path.join(examPath, questionsTree[title])
      output.push(formatIndentation(level) + formatMarkdownLink(title + formatTagsOfFile(questionPath), questionPath.replace('.tex', '.pdf')))
    } else {
      output.push(`${formatIndentation(level)}${title} ${formatQuestionsRecursive(questionsTree[title], examPath, level + 1)}`)
    }
  }
  return output.join(' ')
}

function formatQuestions (relPath) {
  return formatQuestionsRecursive(parseQuestions(relPath), relPath)
}

class OutputCollector {
  constructor(verbose = false) {
    this.store = []
    this.verbose = verbose
  }

  add (output) {
    if (this.verbose) console.log(output)
    this.store.push(output)
  }

  getString() {
    return this.store.join('\n')
  }
}

function formatExamTitle (year, month) {
  let monthLong
  if (month === '09') {
    monthLong = 'Herbst'
  } else {
    monthLong = 'Frühjahr'
  }
  return `${year} ${monthLong}`
}

program
  .command('generate-readme')
  .description('Generate the readme file')
  .alias('r')
  .action(function (cmdObj) {
    // console.log(collectFilePathsOfTag())
    console.log(getFlatSubTagsByTag(tagsTree, 'SOSY'))
    function fileLink (relPath, fileName) {
      return formatMarkdownLink(fileName, path.join(relPath, fileName))
    }

    const urlTokens = {
      DB: `${githubRawUrl}/01-DB`,
      AUD: `${githubRawUrl}/02-Programmierung/02-AUD`,
      OOMUP: `${githubRawUrl}/02-Programmierung/01-OOMUP`,
      EXAMEN: `${githubRawUrl}/01-Staatsexamen`,
    }

    function replaceUrlTokens (readmeContent) {
      for (const token in urlTokens) {
        readmeContent = readmeContent.replace(new RegExp(`//${token}`, 'g'), urlTokens[token])
      }
      return readmeContent
    }

    const output = new OutputCollector()

    let readmeContent = readRepoFile('README_template.md')

    readmeContent = replaceUrlTokens(readmeContent)

    const tagsContent = readRepoFile('Stichwörter.yml')
    readmeContent = readmeContent.replace('{{ stichwörter }}', tagsContent)

    for (const examNumber in examTitles) {
      output.add(`\n### ${examNumber}: ${examTitles[examNumber]}\n`)
      const examNumberPath = path.join(repositoryPath, 'Staatsexamen', examNumber)
      const yearDirs = fs.readdirSync(examNumberPath)
      for (const year of yearDirs) {
        const yearPath = path.join(examNumberPath, year)
        const monthDirs = fs.readdirSync(yearPath)
        for (const month of monthDirs) {
          const monthPath = path.join(yearPath, month)
          output.add(`- ${formatExamTitle(year, month)}: ${fileLink(monthPath, 'Scan.pdf')} ${fileLink(monthPath, 'OCR.txt')} ${formatQuestions(monthPath)}`)
        }
      }
    }

    readmeContent = readmeContent.replace('{{ staatsexamen }}', output.getString())
    //console.log(readmeContent)
    fs.writeFileSync(path.join(repositoryPath, 'README.md'), readmeContent)
  })

/*******************************************************************************
 * compile-questions
 ******************************************************************************/

program
  .command('compile-questions')
  .description('Compile all questions')
  .alias('q')
  .action(function (cmdObj) {
    const staatsexamenPath = path.join(repositoryPath, 'Staatsexamen')
    const files = glob.sync('**/*.tex', { cwd: staatsexamenPath })
    for (let filePath of files) {
      filePath = path.join(staatsexamenPath, filePath)
      if(filePath.match(questionPathRegExp)) {
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
  .action(function (globPattern, cmdObj) {
    function openWithLogging(filePath) {
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
