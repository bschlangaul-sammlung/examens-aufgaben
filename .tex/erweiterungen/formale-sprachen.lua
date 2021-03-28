local helfer = require('lehramt-informatik-helfer')

return {
  erzeuge_tiefgestellt = function (eingang)
    local ausgabe = string.gsub(eingang, '(%a)(%d)', '%1\\sb{%2}')
    tex.print(ausgabe)
  end,

  formatiere_ableitung = function (eingang)
    eingang = eingang:gsub('nichts', '$\\emptyset$')
    eingang = eingang:gsub('->', '$\\rightarrow$')
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

  produktions_regeln = function (eingang)
    print(eingang)
    local ausgabe = ''
    local regeln = helfer.split(eingang, ',')
    for index, value in ipairs(regeln) do
      value = value:gsub('->', '&\\rightarrow')
      value = value:gsub('|', '\\,|\\,')
      value = value:gsub('epsilon', '\\epsilon')
      value = value:gsub('EPSILON', '\\epsilon')
      ausgabe = ausgabe .. value .. '\\\\'
    end
    tex.print(ausgabe)
  end
}
