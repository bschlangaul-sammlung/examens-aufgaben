\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-haupt}[2019/10/27 Klasse zum
Setzen der Haupt-Datei, Bschlangaul-Sammlung.tex d.h. des wichtigsten
Dokuments, das alles zusammenfasst.]
%    \end{macrocode}

% Lade die wichtigsten Pakete. Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\LoadClass[pakete={
  formatierung,
  literatur-dummy,
  makros,
  aufgaben-einbinden,
  aufgaben-metadaten,
  abmessung,
  typographie,
  grafik,
  meta
}]{bschlangaul-basis}
%    \end{macrocode}

%    \begin{macrocode}
\bLadeAllePakete
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

%    \begin{macrocode}
\setze_kopf_fusszeilen:nn {} {}
%    \end{macrocode}

%    \begin{macrocode}
\AddToHook { begindocument }
{
  \repariere_kopfzeile_breite:
  \titel_seite:nn
  {
    {
      \Huge
      Die~komplette~Sammlung
    }

  }
  {
    Alle~Aufgaben
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
