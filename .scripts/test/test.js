var assert = require('assert');

const { stichwortBaum, stichwortVerzeichnis } = require('../dist/sammlung.js')

const { ExamenSammlung } = require('../dist/examen.js')

describe('stichwort-verzeichnis.js', function() {
  describe('Klasse StichwortBaum()', function () {
    it('Methode gibUnterBaum()', function() {
      const baum = stichwortBaum.gibUnterBaum('DB')
      assert.strictEqual(baum['Entity-Relation-Modell'], true)
    })

    it('Methode gibFlacheListe()', function() {
      const liste = stichwortBaum.gibFlacheListe('DB')
      assert.ok(liste.has('DB'))
      assert.ok(liste.has('SQL'))
      assert.ok(!liste.has('OOMUP'))
    })
  })

  describe('Klasse StichwortVerzeichnis()', function () {
    it('Attribut verzeichnis', function() {
      assert.ok(stichwortVerzeichnis.verzeichnis['DB'])
    })

    it('Attribut aufgaben', function() {
      assert.ok(stichwortVerzeichnis.aufgaben['Staatsexamen/66116/2019/09/Thema-1/Teilaufgabe-2/Aufgabe-2.tex'])
    })

    it('Methode gibAufgabenMitStichwort()', function () {
      const aufgaben = stichwortVerzeichnis.gibAufgabenMitStichwort('DB')
      assert.ok(typeof aufgaben.size === 'number')
    })
  })
})

describe('examen.js', function() {
  describe('Klasse ExamenSammlung()', function () {
    it('Initialisierung', function() {
      const sammlung = new ExamenSammlung()
      const examen = sammlung.gibDurchReferenz('46111:1995:03')
      assert.strictEqual(examen.nummer, 46111)
      assert.strictEqual(examen.jahr, 1995)
      assert.strictEqual(examen.monat, 3)
      assert.strictEqual(examen.jahreszeit, 'Frühjahr')
      assert.strictEqual(examen.referenz, '46111:1995:03')
    })
  })
})
