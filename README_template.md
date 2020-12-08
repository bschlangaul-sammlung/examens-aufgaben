# lehramt-informatik

Materialsammlung für das Studium Lehramt Informatik in Bayern.

## Aufgaben geordnet nach Themen

### Datenbanksysteme (DB)

#### Entity-Relation-Modell

{{ stichwort "Entity-Relation-Modell" }}

#### Relationenmodell

{{ stichwort "Relationenmodell" }}

## Aufgaben geordnet nach Staatsexamen

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

{{ stichwörter }}

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
können. `standalone` ignoiert die Präabeln vor `\begin{document}`.
Werden zusätzliche Pakete benötigt, muss ein projekteigenes Paket im
Ordner `.tex/erweiterungen` angelegt werden. Mit dem Makro
`\liLadePakete{er,rmodell}` können die Pakete in `.tex/erweiterungen`
dann geladen werden.

## Pakete

### `rmodell.sty`

Makros und Umgebungen zum Setzen des Relationenmodells beim Thema
Datenbanken.

* Makro: `\liPrimaer{}`: Unterstreichung für den Primärschlüssel
* Makro: `\liFremd{}`: Überstreichung für den Fremdschlüssel
* Umgebung: `\begin{liRmodell} \end{liRmodell}`: Kleinere Schrift und Schreibmaschinenschrift.

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
