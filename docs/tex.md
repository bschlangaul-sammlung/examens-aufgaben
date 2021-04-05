---
layout: page
title: LaTeX
---

# LaTeX

Alle eigenen LaTeX-Klassen- und Pakete haben das Präfix
|lehramt-informatik-| im Namen. Wird hier von |rmodell.sty| gesprochen,
so heißt das gemeinte Paket |lehramt-informatik-rmodell.sty|.
|haupt.cls| bedeutete beispielsweise die Klasse
|lehramt-informatik-haupt.cls|.

Alle selbst definierten Makros und Umgebungen haben zur besseren
Unterscheidung ein Präfix: |li| = |Lehramt Informatik|

## Klassen

### |haupt.cls|

Haupt-Klasse zum Setzen von Aufgabensammlungen,
Theorie-Zusammenfassungen etc.

### |aufgabe.cls|

Minimale Klasse zu Setzen einer Aufgabe

Einige Funktionen wie z. B. die Bibliotheks-Unterstützung sind
herausgepachted, um Aufgaben schnell kompilieren zu können.

In den Aufgaben dürfen keine zusätzlichen Pakete mit Hilfe von
|\usepackage{}| geladen werden, denn jede einzelne Aufgabe soll in ein
größeres Dokument durch das Paket |standalone| eingebunden werden
können. |standalone| ignoriert die Präabeln vor |\begin{document}|.
Werden zusätzliche Pakete benötigt, muss ein projekteigenes Paket im
Ordner |.tex/erweiterungen| angelegt werden. Mit dem Makro
|\liLadePakete{er,rmodell}| können die Pakete in |.tex/erweiterungen|
dann geladen werden.

Mit dem Makro |\liAufgabenTitel{}| kann einer Aufgabe ein prägnanter
kurzer Titel gegeben werden.

### |examen-sammlung.cls|

Zum Zusammenfügen mehrerer Staatsexamen-Scans zu einer PDF-Datei.

## Pakete

* Makro: |\liHanoi{anzahl-scheiben}{gewicht-scheibe/turm-nr,gewicht-scheibe/turm-nr}|,
  z. B.: |\liHanoi{4}{4/1,3/1,2/3,1/2}|

### |normalformen.sty|

Hilfsmakros zum Setzen von Normalformen, Funktionalen Abhänigkeiten,
Attributhülle

### |pseudo.sty|

Paket zum Setzen von Pseudo-Code, Hüll-Paket um |algorithm2e|.

### |rmodell.sty|

Makros und Umgebungen zum Setzen des Relationenmodells beim Thema
Datenbanken.

* Makro: |\liRelation{name}{attribut, attribut}|: Umhüllen der Attribute
  mit geschweiften und dann eckigen Klammern.
* Makro: |\liPrimaer{text}|: Unterstreichung für den Primärschlüssel
* Makro: |\liFremd{text}|: Überstreichung für den Fremdschlüssel
* Makro: |\liAttribut{text}|: Gleiche Schrift wie Umgebung |liRmodell|
* Umgebung: |\begin{liRmodell} \end{liRmodell}|: Kleinere Schrift und
  Schreibmaschinenschrift.

### |spalten.sty|

Lädt das Paket
„multicol“, damit mehrspaltiger Satz mit Hilfe der Umgebung „multicols“
realisiert werden kann.

* Makro: |\liSpaltenUmbruch|: Spezieller Spaltenumbruch, der den Inhalt
  mit Hilfe von |\vfill\strut| nach oben schiebt.

### |sortieren.sty|

Schaubilder für händisches Sortieren bzw. einen Schreibtischlauf setzen

* Makro: |\liVertauschen{1 2 >4 <3 5}|: Setze ein Schaubild mit Hilfe
  von TikZ. |<| und |>| werden dazu verwendet, um den Vertauschprozess
  zu visualisieren.

### |struktogramm.sty|

Lädt das Paket |struktex| zum Setzen von Struktogrammen.

## Vorlagen

### haupt

|||latex
\documentclass{lehramt-informatik-haupt}

\begin{document}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Theorie-Teil
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\chapter{Thema des Theorie-Teils}

\literatur

\end{document}
|||

### aufgabe

|||latex
\documentclass{lehramt-informatik-aufgabe}
\liLadePakete{}
\begin{document}
\liAufgabenTitel{}
\section{
\index{DB}
\footcite{examen:}
}

\end{document}
|||
