\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-examen}[2021/06/10 Zum Einbinden von
mehreren Aufgaben zu einem Examen.]
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass[a4paper,oneside,12pt]{book}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{bschlangaul-basis}
%    \end{macrocode}

% Lade die wichtigsten Pakete. Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\liLadePakete{
  formatierung,
  literatur-dummy,
  makros,
  aufgaben-metadaten,
  abmessung,
  typographie,
  grafik,
  meta
}
%    \end{macrocode}

% Formatierung für die Überschriften setzen.
%    \begin{macrocode}
\RequirePackage{titlesec}
\titleformat{\section}{\huge\filcenter\bfseries}{\thesection}{1em}{}
\newcommand{\sectionbreak}{\clearpage}
\setcounter{secnumdepth}{0}
%    \end{macrocode}

%    \begin{macrocode}
\liLadeAllePakete
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{standalone}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

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

% \begin{macro}{\liAufgabenMetadaten}
% Das Metadaten-Makro überschreiben
%    \begin{macrocode}
\def\liAufgabenMetadaten#1{
  \liMetaSetze{#1}
  \subsubsection{\_gib_aufgaben_titel:}
}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\cs_new:Npn \titel_seite:
{
  \pagestyle{empty}
  \begin{center}
    \large
    Erste~Staatsprüfung~für~ein~Lehramt~an~öffentlichen~Schulen \par

    \vspace{0.5cm}

    Fach~Informatik \par

    \vfill

    \liGrafikLogo[width=8cm]\par
    \bigskip
    Die~Bschlangaul-Sammlung \par
    {\footnotesize \liMetaHermineBschlangaulAndFriends} \par

    \vfill

    {
      \bfseries\Huge

      \g_auf_examen_jahreszeit_tl \par

      \g_auf_examen_jahr_tl \par
    }

    \vspace{2cm}

    {\LARGE \g_auf_examen_nummer_tl \par}

    \vspace{0.5cm}

    \g_auf_examen_fach_tl \par

    \vspace{3cm}

    Aufgabenstellungen~mit~Lösungsvorschlägen \par

  \end{center}

  \vfill
}
%    \end{macrocode}

%    \begin{macrocode}
\cs_new:Npn \inhalts_verzeichnis: {
  % für den Abstand vor den section im Inhaltsverzeichnis
  % https://tex.stackexchange.com/questions/241445/how-to-control-spacing-in-toc-for-different-sections
  \setlength{\cftbeforesecskip}{1.5cm}
  \setlength{\cftbeforesubsecskip}{0.5cm}
  \renewcommand{\cftsubsecafterpnum}{\vspace{\cftbeforesubsecskip}}
  \setlength{\cftbeforesubsubsecskip}{0.1cm}
  \renewcommand{\contentsname}{Aufgabenübersicht}
  \tableofcontents
}
%    \end{macrocode}

%    \begin{macrocode}
\setcounter{tocdepth}{4}
\RequirePackage[titles]{tocloft}
\AddToHook{begindocument}{
  \titel_seite:

  \clearpage

  \inhalts_verzeichnis:

  \vfill

  \liLogoTextProjekt
  \bigskip

  \liLogoTextCCLizenz
  \bigskip

  \clearpage
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
