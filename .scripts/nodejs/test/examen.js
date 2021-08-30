var assert = require('assert')

const { gibExamenSammlung } = require('../dist/examen.js')

describe('examen.js', function () {
  describe('Klasse ExamenSammlung()', function () {
    it('Initialisierung', function () {
      const sammlung = gibExamenSammlung()
      const examen = sammlung.gibDurchReferenz('46111:1995:03')
      assert.strictEqual(examen.nummer, 46111)
      assert.strictEqual(examen.jahr, 1995)
      assert.strictEqual(examen.monat, 3)
      assert.strictEqual(examen.jahreszeit, 'Frühjahr')
      assert.strictEqual(examen.referenz, '46111:1995:03')
    })
  })
})
