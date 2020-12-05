texmf = $(HOME)/texmf
texmftex = $(texmf)/tex

all: git_submodule install_config install_cli install_tex readme

git_submodule:
	git submodule update --init

install_config:
	su -c "echo "\\\\def\\\\LehramtInformatikRepository{$(pwd)}" > /etc/lehramt-informatik.config.tex"

install_cli:
	cd .scripts; npm install

install_tex:
	.tex/install.sh

readme:
	.scripts/main-script.js generate-readme

.PHONY: install_tex readme git_submodule install_cli install_config
