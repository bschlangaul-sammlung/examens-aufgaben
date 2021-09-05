var assert = require('assert')

const { gibExamenSammlung } = require('../dist/examen.js')

const sammlung = gibExamenSammlung()

describe('examen.js', function () {
  describe('Klasse ExamenSammlung()', function () {
    it('Getter methode examenBaum', function () {
      const examen = sammlung.examenBaum['66116']['2021']['03']
      assert.strictEqual(examen.jahr, 2021)
    })
  })

  describe('Klasse Examen()', function () {
    it('Initialisierung', function () {
      const examen = sammlung.gibDurchReferenz('46111:1995:03')
      assert.strictEqual(examen.nummer, 46111)
      assert.strictEqual(examen.jahr, 1995)
      assert.strictEqual(examen.monat, 3)
      assert.strictEqual(examen.jahreszeit, 'Frühjahr')
      assert.strictEqual(examen.referenz, '46111:1995:03')
    })

    it('Attribut „aufgaben“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      const aufgabe =
        examen.aufgaben[
          'Staatsexamen/66116/2021/03/Thema-2/Teilaufgabe-2/Aufgabe-3.tex'
        ]
      assert.strictEqual(aufgabe.aufgabe, 3)
    })

    it('Attribut „aufgabenBaum“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      const aufgabe =
        examen.aufgabenBaum['Thema 1']['Teilaufgabe 1']['Aufgabe 1']
      assert.strictEqual(aufgabe.thema, 1)
      assert.strictEqual(aufgabe.teilaufgabe, 1)
      assert.strictEqual(aufgabe.aufgabe, 1)
    })

    it('Getter Methode „verzeichnisRelativ“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      assert.strictEqual(
        examen.verzeichnisRelativ,
        'Staatsexamen/66116/2021/03'
      )
    })

    it('Getter Methode „fach“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      assert.strictEqual(
        examen.fach,
        'Datenbanksysteme / Softwaretechnologie (vertieft)'
      )
    })

    it('Methode „gibDurchReferenz()“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      assert.ok(
        examen
          .machePfad('test1', 'test2', 'test.tex')
          .includes('66116/2021/03/test1/test2/test.tex')
      )
    })

    it('Getter Methode „macheMarkdownLink()“', function () {
      const examen = sammlung.gibDurchReferenz('66116:2021:03')
      assert.strictEqual(
        examen.macheMarkdownLink('text', 'Thema-1', 'Aufgabe-2.tex'),
        '[text](https://raw.githubusercontent.com/hbschlang/lehramt-informatik/main/Staatsexamen/66116/2021/03/Thema-1/Aufgabe-2.pdf)'
      )
    })
  })
})
