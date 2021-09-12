\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-theorie}[2021/09/12 Klasse zum
Setzen von Theorie-Zusammenfassungen]
\LoadClass[a4paper]{book}

\RequirePackage{bschlangaul-basis}

% Paket „formatierung“ muss vor „literatur“ sein, sonst Option clash
\liLadePakete{formatierung,literatur,makros,aufgaben-metadaten,kopf-fusszeilen}
\RequirePackage{standalone}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}
