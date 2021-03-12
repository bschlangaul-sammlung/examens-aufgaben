local helfer = require('lehramt-informatik-helfer')

return {
  formatiere_uebergang = function (eingang)
    local elemente = helfer.split(eingang, ' ')
    for index, element in ipairs(elemente) do
      element = element:gsub('raute', '\\#')
      element = element:gsub('epsilon', '\\epsilon')
      elemente[index] = element
    end
    tex.print(table.concat(elemente, ', '))
  end,
}
