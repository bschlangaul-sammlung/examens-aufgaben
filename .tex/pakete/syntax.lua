KONF = {
  -- \LehramtInformatikRepository
  tex_repo_lokaler_pfad = nil,

  -- \LehramtInformatikGithubDomain
  github_domain = 'https://github.com',

  -- \LehramtInformatikGithubRawDomain
  github_raw_domain = 'https://raw.githubusercontent.com',

  -- \LehramtInformatikGithubTexRepo
  github_tex_repo = 'hbschlang/lehramt-informatik',

  -- \LehramtInformatikGithubCodeRepo
  github_code_repo = 'hbschlang/Java-Didaktik-Beispiele',

  -- src/main/java/org/bschlangaul
  code_main = 'src/main/java/org/bschlangaul',

  -- src/test/java/org/bschlangaul
  code_test = 'src/test/java/org/bschlangaul',

  -- \LehramtInformatikGitBranch
  git_branch = 'main',
}

local luakeys = require('luakeys')

local function normalisiere_klasse(pfad)
  pfad = string.gsub(pfad, '.java', '')
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

local function gib_github_url(relativer_pfad)
  return KONF.github_raw_domain .. '/' ..
    KONF.github_code_repo .. '/' ..
    KONF.git_branch ..'/' ..
    KONF.code_main .. '/'
    .. normalisiere_klasse(relativer_pfad)
end

--- Gib den absoluten Pfad zu einer Java-Datei.
--
-- @tparam str relativer_pfad Ein relativer Pfad zu einer Java-Datei
--   (relativ zu src/main/java/org/bschlangaul). Kann die Endung .java
--   enthalten, muss aber nicht

-- @return Der absolute lokale Dateipfad
local function gib_absoluten_pfad(relativer_pfad, ist_test)
  local relativer_code_pfad
  if ist_test == true then
    relativer_code_pfad = KONF.code_test
  else
    relativer_code_pfad = KONF.code_main
  end
  return KONF.tex_repo_lokaler_pfad .. '/Code/' ..
  relativer_code_pfad .. '/' ..
    normalisiere_klasse(relativer_pfad) .. '.java'
end

-- Examen

local function gib_relativen_examens_pfad(nummer, jahr, monat, pfad)
  return 'examen/examen_' .. nummer ..
    '/jahr_' .. jahr .. '/' ..
    monat_zu_jahreszeit(monat) .. '/' .. normalisiere_klasse(pfad) .. '.java'
end

local function gib_github_examen_url(nummer, jahr, monat, pfad)
  return gib_github_url(gib_relativen_examens_pfad(nummer, jahr, monat, pfad))
end

local export = {
  importiere_konfiguration = function(schluessel, wert)
    KONF[schluessel] = wert
  end,

  -- absoluten pfad

  drucke_absoluten_pfad = function(relativer_pfad)
    tex.print(gib_absoluten_pfad(relativer_pfad))
  end,

  drucke_absoluten_examens_pfad = function(nummer, jahr, monat, pfad)
    tex.print(gib_absoluten_pfad(gib_relativen_examens_pfad(nummer, jahr, monat, pfad)))
  end,

  -- relativen

  drucke_relativen_pfad = function(relativer_pfad)
    tex.print(gib_relativen_pfad(relativer_pfad))
  end,

  drucke_relativen_examens_pfad = function(nummer, jahr, monat, pfad)
    tex.print(gib_relativen_examens_pfad(nummer, jahr, monat, pfad))
  end,

  -- url

  drucke_github_url = function(relativer_pfad)
    tex.print(gib_github_url(relativer_pfad))
  end,

  drucke_github_examens_url = function(nummer, jahr, monat, pfad)
    tex.print(gib_github_examen_url(nummer, jahr, monat, pfad))
  end,

  -- Funktioniert nicht: Package xkeyval Error: `firstline=3,' undefined in families `minted@opt@cmd'
  normalisiere_optionen = function(optionen_str)
    local optionen = luakeys.parse(optionen_str)
    if optionen['firstline'] == nil then
      optionen['firstline'] = 3
    end
    tex.print(luakeys.render(optionen))
  end
}

return export
