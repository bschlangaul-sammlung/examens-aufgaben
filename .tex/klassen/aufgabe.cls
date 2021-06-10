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

\tl_new:N \l_auf_titel_tl
\tl_new:N \l_auf_thematik_tl
\tl_new:N \l_auf_fussnote_tl
\tl_new:N \l_auf_fussnote_seite_tl
\tl_new:N \l_auf_relativer_pfad_tl
\tl_new:N \l_auf_examen_nummer_tl
\tl_new:N \l_auf_examen_jahr_tl
\tl_new:N \l_auf_examen_halbjahr_tl
\tl_new:N \l_auf_examen_thema_tl
\tl_new:N \l_auf_examen_teilaufgabe_tl
\tl_new:N \l_auf_examen_aufgabe_tl

\keys_define:nn { aufgabentitel }
{
  titel .tl_set:N = \l_auf_titel_tl,
  thematik .tl_set:N = \l_auf_thematik_tl,
  fussnote .tl_set:N = \l_auf_fussnote_tl,
  fussnote seite .tl_set:N = \l_auf_fussnote_seite_tl,
  relativer pfad .tl_set:N = \l_auf_relativer_pfad_tl,
  examen nummer .tl_set:N = \l_auf_examen_nummer_tl,
  examen jahr .tl_set:N = \l_auf_examen_jahr_tl,
  examen halbjahr .tl_set:N = \l_auf_examen_halbjahr_tl,
  examen thema .tl_set:N = \l_auf_examen_thema_tl,
  examen teilaufgabe .tl_set:N = \l_auf_examen_teilaufgabe_tl,
  examen aufgabe .tl_set:N = \l_auf_examen_aufgabe_tl,
}

\def\liSetzeAufgabenTitel#1{
  \tl_clear:N \l_auf_titel_tl
  \tl_clear:N \l_auf_thematik_tl
  \tl_clear:N \l_auf_fussnote_tl
  \tl_clear:N \l_auf_fussnote_seite_tl
  \tl_clear:N \l_auf_relativer_pfad_tl
  \tl_clear:N \l_auf_examen_nummer_tl
  \tl_clear:N \l_auf_examen_jahr_tl
  \tl_clear:N \l_auf_examen_halbjahr_tl
  \tl_clear:N \l_auf_examen_thema_tl
  \tl_clear:N \l_auf_examen_teilaufgabe_tl
  \tl_clear:N \l_auf_examen_aufgabe_tl

  \keys_set:nn { aufgabentitel } {
    #1
  }

  Titel „\l_auf_titel_tl“
}

\ExplSyntaxOff
