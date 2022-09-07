readme:
	bschlangaul-werkzeug.js generiere-readme

aufgaben:
	bschlangaul-werkzeug.js kompiliere-tex --ausschliessen Theorie

sammlungen_korrekt:
	bschlangaul-werkzeug.js sammlungen aufgaben --korrektheit 2 -vvv

sammlungen_alle_aufgaben:
	bschlangaul-werkzeug.js sammlungen aufgaben-ng
	lualatex --shell-escape Alle-Aufgaben.tex

sammlungen_alle_examens_aufgaben:
	bschlangaul-werkzeug.js sammlungen aufgaben --ziel Alle-Examens-Aufgaben -vvv

rsync_pdfs:
	rsync --archive --verbose --delete --prune-empty-dirs --include="*/" --include="*.pdf" --exclude="*"   . ../pdfs

.PHONY: readme aufgaben sammlungen
