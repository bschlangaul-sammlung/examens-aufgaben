\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-examen}[2021/06/10 Zum Einbinden von
mehreren Aufgaben zu einem Examen.]
\LoadClass[a4paper,oneside]{book}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{lehramt-informatik-basis}
%    \end{macrocode}

%    \begin{macrocode}
\author{Hermine Bschlangaul}
\date{}
%    \end{macrocode}

% Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\liLadePakete{formatierung}
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

% \begin{macro}{\liSetzeExamen}
%    \begin{macrocode}
\def\liSetzeExamen#1#2#3{
  \tl_gset:Nn \g_auf_examen_nummer_tl { #1 }
  \tl_gset:Nn \g_auf_examen_jahr_tl { #2 }
  \tl_gset:Nn \g_auf_examen_monat_tl { #3 }
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\liSetzeExamenThemaNr}
%    \begin{macrocode}
\def\liSetzeExamenThemaNr#1{
  \tl_gset:Nn \g_auf_examen_thema_nr_tl { #1 }
  \section{Thema~Nr.~#1}
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\liSetzeExamenTeilaufgabeNr}
%    \begin{macrocode}
\def\liSetzeExamenTeilaufgabeNr#1{
  \tl_gset:Nn \g_auf_examen_teilaufgabe_nr_tl { #1 }
  \subsection{Teilaufgabe~Nr.~#1}
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\liBindeAufgabeEin}
%    \begin{macrocode}
\def\liBindeAufgabeEin#1{
  \tl_gset:Nn \g_auf_examen_aufgabe_nr_tl { #1 }
  \input{
    \LehramtInformatikRepository /
    Staatsexamen /
    \g_auf_examen_nummer_tl /
    \g_auf_examen_jahr_tl /
    \g_auf_examen_monat_tl /
    \tl_if_empty:NTF \g_auf_examen_thema_nr_tl {} {
      Thema - \g_auf_examen_thema_nr_tl /
    }
    \tl_if_empty:NTF \g_auf_examen_teilaufgabe_nr_tl {} {
      Teilaufgabe - \g_auf_examen_teilaufgabe_nr_tl /
    }
    Aufgabe - \g_auf_examen_aufgabe_nr_tl .tex
  }
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\liSetzeAufgabenTitel}
%    \begin{macrocode}
\def\liSetzeAufgabenTitel#1{

}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
