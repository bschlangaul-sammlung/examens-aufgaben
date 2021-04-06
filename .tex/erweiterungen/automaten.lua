local helfer = require('lehramt-informatik-helfer')

--- Gib einen Kellerübergang aus
--
-- :param str eingang: 'a, KELLERBODEN, A KELLERBODEN'
--
-- :return: '(a, #: a#)'
local function gib_uebergang_aus (eingang)
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
local function gib_uebergaenge_aus (eingang)
  local elemente = helfer.split(eingang, '%s*;%s*')
  for index, element in ipairs(elemente) do
    gib_uebergang_aus(element)
  end
end
return {
  gib_uebergang_aus = gib_uebergang_aus,

  gib_uebergaenge_aus = gib_uebergaenge_aus,
}
