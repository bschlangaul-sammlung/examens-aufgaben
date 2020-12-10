function text_in_buchstaben_teilen (text)
  local ergebnis = {}
  for buchstabe in text:gmatch(".") do
    table.insert(ergebnis, buchstabe)
  end
  return ergebnis
end

return {
  teilen = function (eingang)
    print('eingang')
    print(eingang)
    local buchstaben = text_in_buchstaben_teilen(eingang)
    local ergebnis = table.concat(buchstaben, ', ')
    print(ergebnis)
    return ergebnis
  end
}
