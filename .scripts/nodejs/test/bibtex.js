const assert = require('assert')
const { leseBibDatei, gibBigtexSammlung } = require('../dist/bibtex.js')

describe('bibtex.ts', function () {
  it('Funktion leseBibDatei()', function () {
    const ausgabe = leseBibDatei('Quellen/10_DB.bib')
    assert.strictEqual(ausgabe.entries['1'].entry_key, 'db:fs:1')
  })

  it('Funktion „gibBigtexSammlung()“', function () {
    const sammlung = gibBigtexSammlung()
    assert.deepStrictEqual(sammlung.index['db:fs:1'], ['DB_1 ER_Relationenmodell'])
  })
})
