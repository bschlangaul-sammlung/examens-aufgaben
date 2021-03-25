local helfer = require('lehramt-informatik-helfer')

--- Gib einen Kellerübergang aus
local function gib_uebergang_aus (eingang)
  local elemente = helfer.split(eingang, '%s+')
  for index, element in ipairs(elemente) do
    element = element:gsub('raute', '\\#')
    element = element:gsub('epsilon', '\\epsilon')
    elemente[index] = element
  end
  local ausgabe = '(' ..
    elemente[1] .. ', ' ..
    elemente[2] .. ': ' ..
    elemente[3] .. ')\\\\'
  tex.print(ausgabe)
end

--- Gib mehrere Kellerübergänge aus.
-- \liKellerUebergang{epsilon raute epsilon, b A epsilon}
local function gib_uebergaenge_aus (eingang)
  local elemente = helfer.split(eingang, '%s*,%s*')
  for index, element in ipairs(elemente) do
    gib_uebergang_aus(element)
  end
end
return {
  gib_uebergang_aus = gib_uebergang_aus,

  gib_uebergaenge_aus = gib_uebergaenge_aus,
}
