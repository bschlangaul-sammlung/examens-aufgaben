\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-examen-sammlung}[2021/01/08 Zum
Zusammenfügen mehrerer Staatsexamen-Scans zu einer PDF-Datei.]
\LoadClass[a4paper,oneside]{book}

\RequirePackage{lehramt-informatik-basis}

\RequirePackage{pdfpages}

\author{Hermine Bschlangaul}
\date{}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{formatierung}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}

\ExplSyntaxOn

\def\liPruefungsNummer#1{
  \str_set:Nn \g_pruefungs_nummer {#1}
}
\def\liPruefungsTitel#1{
  \str_set:Nn \g_pruefungs_titel {#1}
}

\def\li@SansFett#1#2{
  {
    #1
    \bfseries
    \sffamily
    #2
  }
}

\def\liTrennSeite#1{
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

\def\liTitelSeite#1{
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

\def\liBindePdfEin#1{\includepdf[pages={1-}]{\LehramtInformatikRepository/#1}}

\AtBeginDocument{
  \thispagestyle{empty}
  \liTitelSeite{
    \li@SansFett{\Large}{Sammlung~aller~Staatsexamensaufgaben~der~Prüfungsnummer} \\

    \vspace{4cm}

    \li@SansFett{\Huge}{\str_use:N \g_pruefungs_nummer} \\

    \vspace{4cm}

    \li@SansFett{\LARGE}{\str_use:N \g_pruefungs_titel} \\
  }
}

\ExplSyntaxOff
