const assert = require('assert')
const { machePlist } = require('../dist/tex.js')

describe('aktionen/aufgaben-metadaten.ts', function () {
  it('Funktion macheTexPlist()', function () {
    assert.strictEqual(
      machePlist('liAufgabenMetadaten', { Titel: 'titel' }, ['Titel']),
      '\\liAufgabenMetadaten{\n  Titel = {titel},\n}'
    )
  })
})
