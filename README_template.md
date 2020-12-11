# lehramt-informatik

Materialsammlung für das Studium Lehramt Informatik in Bayern.

# Aufgaben geordnet nach Themen

## Datenbanksysteme (DB)

Das Kapitel „Datenbanksysteme“ ist in etwa so gegliedert wie das
Lehrbuch „Datenbanksysteme“ von Alfons Kemper und André Eickler.

### Übersicht

{{ stichwort "Datenbank-Übersicht" }}

### Datenbankentwurf

#### Entity-Relation-Modell

{{ stichwort "Entity-Relation-Modell" }}

### Relationales Modell

#### Relationenmodell

{{ stichwort "Relationenmodell" }}

#### Relationale Algebra

{{ stichwort "Relationale Algebra" }}

#### Tupelkalkül

{{ stichwort "Tupelkalkül" }}

### SQL

{{ stichwort "SQL" }}

### Relationale Entwurfstheorie

#### Normalformen

{{ stichwort "Normalformen" }}

### Transaktionsverwaltung

{{ stichwort "Transaktionsverwaltung" }}

## Programmierung

### Objektorientierte Modellierung und Programmierung (OOMUP)

### Algorithmen und Datenstrukturen (AUD)

#### Rekursion

{{ stichwort "Rekursion" }}

#### Suche

{{ stichwort "Suche" }}

#### Sortieralgorithmen

{{ stichwort "Sortieralgorithmen" }}

# Aufgaben geordnet nach Staatsexamen

In diesem Repository findet Ihr viele Staatsexamensaufgaben. Von fast
allen Staatsexamen liegt ein Scan der Angabe (`Scan.pdf`), sowie eine
Plain-Text-Version (`OCR.txt`) der Text-Erkennung vor.

`03` steht für Frühjahr `09` steht für Herbst

eine Aufgabe:
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex` bzw.
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf`

gescanntes komplettes Staatsexamen (Angabe):
`Staatsexamen/66116/2018/03/Scan.pdf`

OCR des oben genannten Scans:
`Staatsexamen/66116/2018/03/OCR.txt`

{{ staatsexamen }}

# Stichwort-Verzeichnis

Diese Informatik-Material- und Aufgabensammlung verwendet das TeX-Makro
`\index{}` um ein Stichwortverzeichnis zu erstellen. In dieses Makro
kann ganz normaler Text - also auch mit Leerzeichen eingesetzt werden.
Die einzelnen Stichwörter werden in der YAML-Datei
`Stichwortverzeichnis.yml` hinterlegt. Ein Stichwort muss eindeutig
sein, d. h. es darf nicht doppelt vorkommen. Durch die YAML-Syntax kann
die hierarchische Struktur des Verzeichnisses besser verwaltet werden.
Alle Stichwörter beginnen mit `- `, damit die YAML-Datei hier unten
als Markdown-Liste eingebettet werden kann.

{{ stichwortverzeichnis }}

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

## Pakete

### `makros.sty`

Eine Sammlung von häufig verwendeten Makros und Umgebungen, die
thematisch zu keinem anderen Paket passen

* Makro: `\liPseudoUeberschrift{}`: Text, der sich wie eine Überschrift
  verhält.
* Makro: `\liBeschriftung{}`: Ähnlich dem Makro
  `\liPseudoUeberschrift{}`. Am Ende des Textes wird ein
  Doppelpunktzeichen angehängt.
* Makro: `\liFussnoteUrl{url}`: Eine HTTP-URL als Fußnote setzen.
* Makro: `\liFussnoteLink{text}{url}`: Eine Link, d. h. einen Link-Text
  und eine URL als Fußnote setzen.

### `normalformen.sty`

Hilfsmakros zum Setzen von Normalformen, Funktionalen Abhänigkeiten,
Attributhülle

* Makro: `\liFA #1 > #2`: Funktionale Abhängigkeit

### `rmodell.sty`

Makros und Umgebungen zum Setzen des Relationenmodells beim Thema
Datenbanken.

* Makro: `\liPrimaer{}`: Unterstreichung für den Primärschlüssel
* Makro: `\liFremd{}`: Überstreichung für den Fremdschlüssel
* Umgebung: `\begin{liRmodell} \end{liRmodell}`: Kleinere Schrift und Schreibmaschinenschrift.

### `syntax.sty`

Ein Hüll-Paket um `minted`, das sich um die Syntax-Hervorhebung des
Java-Codes kümmert.

### `uml.sty`

Ein Hüll-Paket um `tikz-uml`, das einige Design-Einstellungen vornimmt
und manche Erweiterung bereitstellt

## TeX-Klassen und Pakete installieren

```
su -c "echo "\\\\def\\\\LehramtInformatikRepository{$(pwd)}" > /etc/lehramt-informatik.config.tex"
```

```
make install_tex
```

Die Java-Dateien sind als Git Submodule eingebunden:

```
git submodule update --init
```

# LaTeX-Vorlage

```latex
\documentclass{lehramt-informatik-haupt}

\begin{document}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Theorie-Teil
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\chapter{Thema des Theorie-Teils}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Aufgaben
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\chapter{Aufgaben}

\literatur

\end{document}
```
