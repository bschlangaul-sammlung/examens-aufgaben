\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik}[2019/10/27 Zum Setzen von Uebungen, Hausaufgaben und Exzerpte fuer mein Informatik-Studium]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

% Formatierung muss vor literatur sein, sonst Option clash
\InformatikPakete{formatierung,literatur,makros}
\RequirePackage{standalone}
