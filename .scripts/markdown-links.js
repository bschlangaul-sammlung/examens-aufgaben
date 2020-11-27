#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const prefix = path.join('Staatsexamen')

const dirs = fs.readdirSync(prefix)

function formatMarkdownLink (text, relPath) {
  return `[${text}](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/Staatsexamen/${relPath})`
}

const output = []
for (const dir of dirs) {
  const relDir = path.join(prefix, dir)
  output.push(`\n\n${dir}\n\n`)
  const stat = fs.statSync(relDir)
  if (stat.isDirectory(relDir)) {
    const files = fs.readdirSync(relDir)
    for (const file of files) {
      if (file.indexOf('.pdf') > -1) {
        const match = file.match(/(\d{4,})-(\d{2,}).*/)
        const year = match[1]
        const month = match[2]
        const session = month === '03' ? 'Frühjahr' : 'Herbst'
        output.push(`${year} ${session}`)
        const pdf = path.join(dir, file)
        const txt = pdf.replace('.pdf', '.txt')
        output.push(formatMarkdownLink('pdf', pdf))
        output.push(formatMarkdownLink('txt', txt))
      }
    }
  }
}

console.log(output.join('\n'))
