const assert = require('assert')
const { macheTexPlist } = require('../../dist/aktionen/aufgaben-metadaten.js')

describe('aktionen/aufgaben-metadaten.ts', function () {
  it('Funktion macheTexPlist()', function () {
    assert.strictEqual(macheTexPlist({Titel: 'titel'}), '\\liAufgabenMetadaten{\n  Titel = {titel},\n}')
  })

})
