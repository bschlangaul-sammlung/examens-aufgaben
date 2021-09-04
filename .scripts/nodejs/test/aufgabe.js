const assert = require('assert')
const path = require('path')
const { Aufgabe, gibAufgabenSammlung, ExamensAufgabe } = require('../dist/aufgabe.js')

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

    describe('getter Methoden', function () {
      const aufgabe = aufgabenSammlung.gib(
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )

      it('getter Methode „titel“', function () {
        assert.strictEqual(aufgabe.titel, 'Aufgabe 1')
      })

      it('getter Methode „thematik“', function () {
        assert.strictEqual(aufgabe.thematik, 'Verifikation')
      })

      it('getter Methode „zitat“', function () {
        assert.deepStrictEqual(aufgabe.zitat, ['examen:66116:2020:09'])
      })

      it('getter Methode „zitat“: 2 Elemente', function () {
        const a = aufgabenSammlung.gib(
          'Staatsexamen/66116/2014/03/Thema-2/Teilaufgabe-2/Aufgabe-1.tex'
        )
        assert.deepStrictEqual(a.zitat, [
          'examen:66116:2014:03',
          'Thema 2 Teilaufgabe 2 Aufgabe 1 Seite 11'
        ])
      })
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
      assert.strictEqual(titel.ZitatBeschreibung, 'Seite 4, Aufgabe 3')
      assert.strictEqual(titel.ZitatSchluessel, 'theo:ab:1')
    })
  })

  describe('Klasse ExamensAufgabe()', function () {
    it('Initialisierung', function () {
      const aufgabe = aufgabenSammlung.gib(
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )
      assert.strictEqual(aufgabe.istExamen, true)
    })

    describe('Statische Methode „ExamensAufgabe.erzeugeExamensAufgabe()“', function () {
      it('66116:2020:09 1 2 3', function () {
        const aufgabe = ExamensAufgabe.erzeugeExamensAufgabe('66116:2020:09', 1, 2, 3)
        assert.strictEqual(aufgabe.thema, 1)
        assert.strictEqual(aufgabe.teilaufgabe, 2)
        assert.strictEqual(aufgabe.aufgabe, 3)
      })

      it('66116:2020:09 1 2', function () {
        const aufgabe = ExamensAufgabe.erzeugeExamensAufgabe('66116:2020:09', 1, 2)
        assert.strictEqual(aufgabe.thema, 1)
        assert.strictEqual(aufgabe.teilaufgabe, undefined)
        assert.strictEqual(aufgabe.aufgabe, 2)
      })

      it('66116:2020:09 1', function () {
        const aufgabe = ExamensAufgabe.erzeugeExamensAufgabe('66116:2020:09', 1)
        assert.strictEqual(aufgabe.thema, undefined)
        assert.strictEqual(aufgabe.teilaufgabe, undefined)
        assert.strictEqual(aufgabe.aufgabe, 1)
      })
    })

    it('Methode „erzeugeMetadaten()“', function () {
      const aufgabe = aufgabenSammlung.gib(
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )
      const metadaten = aufgabe.erzeugeMetadaten()
      assert.strictEqual(metadaten.Titel, '{Aufgabe 1}')
      assert.strictEqual(metadaten.Thematik, '{Verifikation}')
      assert.strictEqual(
        metadaten.RelativerPfad,
        'Staatsexamen/66116/2020/09/Thema-1/Teilaufgabe-1/Aufgabe-1.tex'
      )
      assert.strictEqual(metadaten.ZitatSchluessel, 'examen:66116:2020:09')
      assert.strictEqual(metadaten.Stichwoerter, '{Verifikation, wp-Kalkül}')
      assert.strictEqual(metadaten.ExamenNummer, 66116)
      assert.strictEqual(metadaten.ExamenJahr, 2020)
      assert.strictEqual(metadaten.ExamenMonat, '09')
      assert.strictEqual(metadaten.ExamenThemaNr, 1)
      assert.strictEqual(metadaten.ExamenTeilaufgabeNr, 1)
      assert.strictEqual(metadaten.ExamenAufgabeNr, 1)
    })
  })
})
