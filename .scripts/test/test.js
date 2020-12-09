var assert = require('assert');

const { stichwortBaum, stichwortVerzeichnis } = require('../dist/stichwort-verzeichnis.js')

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
