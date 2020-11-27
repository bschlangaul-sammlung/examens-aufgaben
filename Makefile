texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_tex readme git_submodule

git_submodule:
	git submodule update --init

install_tex:
	for BASENAME in \
		basis \
		baum \
		cpm \
		er \
		formatierung \
		gantt \
		graph \
		kontrollflussgraph \
		literatur \
		literatur-dummy \
		makros \
		mathe \
		quicksort \
		rmodell \
		sortieren \
		syntax \
		uml \
	; do \
		echo $$BASENAME ; \
		cp -f .tex/lehramt-informatik-$${BASENAME}.sty $(HOME)/texmf/tex ; \
	done

	cp -f .tex/lehramt-informatik-sortieren.lua $(HOME)/texmf/tex
	cp -f .tex/lehramt-informatik.cls $(HOME)/texmf/tex
	cp -f .tex/lehramt-informatik-minimal.cls $(HOME)/texmf/tex

	cp -f .tex/tikz-er2.sty $(HOME)/texmf/tex
	cp -f .tex/tikz-er2.pdf $(HOME)/texmf/doc

	cp -f .tex/tikz-uml.sty $(HOME)/texmf/tex/tikz-uml.sty
	cp -f .tex/tikz-uml.pdf $(HOME)/texmf/doc

	cp -f .tex/tikz-uml-activity.sty $(HOME)/texmf/tex

readme:
	.scripts/readme-from-template.sh

.PHONY: install_tex readme
