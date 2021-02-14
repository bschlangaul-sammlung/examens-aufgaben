---
layout: page
title: LaTeX
---

# LaTeX

Alle eigenen LaTeX-Klassen- und Pakete haben das Präfix
`lehramt-informatik-` im Namen. Wird hier von `rmodell.sty` gesprochen,
so heißt das gemeinte Paket `lehramt-informatik-rmodell.sty`.
`haupt.cls` bedeutete beispielsweise die Klasse
`lehramt-informatik-haupt.cls`.

Alle selbst definierten Makros und Umgebungen haben zur besseren
Unterscheidung ein Präfix: `li` = `Lehramt Informatik`

## Klassen

### `haupt.cls`

Haupt-Klasse zum Setzen von Aufgabensammlungen,
Theorie-Zusammenfassungen etc.

### `aufgabe.cls`

Minimale Klasse zu Setzen einer Aufgabe

Einige Funktionen wie z. B. die Bibliotheks-Unterstützung sind
herausgepachted, um Aufgaben schnell kompilieren zu können.

In den Aufgaben dürfen keine zusätzlichen Pakete mit Hilfe von
`\usepackage{}` geladen werden, denn jede einzelne Aufgabe soll in ein
größeres Dokument durch das Paket `standalone` eingebunden werden
können. `standalone` ignoriert die Präabeln vor `\begin{document}`.
Werden zusätzliche Pakete benötigt, muss ein projekteigenes Paket im
Ordner `.tex/erweiterungen` angelegt werden. Mit dem Makro
`\liLadePakete{er,rmodell}` können die Pakete in `.tex/erweiterungen`
dann geladen werden.

Mit dem Makro `\liAufgabenTitel{}` kann einer Aufgabe ein prägnanter
kurzer Titel gegeben werden.

### `examen-sammlung.cls`

Zum Zusammenfügen mehrerer Staatsexamen-Scans zu einer PDF-Datei.

## Pakete

### `automaten.sty`

Zum Setzen von Automaten.

### `baum.sty`

Zum Setzen von Binär- und AVL-Bäumen. Hüll-Paket um TikZ and tikz-qtree.

* TikZ-Stil: `li binaer baum`: Knoten als Kreise, Kanten als Pfeile.

### `checkbox.sty`

Zum Setzen von Multiple-Choice-Fragen. Simulation von Kästchen zum
ankreuzen.

* Makro: `\liRichtig`: Angekreuztes Kästchen (nur innerhalb der
  `itemize`-Umgebung zu verwenden.)
* Makro: `\liFalsch`: Nicht angekreuztes Kästchen (nur innerhalb der
  `itemize`-Umgebung zu verwenden.)

### `grafik.sty`

### `hanoi.sty`

Paket zum Setzen von Hanoi-Grafiken

* Makro: `\liHanoi{anzahl-scheiben}{gewicht-scheibe/turm-nr,gewicht-scheibe/turm-nr}`,
  z. B.: `\liHanoi{4}{4/1,3/1,2/3,1/2}`

### `makros.sty`

Eine Sammlung von häufig verwendeten Makros und Umgebungen, die
thematisch zu keinem anderen Paket passen

* Makro: `\liPseudoUeberschrift{}`: Text, der sich wie eine Überschrift
  verhält.
* Makro: `\liBeschriftung{}`: Ähnlich dem Makro
  `\liPseudoUeberschrift{}`. Am Ende des Textes wird ein
  Doppelpunktzeichen angehängt.
* Makro: `\liFussnoteUrl{url}`: Eine HTTP-URL als Fußnote setzen.
* Makro: `\liFussnoteLink{text}{url}`: Einen Link, d. h. einen Link-Text
  und eine URL als Fußnote setzen.
* Umgebung: `\begin{liAntwort} \end{liAntwort}`: Zum Setzen von
  Antworten. Sie werden mit einem Kasten umgeben. Könnten eventuell
  ausgeblendet werden, wenn man nur die Lösung sehen will.
* Umgebung: `\begin{liAdditum} \end{liAdditum}`: Zusätzliches Material
  bei Aufgaben, das zum Lösen der Aufgaben nicht unbedingt nötig ist,
  z. b. Hintergrundinformation, Test-Dateien, komplette Code-Dateien.
