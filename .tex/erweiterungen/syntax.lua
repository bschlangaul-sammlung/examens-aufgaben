KONF = {}

local function normalisiere_klasse(pfad)
  pfad = pfad.gsub(pfad,'.java', '')
  return pfad
end

local function monat_zu_jahreszeit(monat)
  local ausgabe = ''
  if monat == '03' or monat == 'fruehjahr' then
    ausgabe = 'fruehjahr'
  elseif monat == '09' or monat == 'herbst' then
    ausgabe = 'herbst'
  end
  return ausgabe
end

local function gib_relativen_examens_pfad(nummer, jahr, monat, pfad)
  return 'examen/examen_' .. nummer ..
    '/jahr_' .. jahr .. '/' ..
    monat_zu_jahreszeit(monat) .. '/' .. normalisiere_klasse(pfad) .. '.java'
end

local function gib_raw_examen_url(nummer, jahr, monat, pfad)
  return KONF.github_raw_domain .. '/' ..
    KONF.github_code_repo .. '/' ..
    KONF.git_branch ..'/' ..
    KONF.code_main .. '/'
    .. gib_relativen_examens_pfad(nummer, jahr, monat, pfad)
end

local export = {
  importiere_konfiguration = function(schluessel, wert)
    KONF[schluessel] = wert
  end,
  drucke_relativen_examens_pfad = function(nummer, jahr, monat, pfad)
    tex.print(gib_relativen_examens_pfad(nummer, jahr, monat, pfad))
  end,

  drucke_raw_examen_url = function(nummer, jahr, monat, pfad)
    tex.print(gib_raw_examen_url(nummer, jahr, monat, pfad))
  end
}

return export
