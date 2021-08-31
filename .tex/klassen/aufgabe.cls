\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lehramt-informatik-aufgabe}[2019/10/27 Minimale Klasse zu
Setzen einer Aufgabe]
\LoadClass[a4paper]{book}

\RequirePackage{lehramt-informatik-basis}

% Formatierung muss vor literatur sein, sonst Option clash
\liLadePakete{basis,formatierung,literatur-dummy,makros,aufgaben-metadaten,kopf-fusszeilen}

% Komischer Option-Clash deshalb ganz am Ende, für die Silbentrennung
\RequirePackage[ngerman]{babel}

% \AtEndDocument{
% Geht nicht.
%   \ExplSyntaxOn
%   \_gib_github_url:
%   \ExplSyntaxOff
% }
