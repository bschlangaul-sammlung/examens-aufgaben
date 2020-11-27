\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik}[2019/10/27 Zum Setzen von Uebungen, Hausaufgaben und Exzerpte fuer mein Informatik-Studium]
\LoadClass[a4paper]{book}

\RequirePackage{xparse}
\ExplSyntaxOn
\NewDocumentCommand{\InformatikPakete}{ m }
{
  \clist_map_inline:nn { #1 } { \RequirePackage{lehramt-informatik-##1} }
}
\ExplSyntaxOff

% \def\LehramtInformatikRepository{/pfad/zum/repository}
\input /etc/lehramt-informatik.config.tex

%-----------------------------------------------------------------------
% typography
%-----------------------------------------------------------------------

%\RequirePackage{fontspec}
% http://www.tug.org/pracjourn/2006-1/hartke/hartke.pdf
%\usepackage{mathpple}
%\usepackage{palatino}
%\setmainfont{Palatino}

\usepackage{mathpazo}
\usepackage[no-math]{fontspec}
\setmainfont{texgyrepagella}
\setsansfont{QTAncientOlive}
\usepackage{sectsty}
\allsectionsfont{\fontspec{QTAncientOlive}}

%-----------------------------------------------------------------------
% colors
%-----------------------------------------------------------------------

\RequirePackage{xcolor}
\definecolor{infogray}{rgb}{0.97,0.97,0.97}

%-----------------------------------------------------------------------
% mdframed
%-----------------------------------------------------------------------

\RequirePackage{mdframed}
\mdfsetup{backgroundcolor=infogray}

%-----------------------------------------------------------------------
% geometry
%-----------------------------------------------------------------------

%\RequirePackage[margin=3cm]{geometry}

%-----------------------------------------------------------------------
% fancyhdr
%-----------------------------------------------------------------------

\RequirePackage{fancyhdr}
\fancyhead[L,C,R]{}
\fancyfoot[L]{}
\fancyfoot[C]{}
\fancyfoot[R]{\thepage}
\pagestyle{fancy}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

%-----------------------------------------------------------------------
% titlesec
%-----------------------------------------------------------------------

\RequirePackage{titlesec}
\titleformat{\chapter}[display]{\sffamily\bfseries}{}{0pt}{\LARGE}
\titlespacing{\chapter}{0pt}{0pt}{*1}
\titleformat{\paragraph}[hang]{\sffamily\normalsize\bfseries}{\theparagraph}{1em}{}
\setcounter{secnumdepth}{0}

%-----------------------------------------------------------------------
% Citation
%-----------------------------------------------------------------------

% biblatex not working with lualatex and babel
\RequirePackage{polyglossia}
\setmainlanguage{german}
%
\RequirePackage{csquotes}
\RequirePackage[
  bibencoding=utf8,
  citestyle=authortitle,
  backend=biber,
]{biblatex}
\addbibresource{\LehramtInformatikRepository/Quellen/01-DB.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/02-OOMUP.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/03-AUD.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/04-SOSY.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/Allgemein.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/Examen.bib}
\addbibresource{\LehramtInformatikRepository/Quellen/Wikipedia.bib}
% To allow footnotes in the heading
\RequirePackage[stable,multiple]{footmisc}

%-----------------------------------------------------------------------
% Lists
%-----------------------------------------------------------------------

\RequirePackage{paralist}
\renewcommand\labelitemi{-}
\renewcommand\labelitemii{-}
\renewcommand\labelitemiii{-}
\renewcommand\labelitemiv{-}
% Counter: enumi enumii enumiii enumiv
% Styles: \arabic{counter} \alph{counter} \Alph{counter} \roman{counter} \Roman{counter}
\renewcommand{\labelenumi}{(\alph{enumi})}
\renewcommand{\labelenumii}{(\roman{enumii})}

%-----------------------------------------------------------------------
% diverse
%-----------------------------------------------------------------------

\RequirePackage{hyperref}
\RequirePackage{graphicx}

%-----------------------------------------------------------------------
% Macros
%-----------------------------------------------------------------------

%%
% \inhaltsverzeichnis
%%
\def\inhaltsverzeichnis {
  \begin{mdframed}
    \begingroup
    \let\clearpage\relax
    \tableofcontents
    \endgroup
  \end{mdframed}
}

%%
% \mephm (\marginpar and \emph)
%%
\newcommand{\memph}[1]{\emph{#1}\marginpar{\tiny#1}}

%%
% \SLASH
%%
\newcommand\SLASH{\char`\\}

%%
% \ueberschrift
%%
\newcommand{\ueberschrift}[1]{
\par
\noindent
\textbf{#1}:
\noindent
}

%%
% \literatur
%%
\def\literatur{\printbibliography[heading=subbibliography]}

\def\hinweis#1{{\footnotesize[#1]}}

%-----------------------------------------------------------------------
% Environments
%-----------------------------------------------------------------------

%%
% \begin{antwort}
%%
\RequirePackage{xparse}
\ExplSyntaxOn
\NewDocumentEnvironment{antwort} { O{standard} }
{
  \str_case:nn {#1}
  {
    {standard} {
      \def\beschriftung{}
      \mdfsetup{backgroundcolor=gray!5,linecolor=gray}
    }
    {richtig} {
      \def\beschriftung{richtig}
      \mdfsetup{backgroundcolor=green!5,linecolor=green}
      }
    {falsch} {
      \def\beschriftung{falsch}
      \mdfsetup{backgroundcolor=red!3,linecolor=red}
    }
    {muster} {
      \def\beschriftung{Musterlösung}
      \mdfsetup{backgroundcolor=green!12,linecolor=green}
    }
  }
  \ifx\beschriftung\empty\else
  \noindent
  \textbf{\beschriftung{}:}
  \fi
  \begin{mdframed}
}
{\end{mdframed}}

%%
% \begin{exkurs}
%%
\NewDocumentEnvironment{exkurs}{o +b}{
  \vspace{0.2cm}%
  \begin{mdframed}[
    backgroundcolor=white,
    bottomline=false,
    innermargin=1cm,
    leftline=true,
    linecolor=black,
    linewidth=0.1cm,
    outermargin=1cm,
    rightline=false,
    topline=false,
  ]
  \footnotesize
  \noindent%
  \textbf{Exkurs:~#1}\par%
  \noindent%
  #2
  \end{mdframed}
  \vspace{0.2cm}
}{}

%%
% \begin{quellen}
%%
\cs_new:Npn \listenpunkt #1 {\item #1}
\NewDocumentEnvironment { quellen }{ +b }
{
  \seq_clear_new:N \l_quellen
  \seq_set_split:Nnn \l_quellen {\item} {#1}
  \seq_remove_all:Nn \l_quellen {}
  \begin{mdframed}[backgroundcolor=yellow!30,linecolor=yellow]
  \footnotesize
  \noindent
  \textbf{Überblick~über~die~Quellen:}
  \begin{compactitem}
  \seq_map_function:NN \l_quellen {\listenpunkt}
  \end{compactitem}
  \end{mdframed}
  % https://tex.stackexchange.com/a/229004
  \makeatletter
  \par\@afterindentfalse\@afterheading
  \makeatother
} {}

%%
% \begin{lernkartei}
%%
\NewDocumentEnvironment { lernkartei }{ m +b }
{
  \begin{mdframed}
  \footnotesize
  \noindent%
  \textbf{Lernkarteikarte:~#1}\par%
  \noindent%
  #2
  \end{mdframed}
} {}

\ExplSyntaxOff
