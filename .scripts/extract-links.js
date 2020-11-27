#! /usr/bin/env node

const fs = require('fs')

const html = fs.readFileSync('./links_vertieft_alte.html', { encoding: 'utf-8' })
console.log()

links = []
const match = html.match(/http.*\.pdf/g)
console.log(match)

for (const link of match) {
  console.log(link)
  if (!links.includes(link)) {
    links.push(link)
  }
}

links.sort()
console.log(links)
fs.writeFileSync('links-alt.txt', links.join('\n'))
