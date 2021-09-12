\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-haupt}[2019/10/27 Haupt-Klasse zum
Setzen von Aufgabensammlungen, Theorie-Zusammenfassungen etc.]
\LoadClass[a4paper]{book}

\RequirePackage{bschlangaul-basis}

% Paket „formatierung“ muss vor „literatur“ sein, sonst Option clash
\liLadePakete{formatierung,literatur,makros,aufgaben-metadaten,kopf-fusszeilen}
\RequirePackage{standalone}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}
