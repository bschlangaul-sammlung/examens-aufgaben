texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_tex readme git_submodule install_cli

git_submodule:
	git submodule update --init

install_tex:
	.tex/install.sh

install_cli:
	cd .scripts; npm install

readme:
	.scripts/readme-from-template.sh

.PHONY: install_tex readme git_submodule install_cli
