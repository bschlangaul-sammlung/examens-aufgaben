#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const dirs = fs.readdirSync('.')

for (const dir of dirs) {
  const stat = fs.statSync(dir)
  if (stat.isDirectory()) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      if (file.indexOf('.pdf') > -1) {
        console.log(file)
        const pdf = path.join(dir, file)
        const txt = pdf.replace('.pdf', '.txt')
        if (!fs.existsSync(txt)) {
          childProcess.spawnSync('pdftotext', [pdf])
        }
      }
    }
  }
}
