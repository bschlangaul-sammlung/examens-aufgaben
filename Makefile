texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: install_tex readme git_submodule

git_submodule:
	git submodule update --init

install_tex:
	.tex/install.sh

readme:
	.scripts/readme-from-template.sh

.PHONY: install_tex readme
