const assert = require('assert')
const path = require('path')
const { Aufgabe } = require('../dist/aufgabe.js')

function gibTestPfad(dateiName) {
  return path.resolve(__dirname, 'files', dateiName)
}

describe('aufgabe.ts', function () {
  describe('Klasse Aufgabe()', function () {
    it('Initialisierung', function () {
      const aufgabe = new Aufgabe(gibTestPfad('Aufgabe.tex'))
      assert.strictEqual(aufgabe.istExamen, false)
    })

    it('Methode leseMetadataVonTex()', function () {
      const aufgabe = new Aufgabe(gibTestPfad('Aufgabe.tex'))
      const titel = aufgabe.leseMetadataVonTex()
      assert.strictEqual(titel.Titel, 'Grammatik aus Automat')
      assert.strictEqual(titel.Thematik, 'Reguläre Sprache')
      assert.strictEqual(titel.RelativerPfad, 'Aufgabe_Grammatik-aus-Automat.tex')
      assert.strictEqual(titel.FussnoteSeite, 'Seite 4, Aufgabe 3')
      assert.strictEqual(titel.Fussnote, 'theo:ab:1')
    })
  })
})
