const assert = require('assert')
const path = require('path')
const { Aufgabe, gibAufgabenSammlung } = require('../dist/aufgabe.js')

const aufgabenSammlung = gibAufgabenSammlung()

function gibTestPfad (dateiName) {
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
      const titel = aufgabe.leseMetadatenVonTex()
      assert.strictEqual(titel.Titel, 'Grammatik aus Automat')
      assert.strictEqual(titel.Thematik, 'Reguläre Sprache')
      assert.strictEqual(
        titel.RelativerPfad,
        'Aufgabe_Grammatik-aus-Automat.tex'
      )
      assert.strictEqual(titel.FussnoteSeite, 'Seite 4, Aufgabe 3')
      assert.strictEqual(titel.Fussnote, 'theo:ab:1')
    })
  })

  describe('Klasse ExamensAufgabe()', function () {
    it('Initialisierung', function () {
      const aufgabe = aufgabenSammlung.gib(
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )
      assert.strictEqual(aufgabe.istExamen, true)
    })

    it('Methode „erzeugeMetadaten()“', function () {
      const aufgabe = aufgabenSammlung.gib(
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )
      const metadaten = aufgabe.erzeugeMetadaten()
      assert.strictEqual(metadaten.ExamenNummer, 66116)
      assert.strictEqual(metadaten.ExamenJahr, 2020)
      assert.strictEqual(metadaten.ExamenMonat, '09')
      assert.strictEqual(metadaten.ExamenThemaNr, 1)
      assert.strictEqual(metadaten.ExamenTeilaufgabeNr, 1)
      assert.strictEqual(metadaten.ExamenAufgabeNr, 1)
    })
  })
})
