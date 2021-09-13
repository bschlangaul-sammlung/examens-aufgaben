texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_config install_cli install_tex readme

git_submodule:
	git submodule update --init

install_config:
	.scripts/shell/install-config.sh

build: werkzeug_baue

werkzeug_installiere:
	cd .scripts/nodejs; npm install; npm run build

werkzeug_baue:
	cd .scripts/nodejs; npm run build

install_tex:
	.tex/install.sh

install_tex_dtx: install_tex
	.scripts/nodejs/dist/main.js dtx

tex: install_tex_dtx

readme:
	.scripts/nodejs/dist/main.js generiere-readme

clean:
	.scripts/shell/clean.sh

pull_submodules:
	.scripts/shell/git-pull-checkout-main.sh

sammlungen:
	.scripts/nodejs/dist/main.js sammlungen haupt -vvv

.PHONY: install_tex readme install_cli install_config clean
