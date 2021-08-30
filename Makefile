texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_config install_cli install_tex readme

git_submodule:
	git submodule update --init

install_config:
	.scripts/shell/install-config.sh

install_cli:
	cd .scripts/nodejs; npm install; npm run build

build: build_cli

build_cli:
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

.PHONY: install_tex readme install_cli install_config clean
