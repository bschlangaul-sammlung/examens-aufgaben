[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

# Examensaufgaben

Sammlung von Examensaufgaben und weiteren, zusätzlichen Aufgaben mit
Lösungen für das Studium „Lehramt Informatik“ in Bayern.

__Intention:__ insgemein Hoffnung auf Kontributionen
(Fehlerkorrekturen, weitere Lösungen etc.) durch die „Community“ durch
Pull-Request oder per-Mail an hermine.bschlangaul@gmx.net. Lösungen ohne
Gewähr ...

__Lizenz:__ Die Materialsammlung unterliegt den Bestimmungen einer
[Creative Commons Namensnennung-Nicht kommerziell-Share Alike 4.0 International-Lizenz](https://creativecommons.org/licenses/by-nc-sa/4.0/).

__TeX:__ Alle Aufgaben und Materialen sind „geTeX’t“, d. h. mit Hilfe
des Textsatzsystems [TeX](https://www.ctan.org/) bzw. mit der
Makrossammlung [LaTeX](https://www.latex-project.org) gesetzt. Im
Repository
[latex-vorlagen](https://github.com/bschlangaul-sammlung/latex-vorlagen)
befindet sich eine mittlerweile umfangreiche
[Sammlungen an Hilfs-Klassen und -Paketen](https://github.com/bschlangaul-sammlung/latex-vorlagen/raw/main/dokumentation.pdf),
die benötigt werden, um die Aufgaben zu setzen.

__Java:__ Zu diesem Repository, das vor allem TeX- und PDF-Dateien
enthält, gehört ein
[Git-Repository mit Java-Code](https://github.com/bschlangaul-sammlung/java-fuer-examens-aufgaben). Dieses
Java-Repository ist als
[git submodule](https://git-scm.com/book/de/v2/Git-Tools-Submodule) im Verzeichnis `.repos/java`
eingebunden.

# Aufgaben geordnet nach Staatsexamen

In diesem Repository findet Ihr viele Staatsexamensaufgaben. Von fast
allen Staatsexamen liegt ein Scan der Angabe (`Scan.pdf`), sowie eine
Plain-Text-Version (`OCR.txt`) der Text-Erkennung vor.

`03` steht für Frühjahr und `09` steht für Herbst

eine Aufgabe:
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex` bzw.
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.pdf`

gescanntes komplettes Staatsexamen (Angabe):
`Staatsexamen/66116/2018/03/Scan.pdf`

OCR des oben genannten Scans:
`Staatsexamen/66116/2018/03/OCR.txt`

{{ staatsexamen }}

# Aufgaben geordnet nach Themen

## Abkürzungen der Modulnamen

| Abk.  | Modulename                                          |
|-------|-----------------------------------------------------|
| MATHE | Mathematische Grundlagen                            |
| DB    | Datenbanksysteme                                    |
| OOMUP | Objektorientierte Modellierung und Programmierung   |
| AUD   | Algorithmen und Datenstrukturen                     |
| FUMUP | Funktionale Modellierung und Programmierung         |
| SOSY  | Softwaresysteme und Softwareentwicklungspraktikum   |
| TECH  | Technische Informatik                               |
| THEO  | Theoretische Informatik                             |
| DDI   | Didaktik der Informatik                             |


## Datenbanksysteme (DB)

Das Kapitel „Datenbanksysteme“ ist in etwa so gegliedert wie das
Lehrbuch „Datenbanksysteme“ von Alfons Kemper und André Eickler.


### Übersicht
{{ gibAufgabenListe("Datenbank-Übersicht") }}


### Datenbankentwurf

#### Entity-Relation-Modell
{{ gibAufgabenListe("Entity-Relation-Modell") }}


### Relationales Modell

#### Relationenmodell
{{ gibAufgabenListe("Relationenmodell") }}
#### Relationale Algebra
{{ gibAufgabenListe("Relationale Algebra") }}
#### Tupelkalkül
{{ gibAufgabenListe("Tupelkalkül") }}


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
{{ gibAufgabenListe("SQL mit Übungsdatenbank") }}

Weitere Aufgaben zum Thema „SQL“:
{{ gibAufgabenListe("SQL") }}


### Relationale Entwurfstheorie

#### Normalformen
{{ gibAufgabenListe("Normalformen") }}


### Transaktionsverwaltung
{{ gibAufgabenListe("Transaktionsverwaltung") }}



## Objektorientierte Modellierung und Programmierung (OOMUP)

### Vererbung
{{ gibAufgabenListe("Vererbung") }}



## Algorithmen und Datenstrukturen (AUD)


### Rekursion
{{ gibAufgabenListe("Rekursion") }}


### Suche
{{ gibAufgabenListe("Suche") }}


### Sortieralgorithmen

#### Bubblesort
{{ gibAufgabenListe("Bubblesort") }}
#### Selectionsort
{{ gibAufgabenListe("Selectionsort") }}
#### Insertionsort
{{ gibAufgabenListe("Insertionsort") }}
#### Quicksort
{{ gibAufgabenListe("Quicksort") }}
#### Mergesort
{{ gibAufgabenListe("Mergesort") }}
#### Heapsort
{{ gibAufgabenListe("Heapsort") }}


### Algorithmische Komplexität (O-Notation)
{{ gibAufgabenListe("Algorithmische Komplexität (O-Notation)") }}

#### Master-Theorem
{{ gibAufgabenListe("Master-Theorem") }}


### Algorithmenmuster
{{ gibAufgabenListe("Algorithmenmuster") }}


### Listen

#### Einfach-verkettete Liste
{{ gibAufgabenListe("Einfach-verkettete Liste") }}
### Doppelt-verkettete Liste
{{ gibAufgabenListe("Doppelt-verkettete Liste") }}
### Stapel (Stack)
{{ gibAufgabenListe("Stapel (Stack)") }}
### Warteschlange (Queue)
{{ gibAufgabenListe("Warteschlange (Queue)") }}


### Bäume

#### Binärbaum
{{ gibAufgabenListe("Binärbaum") }}
#### AVL-Baum
{{ gibAufgabenListe("AVL-Baum") }}
#### Halde (Heap)
{{ gibAufgabenListe("Halde (Heap)") }}
#### B-Baum
{{ gibAufgabenListe("B-Baum") }}
#### Streutabellen (Hashing)
{{ gibAufgabenListe("Streutabellen (Hashing)") }}


### Graphen

#### Algorithmus von Dijkstra
{{ gibAufgabenListe("Algorithmus von Dijkstra") }}
#### Minimaler Spannbaum
{{ gibAufgabenListe("Minimaler Spannbaum") }}
#### Knotensuchalgorithmen
{{ gibAufgabenListe("Knotensuchalgorithmen") }}



## Softwaresysteme (SOSY)


### Projektmanagement
{{ gibAufgabenListe("Projektmanagement") }}


### Projektplanung
{{ gibAufgabenListe("Projektplanung") }}

### Modellierung: UML-Diagramme

#### Struktur-Diagramme

##### Klassendiagramm
{{ gibAufgabenListe("Klassendiagramm") }}
##### Objektdiagramm
{{ gibAufgabenListe("Objektdiagramm") }}

#### Verhaltens-Diagramme

##### Sequenzdiagramm
{{ gibAufgabenListe("Sequenzdiagramm") }}
##### Kommunikationsdiagramm
{{ gibAufgabenListe("Kommunikationsdiagramm") }}
##### Aktivitätsdiagramm
{{ gibAufgabenListe("Aktivitätsdiagramm") }}
##### Anwendungsfalldiagramm
{{ gibAufgabenListe("Anwendungsfalldiagramm") }}
##### Zustandsdiagramm
{{ gibAufgabenListe("Zustandsdiagramm") }}


### Entwurfsmuster

#### Erzeugungsmuster (Creational Patterns)

##### Abstrakte Fabrik (Abstract Factory)
{{ gibAufgabenListe("Abstrakte Fabrik (Abstract Factory)") }}
##### Einzelstück (Singleton)
{{ gibAufgabenListe("Einzelstück (Singleton)") }}
##### Erbauer (Builder)
{{ gibAufgabenListe("Erbauer (Builder)") }}

#### Strukturmuster (Structural Patterns)

##### Adapter
{{ gibAufgabenListe("Adapter") }}
##### Dekorierer (Decorator)
{{ gibAufgabenListe("Dekorierer (Decorator)") }}
##### Kompositum (Composite)
{{ gibAufgabenListe("Kompositum (Composite)") }}
##### Stellvertreter (Proxy)
{{ gibAufgabenListe("Stellvertreter (Proxy)") }}

#### Verhaltensmuster (Behavioral Patterns)

##### Beobachter (Observer)
{{ gibAufgabenListe("Beobachter (Observer)") }}
##### Kommando (Command)
{{ gibAufgabenListe("Kommando (Command)") }}
##### Schablone (Template)
{{ gibAufgabenListe("Schablone (Template)") }}
##### Wiederholer (Iterator)
{{ gibAufgabenListe("Wiederholer (Iterator)") }}
##### Zustand (State)
{{ gibAufgabenListe("Zustand (State)") }}

#### Sonstige Entwurfsmuster

##### Modell-Präsentation-Steuerung (Model-View-Controller)
{{ gibAufgabenListe("Modell-Präsentation-Steuerung (Model-View-Controller)") }}
##### Einbringen von Abhängigkeiten (Dependency Injection)
{{ gibAufgabenListe("Einbringen von Abhängigkeiten (Dependency Injection)") }}


### Softwarearchitektur
{{ gibAufgabenListe("Softwarearchitektur") }}


### Testen

#### Kontrollflussorientieres Testen
{{ gibAufgabenListe("Kontrollflussorientieres Testen") }}
#### Datenflussorientiertes Testen
{{ gibAufgabenListe("Datenflussorientiertes Testen") }}

#### Formale Verifikation

##### wp-Kalkül
{{ gibAufgabenListe("wp-Kalkül") }}
##### Vollständige Induktion
{{ gibAufgabenListe("Vollständige Induktion") }}



## Technische Informatik (TECH)

### Ein-Adress-Befehl-Assembler
{{ gibAufgabenListe("Ein-Adress-Befehl-Assembler") }}
### Mehr-Adress-Befehl-Assembler
{{ gibAufgabenListe("Mehr-Adress-Befehl-Assembler") }}



## Theoretische Informatik (THEO)


### Reguläre Sprachen

#### Reguläre Grammatik
{{ gibAufgabenListe("Reguläre Grammatik") }}
#### Reguläre Ausdrücke
{{ gibAufgabenListe("Reguläre Ausdrücke") }}
#### Deterministisch endlicher Automat (DEA)
{{ gibAufgabenListe("Deterministisch endlicher Automat (DEA)") }}
#### Nichtdeterministisch endlicher Automat (NEA)
{{ gibAufgabenListe("Nichtdeterministisch endlicher Automat (NEA)") }}
#### Potenzmengenalgorithmus
{{ gibAufgabenListe("Potenzmengenalgorithmus") }}
#### Erweiteter Potenzmengenalgorithmus
{{ gibAufgabenListe("Erweiteter Potenzmengenalgorithmus") }}
#### Pumping-Lemma (Reguläre Sprache)
{{ gibAufgabenListe("Pumping-Lemma (Reguläre Sprache)") }}
#### Minimierungsalgorithmus
{{ gibAufgabenListe("Minimierungsalgorithmus") }}


### Kontextfreie Sprachen

#### Kontextfreie Grammtik
{{ gibAufgabenListe("Kontextfreie Grammtik") }}
#### Ableitung (Kontextfreie Sprache)
{{ gibAufgabenListe("Ableitung (Kontextfreie Sprache)") }}
#### Kellerautomat
{{ gibAufgabenListe("Kellerautomat") }}
#### Chomsky-Normalform
{{ gibAufgabenListe("Chomsky-Normalform") }}
#### CYK-Algorithmus
{{ gibAufgabenListe("CYK-Algorithmus") }}
### Pumping-Lemma (Kontextfreie Sprache)
{{ gibAufgabenListe("Pumping-Lemma (Kontextfreie Sprache)") }}


### Kontextsensitive Sprache
{{ gibAufgabenListe("Kontextsensitive Sprache") }}

#### Kontextsensitive Grammatik
{{ gibAufgabenListe("Kontextsensitive Grammatik") }}
#### Turing-Maschine
{{ gibAufgabenListe("Turing-Maschine") }}

### Berechenbarkeit
{{ gibAufgabenListe("Berechenbarkeit") }}

### Entscheidbarkeit
{{ gibAufgabenListe("Entscheidbarkeit") }}

### Komplexitätstheorie
{{ gibAufgabenListe("Komplexitätstheorie") }}

# Stichwort-Verzeichnis

Diese Informatik-Material- und Aufgabensammlung verwendet das TeX-Makro
`\index{}` um ein Stichwortverzeichnis zu erstellen. In dieses Makro
kann ganz normaler Text - also auch mit Leerzeichen eingesetzt werden.
Die einzelnen Stichwörter werden in der YAML-Datei
`Stichwortverzeichnis.yml` hinterlegt. Ein Stichwort muss eindeutig
sein, d. h. es darf nicht doppelt vorkommen. Durch die YAML-Syntax kann
die hierarchische Struktur des Verzeichnisses verwaltet werden.
Alle Stichwörter beginnen mit `- `, damit die YAML-Datei hier unten
als Markdown-Liste eingebettet werden kann.

{{ stichwortverzeichnis }}

## Makefile

| make ...   | Beschreibung  |
|------------|---------------|
| readme     | Die Datei README.md aus der Datei README_template.md erzeugen. |
| aufgaben   | Alle Aufgaben neu kompilieren. Die erste fehlerhafte Datei wird im Editor Visual Studio Code geöffnet. |
| sammlungen | Erzeuge verschiedene Aufgaben-Sammlungen. |

## Über meinen Nachnamen

aus dem [Digitalen Familiennamenwörterbuch Deutschlands (DFD)](http://www.namenforschung.net/id/name/183361/1)

`Bschlagengaul` auch `Bschlagngaul`, `Bschlangaul`, `Bschlangengaul`

Benennung nach Beruf zu mittelhochdeutsch `beslahen`, `beslagen` *„auf
etwas schlagen, schlagend etwas befestigen, beschlagen“*,
mittelhochdeutsch `den` *„den“* (Definitartikel; maskulin Akkusativ
Singular) und mittelhochdeutsch `gūl` *„Gaul, Pferd“*. Es handelt sich
um einen indirekten Berufsnamen für einen Hufschmied in Form eines
Satznamens (< [ich] beschlage den Gaul).
