#! /bin/sh

_install() {
  FILES="$(find $1 -type f | sed "s#$1/##")"
  for FILE in $FILES; do
    echo $FILE;
    cp -f "$1/$FILE" "$HOME/texmf/tex/lehramt-informatik-$FILE"
  done
}

rm -f "$HOME"/texmf/tex/lehramt-informatik*

_install .tex/erweiterungen
_install .tex/basis

# Klassen

cp -f .tex/lehramt-informatik.cls $HOME/texmf/tex
cp -f .tex/lehramt-informatik-minimal.cls $HOME/texmf/tex

# Fremd-Pakete

cp -f .tex/fremd/tikz-er2.sty $HOME/texmf/tex
cp -f .tex/fremd/tikz-er2.pdf $HOME/texmf/doc

cp -f .tex/fremd/tikz-uml.sty $HOME/texmf/tex
cp -f .tex/fremd/tikz-uml.pdf $HOME/texmf/doc

cp -f .tex/fremd/tikz-uml-activity.sty $HOME/texmf/tex