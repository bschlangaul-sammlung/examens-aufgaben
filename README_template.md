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

### Relationale Anfragesprachen

#### SQL

Zu einige Aufgaben gibt es eine Übungsdatenbank. Der SQL-Code
zur Erzeugung der Datenbank ist in die TeX-Dateien eingebunden und
umrahmt durch die `minted`-Umgebung. Außerdem ist der Umgebung
ein Kommentar vorangestellt. Mit Hilfe dieses Kommentars kann
das NodeJS-Skript `lehramt-informatik.js` eine temporäre Datenbank
mit dem Namen `name` erzeugen.

```latex
% Datenbankname: name
\begin{minted}{sql}
CREATE TABLE
\end{minted}
```

Hier alle Aufgaben mit einer Übungsdatenbank:

{{ stichwort "SQL mit Übungsdatenbank" }}

Weitere Aufgaben zum Thema „SQL“:

{{ stichwort "SQL" }}

### Relationale Entwurfstheorie

#### Normalformen

{{ stichwort "Normalformen" }}

### Transaktionsverwaltung

{{ stichwort "Transaktionsverwaltung" }}

## Programmierung

### Objektorientierte Modellierung und Programmierung (OOMUP)

#### Vererbung

{{ stichwort "Vererbung" }}

### Algorithmen und Datenstrukturen (AUD)

#### Rekursion

{{ stichwort "Rekursion" }}

#### Suche

{{ stichwort "Suche" }}

#### Sortieralgorithmen

{{ stichwort "Sortieralgorithmen" }}

## Softwaresysteme (SOSY)

### Projektmanagement

{{ stichwort "Projektmanagement" }}

### Modellierung

#### UML-Diagramme

{{ stichwort "UML-Diagramme" }}

### Entwurfsmuster

{{ stichwort "Entwurfsmuster" }}

### Projektplanung

{{ stichwort "Projektplanung" }}

### Softwarearchitektur

{{ stichwort "Softwarearchitektur" }}

### Testen

{{ stichwort "Testen" }}

## Technische Informatik

### Ein-Adress-Befehl-Assembler

{{ stichwort "Ein-Adress-Befehl-Assembler" }}

### Mehr-Adress-Befehl-Assembler

{{ stichwort "Mehr-Adress-Befehl-Assembler" }}

## Theoretische Informatik

### Reguläre Sprachen

#### Reguläre Grammatik

{{ stichwort "Reguläre Grammatik" }}

#### Reguläre Ausdrücke

{{ stichwort "Reguläre Ausdrücke" }}

#### Deterministisch endlicher Automat (DEA)

{{ stichwort "Deterministisch endlicher Automat (DEA)" }}

#### Nichtdeterministisch endlicher Automat (NEA)

{{ stichwort "Nichtdeterministisch endlicher Automat (NEA)" }}

#### Potenzmengenalgorithmus

{{ stichwort "Potenzmengenalgorithmus" }}

#### Erweiteter Potenzmengenalgorithmus

{{ stichwort "Erweiteter Potenzmengenalgorithmus" }}

#### Pumping-Lemma (Reguläre Sprache)

{{ stichwort "Pumping-Lemma (Reguläre Sprache)" }}

#### Minimierungsalgorithmus

{{ stichwort "Minimierungsalgorithmus" }}

### Kontextfreie Sprachen

#### Kontextfreie Grammtik

{{ stichwort "Kontextfreie Grammtik" }}

#### Ableitung (Kontextfreie Sprache)

{{ stichwort "Ableitung (Kontextfreie Sprache)" }}

#### Kellerautomat

{{ stichwort "Kellerautomat" }}

#### Chomsky-Normalform

{{ stichwort "Chomsky-Normalform" }}

#### CYK-Algorithmus

{{ stichwort "CYK-Algorithmus" }}

### Pumping-Lemma (Kontextfreie Sprache)

{{ stichwort "Pumping-Lemma (Kontextfreie Sprache)" }}

### Kontextsensitive Sprache

{{ stichwort "Kontextsensitive Grammatik" }}

#### Kontextsensitive Grammatik

{{ stichwort "Kontextsensitive Grammatik" }}

#### Turing-Maschine

{{ stichwort "Turing-Maschine" }}

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

{{ einbinden "docs/tex.md" }}

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
