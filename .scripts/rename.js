#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('../neu')

for (const file of files) {
  const match = file.match(/(\d+)_(\d+)-(\d+)\.(\w+)/)
  //const match = file.match(/(\d+)-([FH])(\d+)\.(\w+)/)
  if (match) {
    const pruefungsNr = match[1]
    const monat = match[3]
    const jahr = match[2]
    const extension = match[4]
    const result = {
      pruefungsNr,
      monat,
      jahr,
      extension
    }
    // if (result.halbjahr === 'F') {
    //   result.monat = '03'
    // } else {
    //   result.monat = '09'
    // }
    const newPath = path.join(
      result.pruefungsNr,
      `${result.jahr}-${result.monat}.${result.extension}`
    )
    console.log(newPath)
    if (!fs.existsSync(result.pruefungsNr)) {
      fs.mkdirSync(result.pruefungsNr)
    }
    fs.renameSync(path.join('..', 'neu', file), newPath)
  }
}
