\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-aufgabe}[2019/10/27 Minimale Klasse zu
Setzen einer Aufgabe]
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass{bschlangaul-basis}
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
  \tl_if_empty:NTF \g_stichwoerter_tl {} {
    \textbf{Stichwörter:} ~
    \g_stichwoerter_tl
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
  \tl_if_empty:NTF \g_thematik_tl {} {
    \textit{
      ( \g_thematik_tl )
    }
  }
}
%    \end{macrocode}

% \begin{macro}{\liAufgabenMetadaten}
%    \begin{macrocode}
\def\liAufgabenMetadaten #1
{
  \liMetaSetze{#1}

  \tl_if_empty:NTF \g_einzelpruefungs_nr_tl {}
  {
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
    \tl_if_empty:NTF \g_einzelpruefungs_nr_tl
    {
      \g_titel_tl
    }
    {
      \_gib_aufgaben_pfad_trenner:
    }
  }
  \hfill \thematik_formatiert:
  \par

  \medskip

  \noindent
  {\footnotesize\stichwoerter_formatiert:}

  \horizontale_linie:

  \setze_kopfzeile_oben_rechts:n { \gib_aufgaben_pfad_lang_sicher: }

  \bigskip

  \par
  % Keine Einrückung
  \@afterindentfalse
  \@afterheading
}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\setze_kopf_fusszeilen:nn {} {}
%    \end{macrocode}

%    \begin{macrocode}
\AddToHook { begindocument }
{
  \repariere_kopfzeile_breite:
}
%    \end{macrocode}

%    \begin{macrocode}
\AddToHook { enddocument }
{
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
