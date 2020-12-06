# lehramt-informatik

Materialsammlung für das Studium Lehramt Informatik in Bayern.

## Staatsexamensaufgaben

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



# TeX-Klassen und Pakete installieren

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
