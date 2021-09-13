\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-aufgabe}[2019/10/27 Minimale Klasse zu
Setzen einer Aufgabe]
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass{bschlangaul-basis}
%    \end{macrocode}

% Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\bLadePakete{
  formatierung,
  abmessung,
  literatur-dummy,
  makros,
  aufgaben-metadaten,
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
\ADDITUMtrue
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
\cs_gset:Npn \thematik_formatiert:
{
  \tl_if_empty:NTF \g_thematik_tl {}
  {
    \textit{
      ( \g_thematik_tl )
    }
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\cs_gset:Npn \examen_titel_formatiert:
{
  \tl_if_empty:NTF \g_einzelpruefungs_nr_tl {}
  {
    {
      \noindent
      \small
      Einzelprüfung~
      „\fach:“
    }

    \par\medskip

    \noindent
    {
      \large
      Einzelprüfungsnummer~
      \einzelpruefungsnr_jahr_jahreszeit:
    }

    \par\medskip
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\cs_gset:Npn \aufgabe_titel_formatiert:
{
  {
    \noindent
    \bfseries
    \Large
    \tl_if_empty:NTF \g_einzelpruefungs_nr_tl
    {
      \g_titel_tl
    }
    {
      \thema_teil_aufgabe:
    }
  }
  \hfill

  \thematik_formatiert:
}
%    \end{macrocode}

% \begin{macro}{\bAufgabenMetadaten}
%    \begin{macrocode}
\def\bAufgabenMetadaten #1
{
  \bMetaSetze{#1}

  \examen_titel_formatiert:

  \aufgabe_titel_formatiert:

  \par\medskip

  \noindent
  {\footnotesize\stichwoerter_formatiert:}

  \horizontale_linie:

  \setze_kopfzeile_oben_rechts:n { \aufgabenpfad_lang: }

  \bigskip

  \keine_einrueckung:
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
    \bLogoTextProjekt
    \bigskip

    \bLogoTextCCLizenz
    \bigskip

    \begin{spacing}{1}
      \tiny
      \noindent
      \bMetaHilfMit

      \bMetaQuelltext
      \_gib_github_url_href:
    \end{spacing}
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