* Umgebung: `\begin{liProjektSprache}{NameProjektSprache}
  \end{liProjektSprache}`: Zum Einbetten
  von projekteigenen Minisprachen/DSLs (Domain-specific language)
  (z. B. RelationenSchema). Der Inhalt
  der Umgebung wird nicht von TeX kompiliert, sondern von dem
  Java-Kommandozeilen-Programm `didaktik.java` verarbeitet.
* Umgebung: `\begin{liDiagramm}{beschriftung}\end{liDiagramm}`: Zu
  setzen einer Graphik bzw eines Diagramms.


### `normalformen.sty`

Hilfsmakros zum Setzen von Normalformen, Funktionalen Abhänigkeiten,
Attributhülle

* Makro: `\liFA #1 > #2`: Funktionale Abhängigkeit. #1 #2 ohne Komma wird
  in einzelne Buchstaben zerteilt. z. B. `\liFA AB > CD` ergibt `A, B -> C, D`.
  Soll nicht aufgeteilt werden, einfach ein Komma anhängen.

### `pseudo.sty`

Paket zum Setzen von Pseudo-Code, Hüll-Paket um `algorithm2e`.

### `rmodell.sty`

Makros und Umgebungen zum Setzen des Relationenmodells beim Thema
Datenbanken.

* Makro: `\liRelation{name}{attribut, attribut}`: Umhüllen der Attribute
  mit geschweiften und dann eckigen Klammern.
* Makro: `\liPrimaer{text}`: Unterstreichung für den Primärschlüssel
* Makro: `\liFremd{text}`: Überstreichung für den Fremdschlüssel
* Makro: `\liAttribut{text}`: Gleiche Schrift wie Umgebung `liRmodell`
* Umgebung: `\begin{liRmodell} \end{liRmodell}`: Kleinere Schrift und
  Schreibmaschinenschrift.

### `spalten.sty`

Lädt das Paket
„multicol“, damit mehrspaltiger Satz mit Hilfe der Umgebung „multicols“
realisiert werden kann.

* Makro: `\liSpaltenUmbruch`: Spezieller Spaltenumbruch, der den Inhalt
  mit Hilfe von `\vfill\strut` nach oben schiebt.

### `struktogramm.sty`

Lädt das Paket `struktex` zum Setzen von Struktogrammen.

### `syntax.sty`

Ein Hüll-Paket um `minted`, das sich um die Syntax-Hervorhebung des
Java-Codes kümmert. Um das Paket `minted` benutzen zu können, muss
`pygmentize` installiert sein. Außerdem müssen die TeX-Dateien mit der
Kommandozeilen-Option `--shell-escape` kompiliert werden.

* Makro: `\liJavaCode`: Im Zeilenfluss einen kurzen
  Java-Code-Ausschnitt setzen.
* Makro: `\liLatexCode`: Im Zeilenfluss einen kurzen
  LaTeX-Code-Ausschnitt setzen.
* Makro: `\liJavaDatei`: Eine komplette Java-Datei einbinden, die
  Verzeichnis `./Code/src/main/java/org/bschlangaul` liegt.
* Makro: `\liJavaTestDatei`: Eine komplette Java-Test-Datei einbinden,
  die Verzeichnis `./Code/src/test/java/org/bschlangaul` liegt.
* Makro: `\liAssemblerDatei{relativer-pfad}`: Relativer Pfad zu einer
  Assembler-Datei.
* Makro: `\liMinispracheDatei{relativer-pfad}`: Relativer Pfad zu einer
  Minisprachen-Datei (Hochsprache für die Minimaschine von Albert
  Wiedemann).
* Makro: `\liHaskellCode{haskell}`: Zum Setzen von Haskell-Code.
* Makro: `\liHaskellDatei{relativer-pfad}`: Relativer Pfad zu einer
  Haskell-Datei.

### `syntaxbaum.sty`

Zum Setzen von Syntaxbäumen mit Hilfe des Pakets `tikz-qtree`.

### `tabelle.sty`

Lädt das Paket tabluarx

### `uml.sty`

Ein Hüll-Paket um `tikz-uml`, das einige Design-Einstellungen vornimmt
und manche Erweiterung bereitstellt

## Vorlagen

### haupt

```latex
\documentclass{lehramt-informatik-haupt}

\begin{document}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Theorie-Teil
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\chapter{Thema des Theorie-Teils}

\literatur

\end{document}
```

### aufgabe

```latex
\documentclass{lehramt-informatik-aufgabe}
\liLadePakete{}
\begin{document}
\liAufgabenTitel{}
\section{
\index{DB}
\footcite{examen:}
}

\end{document}
```
