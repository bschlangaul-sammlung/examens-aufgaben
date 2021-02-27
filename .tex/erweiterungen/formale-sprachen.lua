-- http://lua-users.org/wiki/SplitJoin
local function split(str, pat)
  local t = {}  -- NOTE: use {n = 0} in Lua-5.0
  local fpat = "(.-)" .. pat
  local last_end = 1
  local s, e, cap = str:find(fpat, 1)
  while s do
     if s ~= 1 or cap ~= "" then
        table.insert(t, cap)
     end
     last_end = e+1
     s, e, cap = str:find(fpat, last_end)
  end
  if last_end <= #str then
     cap = str:sub(last_end)
     table.insert(t, cap)
  end
  return t
end

return {
  erzeuge_tiefgestellt = function (eingang)
    local ausgabe = string.gsub(eingang, '(%a)(%d)', '%1\\sb{%2}')
    return tex.print(ausgabe)
  end,

  produktions_regeln = function (eingang)
    print(eingang)
    local ausgabe = ''
    local regeln = split(eingang, ',')
    for index, value in ipairs(regeln) do
      value = value:gsub('->', '&\\rightarrow')
      value = value:gsub('|', '\\,|\\,')
      value = value:gsub('epsilon', '\\epsilon')
      ausgabe = ausgabe .. value .. '\\\\'
    end
    tex.print(
      '$P = \\{$' ..
      '\\vspace{-0.2cm}' ..
      '\\begin{align*}' .. ausgabe .. '\\end{align*}' ..
      '\\vspace{-1.5cm}' ..
      '\\begin{flushright}' .. '\\}' .. '\\end{flushright}'
    )
  end
}
