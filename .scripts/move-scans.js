#! /usr/bin/env node

var glob = require("glob")

const fs = require('fs')
const path = require('path')

glob("../Staatsexamen/**/*-*.txt", function (er, files) {
  for (const file of files) {
    moveFile(file)
  }
})

function moveFile (oldPath) {
  console.log(oldPath)
  let newPath = oldPath.replace(/(\d\d\d\d)-(\d\d)\.txt/, '$1/$2/OCR.txt')
  console.log(newPath)
  console.log(path.dirname(newPath))
  fs.mkdirSync(path.dirname(newPath), { recursive: true })
  fs.renameSync(oldPath, newPath)
}
