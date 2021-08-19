# Aufgaben- und Materialsammlung „Lehramt Informatik“

Aufgaben- und Materialsammlung mit Lösungen für das Studium „Lehramt
Informatik“ in Bayern.

__Intention:__ insgemein Hoffnung auf Kontributionen
(Fehlerkorrekturen, weitere Lösungen etc.) durch die „Community“ durch
Pull-Request oder per-Mail an hermine.bschlangaul@gmx.net. Lösungen ohne
Gewähr ...

__Lizenz:__ Public Domain, siehe Datei „LICENSE“ im Repository, d. h.
Weiterverwendung ohne Namensnennung sowohl der kompilieren PDF-Dateien
als auch der TeX-Datei ist möglich.

__TeX:__ Alle Aufgaben und Materialen sind „geTeX’t“, d. h. mit Hilfe
des Textsatzsystems [TeX](https://www.ctan.org/) bzw. mit der
Makrossammlung [LaTeX](https://www.latex-project.org) gesetzt. Im Ordner
[.tex](https://github.com/hbschlang/lehramt-informatik/tree/main/.tex)
befindet sich eine mittlerweile umfangreiche [Sammlungen an
Hilfs-Klassen und
-Paketen](https://github.com/hbschlang/lehramt-informatik/raw/main/.tex/dokumentation.pdf),
die benötigt werden, um die Aufgaben zu setzen.

__Java:__ Zu diesem Repository, das vorallem TeX- und PDF-Dateien
enthält, gehört ein [Git-Repository mit
Java-Code](https://github.com/hbschlang/Java-Didaktik-Beispiele). Dieses
Java-Repository ist als [git
submodule](https://git-scm.com/book/de/v2/Git-Tools-Submodule)
eingebunden.

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



## Objektorientierte Modellierung und Programmierung (OOMUP)

### Vererbung
{{ stichwort "Vererbung" }}



## Algorithmen und Datenstrukturen (AUD)


### Rekursion
{{ stichwort "Rekursion" }}


### Suche
{{ stichwort "Suche" }}


### Sortieralgorithmen

#### Bubblesort
{{ stichwort "Bubblesort" }}
#### Selectionsort
{{ stichwort "Selectionsort" }}
#### Insertionsort
{{ stichwort "Insertionsort" }}
#### Quicksort
{{ stichwort "Quicksort" }}
#### Mergesort
{{ stichwort "Mergesort" }}
#### Heapsort
{{ stichwort "Heapsort" }}


### Algorithmische Komplexität (O-Notation)
{{ stichwort "Algorithmische Komplexität (O-Notation)" }}

#### Master-Theorem
{{ stichwort "Master-Theorem" }}


### Algorithmenmuster
{{ stichwort "Algorithmenmuster" }}


### Listen

#### Einfach-verkettete Liste
{{ stichwort "Einfach-verkettete Liste" }}
### Doppelt-verkettete Liste
{{ stichwort "Doppelt-verkettete Liste" }}
### Stapel (Stack)
{{ stichwort "Stapel (Stack)" }}
### Warteschlange (Queue)
{{ stichwort "Warteschlange (Queue)" }}


### Bäume

#### Binärbaum
{{ stichwort "Binärbaum" }}
#### AVL-Baum
{{ stichwort "AVL-Baum" }}
#### Halde (Heap)
{{ stichwort "Halde (Heap)" }}
#### B-Baum
{{ stichwort "B-Baum" }}
#### Streutabellen (Hashing)
{{ stichwort "Streutabellen (Hashing)" }}


### Graphen

#### Algorithmus von Dijkstra
{{ stichwort "Algorithmus von Dijkstra" }}
#### Minimaler Spannbaum
{{ stichwort "Minimaler Spannbaum" }}
#### Knotensuchalgorithmen
{{ stichwort "Knotensuchalgorithmen" }}



## Softwaresysteme (SOSY)


### Projektmanagement
{{ stichwort "Projektmanagement" }}


### Projektplanung
{{ stichwort "Projektplanung" }}

### Modellierung: UML-Diagramme

#### Struktur-Diagramme

##### Klassendiagramm
{{ stichwort "Klassendiagramm" }}
##### Objektdiagramm
{{ stichwort "Objektdiagramm" }}

#### Verhaltens-Diagramme

##### Sequenzdiagramm
{{ stichwort "Sequenzdiagramm" }}
##### Kommunikationsdiagramm
{{ stichwort "Kommunikationsdiagramm" }}
##### Aktivitätsdiagramm
{{ stichwort "Aktivitätsdiagramm" }}
##### Anwendungsfalldiagramm
{{ stichwort "Anwendungsfalldiagramm" }}
##### Zustandsdiagramm
{{ stichwort "Zustandsdiagramm" }}


### Entwurfsmuster

#### Erzeugungsmuster (Creational Patterns)

##### Abstrakte Fabrik (Abstract Factory)
{{ stichwort "Abstrakte Fabrik (Abstract Factory)" }}
##### Einzelstück (Singleton)
{{ stichwort "Einzelstück (Singleton)" }}
##### Erbauer (Builder)
{{ stichwort "Erbauer (Builder)" }}

#### Strukturmuster (Structural Patterns)

##### Adapter
{{ stichwort "Adapter" }}
##### Dekorierer (Decorator)
{{ stichwort "Dekorierer (Decorator)" }}
##### Kompositum (Composite)
{{ stichwort "Kompositum (Composite)" }}
##### Stellvertreter (Proxy)
{{ stichwort "Stellvertreter (Proxy)" }}

#### Verhaltensmuster (Behavioral Patterns)

##### Beobachter (Observer)
{{ stichwort "Beobachter (Observer)" }}
##### Kommando (Command)
{{ stichwort "Kommando (Command)" }}
##### Schablone (Template)
{{ stichwort "Schablone (Template)" }}
##### Wiederholer (Iterator)
{{ stichwort "Wiederholer (Iterator)" }}
##### Zustand (State)
{{ stichwort "Zustand (State)" }}

#### Sonstige Entwurfsmuster

##### Modell-Präsentation-Steuerung (Model-View-Controller)
{{ stichwort "Modell-Präsentation-Steuerung (Model-View-Controller)" }}
##### Einbringen von Abhängigkeiten (Dependency Injection)
{{ stichwort "Einbringen von Abhängigkeiten (Dependency Injection)" }}


### Softwarearchitektur
{{ stichwort "Softwarearchitektur" }}


### Testen

#### Kontrollflussorientieres Testen
{{ stichwort "Kontrollflussorientieres Testen" }}
#### Datenflussorientiertes Testen
{{ stichwort "Datenflussorientiertes Testen" }}

#### Formale Verifikation

##### wp-Kalkül
{{ stichwort "wp-Kalkül" }}
##### Vollständige Induktion
{{ stichwort "Vollständige Induktion" }}



## Technische Informatik (TECH)

### Ein-Adress-Befehl-Assembler
{{ stichwort "Ein-Adress-Befehl-Assembler" }}
### Mehr-Adress-Befehl-Assembler
{{ stichwort "Mehr-Adress-Befehl-Assembler" }}



## Theoretische Informatik (THEO)


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
{{ stichwort "Kontextsensitive Sprache" }}

#### Kontextsensitive Grammatik
{{ stichwort "Kontextsensitive Grammatik" }}
#### Turing-Maschine
{{ stichwort "Turing-Maschine" }}

### Berechenbarkeit
{{ stichwort "Berechenbarkeit" }}

### Entscheidbarkeit
{{ stichwort "Entscheidbarkeit" }}

### Komplexitätstheorie
{{ stichwort "Komplexitätstheorie" }}

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
die hierarchische Struktur des Verzeichnisses verwaltet werden.
Alle Stichwörter beginnen mit `- `, damit die YAML-Datei hier unten
als Markdown-Liste eingebettet werden kann.

{{ stichwortverzeichnis }}

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
