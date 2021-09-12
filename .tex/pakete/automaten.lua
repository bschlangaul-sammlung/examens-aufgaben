local helfer = require('bschlangaul-helfer')

--- Gib einen Kellerübergang aus
--
-- :param str eingang: 'a, KELLERBODEN, A KELLERBODEN'
--
-- :return: '(a, #: a#)'
local function drucke_einen_keller_uebergang (eingang)
  local elemente = helfer.split(eingang, '%s*,%s*')
  for index, element in ipairs(elemente) do
    element = element:gsub('epsilon', '\\varepsilon{}')
    element = element:gsub('EPSILON', '\\varepsilon{}')
    element = element:gsub('KELLERBODEN', '\\#')
    element = element:gsub('kellerboden', '\\#')
    element = element:gsub('raute', '\\#')
    element = element:gsub('RAUTE', '\\#')
    elemente[index] = element
  end
  local eingabe_zeichen = helfer.trim(elemente[1])
  local aktuelles_kellerzeichen = helfer.trim(elemente[2])
  local keller_veraenderung = helfer.trim(elemente[3])
  keller_veraenderung = string.gsub(keller_veraenderung, '%s+', '')

  local ausgabe = '(' ..
    eingabe_zeichen .. ', ' ..
    aktuelles_kellerzeichen .. ': ' ..
    keller_veraenderung .. ')\\\\'
  tex.print(ausgabe)
end

--- Gib mehrere Kellerübergänge aus.
-- \bKellerUebergang{EPSILON, KELLERBODEN, EPSILON; b, A, EPSILON}
local function drucke_keller_uebergaenge (eingang)
  local elemente = helfer.split(eingang, '%s*;%s*')
  for index, element in ipairs(elemente) do
    drucke_einen_keller_uebergang(element)
  end
end

--
-- @tparam string eingang: z12 ☐ L
local function gib_einen_turing_uebergang (eingang)
  local elemente = helfer.split(eingang, '%s*,%s*')
  for index, element in ipairs(elemente) do
    element = element:gsub('LEER', '\\bTuringLeerzeichen')
    element = element:gsub('leer', '\\bTuringLeerzeichen')
    element = element:gsub('☐', '\\bTuringLeerzeichen')
    elemente[index] = element
  end

  local zustand_oder_lese = helfer.trim(elemente[1])
  zustand_oder_lese = helfer.konvertiere_tiefgestellt(zustand_oder_lese)

  local schreibe = helfer.trim(elemente[2])

  local richtung = helfer.trim(elemente[3])
  richtung = richtung:gsub('l', 'L')
  richtung = richtung:gsub('r', 'R')

  local ausgabe = '(\\,' ..
    '$' .. zustand_oder_lese .. '$' .. ': ' ..
    '$' .. schreibe .. '$' .. ', ' ..
    richtung .. '\\,)'
  return ausgabe
end

local function drucke_turing_uebergaenge (eingang)
  local elemente = helfer.split(eingang, '%s*;%s*')
  for index, element in ipairs(elemente) do
    tex.print(gib_einen_turing_uebergang(element) .. '\\\\')
  end
end

return {
  drucke_keller_uebergaenge = drucke_keller_uebergaenge,
  gib_einen_turing_uebergang = gib_einen_turing_uebergang,
  drucke_turing_uebergaenge = drucke_turing_uebergaenge,
}
