\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-aufgabe}[2019/10/27 Minimale Klasse zu
Setzen einer Aufgabe]
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass[oneside,12pt]{book}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{bschlangaul-basis}
%    \end{macrocode}

% Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\liLadePakete{
  formatierung,
  abmessung,
  literatur-dummy,
  makros,
  aufgaben-metadaten,
  kopf-fusszeilen,
  mathe,
  grafik,
  meta
}
%    \end{macrocode}
% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung

%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

% In Aufgaben wollen wir das Additum sehen.
%    \begin{macrocode}
\LiADDITUMtrue
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

%    \begin{macrocode}
\cs_gset:Npn \stichwoerter_formatiert: {
  \tl_if_empty:NTF \g_auf_stichwoerter_tl {} {
    \textbf{Stichwörter:} ~
    \g_auf_stichwoerter_tl
    \par
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\cs_gset:Npn \horizontale_linie: {
  \par
  \noindent
  \rule{\textwidth}{0.8pt}
  \par
}
%    \end{macrocode}

%    \begin{macrocode}
\cs_gset:Npn \thematik_formatiert: {
  \tl_if_empty:NTF \g_auf_thematik_tl {} {
    \textit{
      ( \g_auf_thematik_tl )
    }
  }
}
%    \end{macrocode}

% \begin{macro}{\liAufgabenMetadaten}
%    \begin{macrocode}
\def\liAufgabenMetadaten#1{
  \liMetaSetze{#1}

  \tl_if_empty:NTF \g_auf_examen_nummer_tl {} {
    {
      \noindent
      \large
      \_gib_einzelpruefung_trenner:
      \par\medskip
    }
  }

  {
    \noindent
    \bfseries
    \Large
    \tl_if_empty:NTF \g_auf_examen_nummer_tl {
      \g_auf_titel_tl
    } {
      \_gib_aufgaben_pfad_trenner:
    }
  }
  \hfill \thematik_formatiert:
  \par

  \medskip

  \noindent
  {\footnotesize\stichwoerter_formatiert:}

  \horizontale_linie:

  \bigskip

  \par
  % Keine Einrückung
  \@afterindentfalse
  \@afterheading
}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\AddToHook{enddocument}{
  \vfill
  {

    \liLogoTextProjekt
    \bigskip

    \liLogoTextCCLizenz
    \bigskip

    \begin{spacing}{1}
      \tiny
      \noindent
      \liMetaHilfMit

      \liMetaQuelltext
      \_gib_github_url_href:
      \end{spacing}
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
