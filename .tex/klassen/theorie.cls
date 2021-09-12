\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-theorie}[2021/09/12 Klasse zum
Setzen von Theorie-Zusammenfassungen]
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass{bschlangaul-basis}
%    \end{macrocode}

% Paket „formatierung“ muss vor „literatur“ sein, sonst Option clash
%    \begin{macrocode}
\liLadePakete{
  formatierung,
  literatur,
  makros,
  aufgaben-metadaten,
  kopf-fusszeilen
}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{standalone}
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
