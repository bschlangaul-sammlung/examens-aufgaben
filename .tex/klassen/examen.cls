\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-examen}[2021/06/10 Zum Einbinden von
mehreren Aufgaben zu einem Examen.]
\LoadClass[a4paper,oneside]{book}

\RequirePackage{lehramt-informatik-basis}

\author{Hermine Bschlangaul}
\date{}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{formatierung}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}

\ExplSyntaxOn

\ExplSyntaxOff
