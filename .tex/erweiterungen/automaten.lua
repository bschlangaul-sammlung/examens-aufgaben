local helfer = require('lehramt-informatik-helfer')

--- Gib einen Kellerübergang aus
--
-- :param str eingang: 'a, KELLERBODEN, A KELLERBODEN'
--
-- :return: '(a, #: a#)'
local function gib_keller_uebergang (eingang)
  local elemente = helfer.split(eingang, '%s*,%s*')
  for index, element in ipairs(elemente) do
    element = element:gsub('epsilon', '\\epsilon')
    element = element:gsub('EPSILON', '\\epsilon')
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
-- \liKellerUebergang{epsilon raute epsilon, b A epsilon}
local function gib_keller_uebergaenge (eingang)
  local elemente = helfer.split(eingang, '%s*;%s*')
  for index, element in ipairs(elemente) do
    gib_keller_uebergang(element)
  end
end

local function gib_turing_uebergang (eingang)
  local elemente = helfer.split(eingang, '%s*,%s*')

  local zustand = helfer.trim(elemente[1])
  zustand = helfer.konvertiere_tiefgestellt(zustand)

  local zeichen = helfer.trim(elemente[2])
  zeichen = zeichen:gsub('LEER', '\\liTuringLeerzeichen')
  zeichen = zeichen:gsub('leer', '\\liTuringLeerzeichen')

  local bewegung = helfer.trim(elemente[3])
  bewegung = bewegung:gsub('l', 'L')
  bewegung = bewegung:gsub('r', 'R')

  local ausgabe = '(' ..
    zustand .. ', ' ..
    zeichen .. ', ' ..
    bewegung .. ')'
  tex.print(ausgabe)
end

return {
  gib_keller_uebergang = gib_keller_uebergang,
  gib_keller_uebergaenge = gib_keller_uebergaenge,
  gib_turing_uebergang = gib_turing_uebergang,
}
