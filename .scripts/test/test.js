var assert = require('assert');

const { stichwortBaum } = require('../dist/stichwort-verzeichnis.js')

describe('stichwort-verzeichnis.js', function() {
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
