local helfer = require('bschlangaul-helfer')

return {
  erzeuge_tiefgestellt = function (eingang)
    local ausgabe = string.gsub(eingang, '(%a)(%d)', '%1\\sb{%2}')
    tex.print(ausgabe)
  end,

  formatiere_ableitung = function (eingang)
    eingang = eingang:gsub('nichts', '\\emptyset')
    eingang = eingang:gsub('->', '\\vdash')
    tex.print(eingang)
  end,

  erzeuge_zustandsnamens_liste = function (buchstabe, nummern)
    local nummern_tabelle = helfer.split(nummern, ',')
    for index, nr in ipairs(nummern_tabelle) do
      -- \sb{} damit der Unterstrich vermieden wird, denn der wird in
      -- LaTeX3 Funktionen umdefiniert.
      nummern_tabelle[index] = buchstabe .. '\\sb{' .. nr .. '}'
    end
    tex.print(table.concat(nummern_tabelle, ', '))
  end,

  produktions_regeln = function (eingang, inline)
    if inline == nil then
      inline = false
    end
    print(eingang)
    local ausgabe = ''
    local regeln = helfer.split(eingang, ',')
    for index, value in ipairs(regeln) do
      if not inline then
        value = value:gsub('->', '&->')
      end
      value = value:gsub('->', '\\rightarrow')
      value = value:gsub('|', '\\,|\\,')
      value = value:gsub('epsilon', '\\varepsilon')
      value = value:gsub('EPSILON', '\\varepsilon')
      if not inline then
        value = value .. '\\\\'
      else
        value = value .. ', '
      end
      ausgabe = ausgabe .. value
    end
    ausgabe = string.gsub(ausgabe, ', $', '')
    tex.print(ausgabe)
  end
}
