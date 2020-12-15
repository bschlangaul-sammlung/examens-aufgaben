\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-haupt}[2019/10/27 Haupt-Klasse zum
Setzen von Aufgabensammlungen, Theorie-Zusammenfassungen etc.]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{formatierung,literatur,makros}
\RequirePackage{standalone}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}
