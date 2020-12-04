# lehramt-informatik

Materialsammlung für das Studium Lehramt Informatik

## Themen

- Datenbanksysteme (DB)
    - [tex](//DB/01-Entity-Relation-Modell/Entity-Relation-Modell.tex) Entity-Relation-Modell
    - [tex](//DB/02-Relationenmodell.tex) Relationenmodell
    - [tex](//DB/03-Relationale-Algebra.tex) Relationale Algebra
    - SQL
        - [tex](//DB/04-SQL/01-Grundlagen.tex) Grundlagen
        - vertieft
    - Normalformen
        - [tex](//DB/05-Normalformen/01-Schluessel.tex) Schlüssel
        - [tex](//DB/05-Normalformen/02-Funktionale-Abhaenigkeiten.tex) Funktionale Abhängigkeiten
        - [tex](//DB/05-Normalformen/03-Normalformen.tex) Normalformen
            - [tex](//DB/05-Normalformen/04-Synthese-Algorithmus.tex) Synthese-Algorithmus
    - [tex](//DB/06-Transaktionen.tex) Transaktionen
- Programmierung
    - Objektorientierte Modellierung und Programmierung (OOMUP)
        - Diagramme
            - [tex](//OOMUP/Diagramme/01-Objektdiagramm.tex) Objektdiagramm
            - [tex](//OOMUP/Diagramme/02-Klassendiagramm/Klassendiagramm.tex) Klassendiagramm
            - [tex](//OOMUP/Diagramme/03-Zustandsdiagramm.tex) Zustandsdiagramm
            - [tex](//OOMUP/Diagramme/04-Struktogramm/Struktogramm.tex) Struktogramm
            - [tex](//OOMUP/Diagramme/05-Sequenzdiagramm.tex) Sequenzdiagramm
    - Algorithmen und Datenstrukturen (AUD)
        - Java
            - main-Methode
            - equals-Methode
            - forEach
        - [tex](//AUD/01-Rekursion/01-Rekursion.tex) Rekursion
            - [tex](//AUD/01-Rekursion/02-Vollstaendige-Induktion.tex) Vollständige Induktion
        - [tex](//AUD/02-Sortieralgorithmen/00-Sortieralgorithmen.tex) Sortieralgorithmen
            - [tex](//AUD/02-Sortieralgorithmen/01-Klassifizierung.tex) Klassifizierung
            - Einzelne Algorithmen
                - [tex](//AUD/02-Sortieralgorithmen/02-Selectionsort/02-Selectionsort.tex) Selectionsort
                - [tex](//AUD/02-Sortieralgorithmen/03-Insertionsort.tex) Insertionsort
                - [tex](//AUD/02-Sortieralgorithmen/04-Mergesort.tex) Mergesort
                - [tex](//AUD/02-Sortieralgorithmen/05-Bubblesort.tex) Bubblesort
                - [tex](//AUD/02-Sortieralgorithmen/06-Quicksort.tex) Quicksort
            - [tex](//AUD/02-Sortieralgorithmen/10-Algorithmische-Komplexitaet.tex) Algorithmische Komplexität
        - [tex](//AUD/03-Algorithmenmuster/01-Algorithmenmuster.tex) Algorithmenmuster
            - [tex](//AUD/03-Algorithmenmuster/02-Greedy-Algorithmen.tex) Greedy-Algorithmen
            - [tex](//AUD/03-Algorithmenmuster/03-Divide-and-Conquer.tex) Divide-and-Conquer
            - [tex](//AUD/03-Algorithmenmuster/04-Dynamisches-Programmieren.tex) Dynamisches Programmieren
            - [tex](//AUD/03-Algorithmenmuster/05-Backtracking.tex) Backtracking
        - Listen
            - [tex](//AUD/04-Listen/01-Listen.tex) verkettete lineare Listen
            - [tex](//AUD/04-Listen/02-Stack.tex) Stack
            - [tex](//AUD/04-Listen/03-Queue.tex) Queue
        - [tex](//AUD/05-Baeume/01-Grundlagen.tex) Bäume und Hashing
            - [tex](//AUD/05-Baeume/02-Binaerer-Suchbaum.tex) Binärer Suchbaum
            - [tex](//AUD/05-Baeume/03-AVL-Baum.tex) AVL-Baum
            - [tex](//AUD/05-Baeume/04-B-Baum.tex) B-Baum
            - [tex](//AUD/05-Baeume/05-Heap.tex) Heap (Halden) und HeapSort
            - [tex](//AUD/05-Baeume/06-Hashing.tex) Hashing (Streutabellen)
        - [tex](//AUD/06-Graphen/01-Graphen.tex) Graphen
            - [tex](//AUD/05-Baeume/02-Dijkstra.tex) Algorithmus von Dijkstra
            - [tex](//AUD/05-Baeume/03-Spannbaeume) Spannbäume
            - [tex](//AUD/05-Baeume/04-Tiefen-Breitensuche.tex) Tiefensuche, Breitensuche

## Staatsexamen
{{ staatsexamen }}

# Stichwort-Verzeichnis

Diese Informatik-Material- und Aufgabensammlung verwendet das TeX-Makro
`\index{}` um ein Stichwortverzeichnis zu erstellen. In dieses Makro
kann ganz normaler Text - also auch mit Leerzeichen eingesetzt werden.

# Ordner-Struktur

`03` steht für Frühjahr `09` steht für Herbst

eine Aufgabe:
`Staatsexamen/66116/2018/03/Thema-2/Teilaufgabe-2/Aufgabe-2.tex`

geTeXtes komplettes Staatsexamen:
`Staatsexamen/66116/2018/03/Staatsexamen.tex`

gescanntes komplettes Staatsexamen (Angabe):
`Staatsexamen/66116/2018/03/Scan.pdf`

OCR des oben genannten Scans:
`Staatsexamen/66116/2018/03/OCR.txt`

# TeX-Klassen und Pakete installieren

```
make install_tex
```

Die Java-Dateien sind als Git Submodule eingebunden:

```
git submodule update --init
```

# LaTeX-Vorlage

```latex
\documentclass{lehramt-informatik}

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
