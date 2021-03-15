--local helfer = require('helfer')
local helfer = require('lehramt-informatik-helfer')

local function text_in_buchstaben_teilen (text)
  local ergebnis = {}
  if string.find(text, ',') then
    ergebnis = helfer.split(text, ' *, *')
  else
    for buchstabe in text:gmatch(".") do
      table.insert(ergebnis, buchstabe)
    end
  end
  return ergebnis
end

-- param eingang: A, B
-- return: { A, B }
local function formatiere_menge (eingabe)
  local elemente = helfer.split(eingabe, '%s*,%s*')
  return '\\{ ' .. table.concat(elemente, ', ') .. ' \\}'
end

local function formatiere_funktionale_abhaengigkeit(eingabe)
  local seiten = helfer.split(eingabe, '%s*->%s*')
  local linke_seite = seiten[1]
  local rechte_seite = seiten[2]
  return formatiere_menge(linke_seite) .. ' $\\rightarrow$ ' .. formatiere_menge(rechte_seite)
end

local function formatiere_funktionale_abhaengigkeiten(eingabe)
  local abhaengigkeiten = helfer.split(eingabe, '%s*;%s*')
  local ausgabe = ''
  for index, abhaengigkeit in ipairs(abhaengigkeiten) do
    ausgabe = ausgabe .. '\\item ' .. formatiere_funktionale_abhaengigkeit(abhaengigkeit) .. ' '
  end

  ausgabe = '\\begin{compactitem}' .. ausgabe .. '\\end{compactitem}'

  print(ausgabe)
  tex.print(ausgabe)
end

return {
  teilen = function (eingang)
    local buchstaben = text_in_buchstaben_teilen(eingang)
    local ergebnis = table.concat(buchstaben, ', ')
    return ergebnis
  end,

  formatiere_funktionale_abhaengigkeiten = formatiere_funktionale_abhaengigkeiten,
}
