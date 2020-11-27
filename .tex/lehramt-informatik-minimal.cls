\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-minimal}[2019/10/27 Minimale Klasse ohne Bibliothek-Unterstützung, um Aufgaben schnell kompilieren zu können.]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

% Formatierung muss vor literatur sein, sonst Option clash
\InformatikPakete{formatierung,literatur-dummy,makros}
