\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-aufgabe}[2019/10/27 Minimale Klasse zu
Setzen einer Aufgabe]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{formatierung,literatur-dummy,makros}

% Momentan nur ein Dummy Makro
\def\liAufgabenTitel#1{}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}

\ExplSyntaxOn

\def\liSetzeAufgabenTitel#1{
  \_setze_variablen_zurueck:

  \tl_clear:N \g_auf_examen_teilaufgabe_nr_tl

  \keys_set:nn { aufgabentitel } {
    #1
  }

  \_setze_relativen_pfad:

  \tl_if_empty:NTF \g_auf_titel_tl
  {
    \msg_fatal:nn { aufgabentitel } { kein-titel }
  }
  {
  }

  \_gib_examen_titel: {}

  \section{\_gib_aufgaben_titel:}

  \bigskip
}

\ExplSyntaxOff
