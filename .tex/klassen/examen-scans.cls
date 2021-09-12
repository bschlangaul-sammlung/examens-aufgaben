\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{bschlangaul-examen-scans}[2021/01/08 Zum
Zusammenfügen mehrerer Staatsexamen-Scans zu einer PDF-Datei.]
\LoadClass[a4paper,oneside]{book}
%    \end{macrocode}

%    \begin{macrocode}
\LoadClass{bschlangaul-basis}
%    \end{macrocode}

%    \begin{macrocode}
\RequirePackage{pdfpages}
%    \end{macrocode}

% Formatierung muss vor literatur sein, sonst Option clash
%    \begin{macrocode}
\bLadePakete{formatierung}
%    \end{macrocode}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
%    \begin{macrocode}
\RequirePackage[ngerman]{babel}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOn
%    \end{macrocode}

% \begin{macro}{\bPruefungsNummer}
%    \begin{macrocode}
\def\bPruefungsNummer#1{
  \str_set:Nn \g_pruefungs_nummer {#1}
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bPruefungsTitel}
%    \begin{macrocode}
\def\bPruefungsTitel#1{
  \str_set:Nn \g_pruefungs_titel {#1}
}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\def\li@SansFett#1#2{
  {
    #1
    \bfseries
    \rmfamily
    #2
  }
}
%    \end{macrocode}

% \begin{macro}{\bTrennSeite}
%    \begin{macrocode}
\def\bTrennSeite#1{
  \clearpage
  \strut
  \vfill
  \begin{center}
  {
    \li@SansFett{\LARGE}{\str_use:N \g_pruefungs_nummer} \\
    \vspace{2cm}
    \li@SansFett{\large}{\str_use:N \g_pruefungs_titel} \\
    \vspace{5cm}
    \li@SansFett{\Huge}{#1}
  }
  \end{center}
  \vfill
  \strut
  \clearpage
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bTitelSeite}
%    \begin{macrocode}
\def\bTitelSeite#1{
  \clearpage
  \strut
  \vfill
  \begin{center}
  #1
  \end{center}
  \vfill
  \strut
  \clearpage
}
%    \end{macrocode}
% \end{macro}

% \begin{macro}{\bBindePdfEin}
%    \begin{macrocode}
\def\bBindePdfEin#1{\includepdf[pages={1-}]{\LehramtInformatikRepository/#1}}
%    \end{macrocode}
% \end{macro}

%    \begin{macrocode}
\AtBeginDocument{
  \thispagestyle{empty}
  \bTitelSeite{
    \li@SansFett{\Large}{Sammlung~aller~Staatsexamensaufgaben~der~Prüfungsnummer} \\

    \vspace{4cm}

    \li@SansFett{\Huge}{\str_use:N \g_pruefungs_nummer} \\

    \vspace{4cm}

    \li@SansFett{\LARGE}{\str_use:N \g_pruefungs_titel} \\
  }
}
%    \end{macrocode}

%    \begin{macrocode}
\ExplSyntaxOff
%    \end{macrocode}

%    \begin{macrocode}
