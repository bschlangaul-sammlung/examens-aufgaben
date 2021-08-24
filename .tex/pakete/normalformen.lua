--local helfer = require('helfer')
local helfer = require('lehramt-informatik-helfer')

-- param eingang: A, B
-- return: { A, B }
-- 'nichts' wird durch \emptyset ersetzt
local function setze_menge (eingabe)
  eingabe = eingabe:gsub('nichts', '\\emptyset{}')
  eingabe = eingabe:gsub('NICHTS', '\\emptyset{}')
  local elemente = helfer.split(eingabe, '%s*,%s*')
  return '\\{ \\textit{' .. table.concat(elemente, ', ') .. '} \\}'
end

local function setze_funk_abhaengigkeit(eingabe, fuer_mathe)
  if fuer_mathe == nil then
    fuer_mathe = true
  end
  local seiten = helfer.split(eingabe, '%s*->%s*')
  local linke_seite = seiten[1]
  local rechte_seite = seiten[2]
  if fuer_mathe then
    return setze_menge(linke_seite) .. ' $\\rightarrow$ ' .. setze_menge(rechte_seite)
  else
    return '$' .. setze_menge(linke_seite) .. ' \\rightarrow ' .. setze_menge(rechte_seite) .. '$'
  end
end

local function drucke_funk_abhaengigkeiten(eingabe)
  eingabe = eingabe:gsub("%s+", "")
  local abhaengigkeiten = helfer.split(eingabe, '%s*;%s*')
  local ausgabe = ''
  for index, abhaengigkeit in ipairs(abhaengigkeiten) do
    ausgabe = ausgabe .. '\\hspace{0.6cm}' .. setze_funk_abhaengigkeit(abhaengigkeit) .. ',\\par'
  end
  print(ausgabe)
  tex.print(ausgabe)
end

return {
  drucke_funk_abhaengigkeit = function (eingabe, fuer_mathe)
    tex.print(setze_funk_abhaengigkeit(eingabe, fuer_mathe))
  end,
  drucke_funk_abhaengigkeiten = drucke_funk_abhaengigkeiten,
}
