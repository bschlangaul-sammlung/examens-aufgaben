local function sortieren(input)
  -- tex/generic/pgf/libraries/shapes/pgflibraryshapes.multipart.code.tex
  -- line 305
  local function convert_multipart_number_to_word(number)
    if number == 1 then return 'one'
    elseif number == 2 then return 'two'
    elseif number == 3 then return 'three'
    elseif number == 4 then return 'four'
    elseif number == 5 then return 'five'
    elseif number == 6 then return 'six'
    elseif number == 7 then return 'seven'
    elseif number == 8 then return 'eight'
    elseif number == 9 then return 'nine'
    elseif number == 10 then return 'ten'
    elseif number == 11 then return 'eleven'
    elseif number == 12 then return 'twelve'
    elseif number == 13 then return 'thirteen'
    elseif number == 14 then return 'fourteen'
    elseif number == 15 then return 'fifteen'
    elseif number == 16 then return 'sixteen'
    elseif number == 17 then return 'seventeen'
    elseif number == 18 then return 'eighteen'
    elseif number == 19 then return 'nineteen'
    elseif number == 20 then return 'twenty'
    end
  end

  local function format_swap_arrows(first, last)
    if first and last then
      return '\\draw[latex-latex] ' ..
        '(a.' .. convert_multipart_number_to_word(first) .. ' north) ' ..
        '-- ++(0,0.25) -| ' ..
        '(a.' .. convert_multipart_number_to_word(last) .. ' north);'
    else
      return ''
    end
  end

  local size = 0
  local numbers = {}
  local swap_first, swap_last
  --- 1 >4 3 <2
  for number in input:gmatch("%S+") do
    size = size + 1
    local first_char = number:sub(1, 1)
    if first_char == '>' then
      swap_first = size
      number = number:gsub('>', '')
    elseif first_char == '<' then
      swap_last = size
      number = number:gsub('<', '')
    end
    table.insert(numbers, number)
  end

  local output_nodeparts = {}

  local counter = 0
  for _, number in pairs(numbers) do
    counter = counter +  1
    table.insert(
      output_nodeparts,
      '  \\nodepart{' .. convert_multipart_number_to_word(counter) .. '} ' .. number
    )
  end

  local output = {
    '\\begin{tikzpicture}[my shape/.style={',
    '  anchor=center,',
    '  draw,',
    '  font=\\large,',
    '  inner sep=3pt,',
    '  rectangle split horizontal,',
    '  rectangle split parts=' .. size .. ',',
    '  rectangle split,',
    '}]',
    '\\node [my shape] (a)',
    '{',
    table.concat(output_nodeparts, ' '),
    '};',
    format_swap_arrows(swap_first, swap_last),
    '\\end{tikzpicture}'
  }

  tex.print(output)
end

return sortieren
