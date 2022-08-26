texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_config install_cli install_tex readme

git_submodule:
	git submodule update --init

config:
	.scripts/shell/install-config.sh
	.scripts/shell/git-config.sh

build: werkzeug_baue

werkzeug_installiere:
	cd werkzeug; npm install; npm run build

werkzeug_baue:
	cd werkzeug; npm run build

install_tex:
	.tex/install.sh

install_tex_dtx: install_tex
	werkzeug/dist/main.js dtx

tex: install_tex_dtx

readme:
	bschlangaul-werkzeug generiere-readme

clean:
	.scripts/shell/clean.sh

pull_submodules:
	.scripts/shell/git-pull-checkout-main.sh

sammlungen:
	werkzeug/dist/main.js sammlungen haupt -vvv

.PHONY: install_tex readme install_cli install_config clean
