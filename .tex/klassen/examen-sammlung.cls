\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-examen-sammlung}[2021/01/08 Zum
Zusammenfügen mehrerer Staatsexamen-Scans zu einer PDF-Datei.]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

\RequirePackage{pdfpages}

\author{Hermine Bschlangaul}
\date{}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{formatierung}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}

\AtBeginDocument{
  \maketitle
  \tableofcontents
  \pagebreak
}
