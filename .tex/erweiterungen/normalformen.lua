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

return {
  teilen = function (eingang)
    local buchstaben = text_in_buchstaben_teilen(eingang)
    local ergebnis = table.concat(buchstaben, ', ')
    return ergebnis
  end
}
