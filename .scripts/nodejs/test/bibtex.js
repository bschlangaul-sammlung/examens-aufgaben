const assert = require('assert')
const { leseBibDatei, gibBibtexSammlung } = require('../dist/bibtex.js')

describe('bibtex.ts', function () {
  it('Funktion leseBibDatei()', function () {
    const ausgabe = leseBibDatei('Quellen/10_DB.bib')
    assert.strictEqual(ausgabe.entries['1'].entry_key, 'db:fs:1')
  })

  it('Funktion „gibBibtexSammlung()“', function () {
    const sammlung = gibBibtexSammlung()
    assert.deepStrictEqual(sammlung.index['db:fs:1'], ['DB_1 ER_Relationenmodell'])
  })
})
