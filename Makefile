readme:
	bschlangaul-werkzeug.js generiere-readme

clean:
	.scripts/shell/clean.sh

kompiliere_aufgaben:
	bschlangaul-werkzeug.js kompiliere-aufgaben

sammlungen:
	bschlangaul-werkzeug.js sammlungen haupt -vvv

.PHONY: readme  clean
