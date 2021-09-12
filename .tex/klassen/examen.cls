\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-examen}[2021/06/10 Zum Einbinden von
mehreren Aufgaben zu einem Examen.]
%    \end{macrocode}

% Lade die wichtigsten Pakete. Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\LoadClass[pakete={
  formatierung,
  literatur-dummy,
  makros,
  aufgaben-einbinden,
  aufgaben-metadaten,
  abmessung,
  typographie,
  grafik,
  meta
}]{bschlangaul-basis}
%    \end{macrocode}

% Formatierung für die Überschriften setzen.
%    \begin{macrocode}
\RequirePackage{titlesec}
\titleformat{\section}{\huge\filcenter\bfseries}{\thesection}{1em}{}
\newcommand{\sectionbreak}{\clearpage}
\setcounter{secnumdepth}{0}
%    \end{macrocode}

%    \begin{macrocode}
\bLadeAllePakete
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

% \begin{macro}{\bSetzeExamenThemaNr}
%    \begin{macrocode}
\def\bSetzeExamenThemaNr#1{
  \tl_gset:Nn \g_thema_nr_tl { #1 }
  \section{Thema~Nr.~#1}
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bSetzeExamenTeilaufgabeNr}
%    \begin{macrocode}
\def\bSetzeExamenTeilaufgabeNr#1{
  \tl_gset:Nn \g_teilaufgabe_nr_tl { #1 }
  \subsection{Teilaufgabe~Nr.~#1}
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bBindeAufgabeEin}
%    \begin{macrocode}
\def\bBindeAufgabeEin#1{
  \tl_gset:Nn \g_aufgabe_nr_tl { #1 }
  \input{
    \LehramtInformatikRepository /
    Staatsexamen /
    \g_einzelpruefungs_nr_tl /
    \g_jahr_tl /
    \g_monat_tl /
    \tl_if_empty:NTF \g_thema_nr_tl {} {
      Thema - \g_thema_nr_tl /
    }
    \tl_if_empty:NTF \g_teilaufgabe_nr_tl {} {
      Teilaufgabe - \g_teilaufgabe_nr_tl /
    }
    Aufgabe - \g_aufgabe_nr_tl .tex
  }
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bAufgabenMetadaten}
% Das Metadaten-Makro überschreiben
%    \begin{macrocode}
\def\bAufgabenMetadaten#1{
  \bMetaSetze{#1}
  \subsubsection{\_gib_aufgaben_titel:}
}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\cs_new:Npn \titel_seite:
{
  \titel_seite:nn
  {
    {
      \bfseries\Huge

      \g_einzelpruefungs_nr_tl
      \par

      \g_jahreszeit_tl
      \par

      \g_jahr_tl
      \par
    }
  }
  {
    \g_examen_fach_tl
    \par

    \vspace{0.5cm}

    Aufgabenstellungen~mit~Lösungsvorschlägen
    \par
  }

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
\AddToHook { begindocument }
{
  \titel_seite:

  \clearpage

  \inhalts_verzeichnis:

  \vfill

  \bLogoTextProjekt
  \bigskip

  \bLogoTextCCLizenz
  \bigskip

  \clearpage
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
