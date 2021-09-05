const assert = require('assert')
const { generiereExamensÜbersicht } = require('../../dist/aktionen/aufgaben-sammlung.js')

describe('aktionen/aufgaben-sammlung.ts', function () {
  it('Funktion generiereExamensÜbersicht()', function () {
    const übersicht = generiereExamensÜbersicht()
    assert.ok(übersicht.includes('https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-6.pdf'))
  })

})
