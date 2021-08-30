var assert = require('assert');

const { gibStichwortBaum, gibStichwortVerzeichnis } = require('../dist/stichwort-verzeichnis.js')

const stichwortBaum = gibStichwortBaum()
const stichwortVerzeichnis = gibStichwortVerzeichnis()

describe('stichwort-verzeichnis.ts', function() {
  describe('Klasse StichwortBaum()', function () {
    it('Methode gibUnterBaum()', function() {
      const baum = stichwortBaum.gibUnterBaum('DB')
      assert.strictEqual(baum['Datenbankentwurf']['Entity-Relation-Modell']['IS-A'], true)
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
      assert.ok(stichwortVerzeichnis.verzeichnis['SQL'])
    })

    it('Methode gibAufgabenMitStichwort()', function () {
      const aufgaben = stichwortVerzeichnis.gibAufgabenMitStichwort('DB')
      assert.ok(typeof aufgaben.size === 'number')
    })
  })
})
