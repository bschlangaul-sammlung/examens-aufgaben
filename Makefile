readme:
	bschlangaul-werkzeug.js generiere-readme

aufgaben:
	bschlangaul-werkzeug.js kompiliere-tex --ausschliessen Theorie

sammlungen_korrekt:
	bschlangaul-werkzeug.js sammlungen aufgaben --korrektheit 2 -vvv

sammlungen_alle:
	bschlangaul-werkzeug.js sammlungen aufgaben --ziel Alle-Aufgaben -vvv

.PHONY: readme aufgaben sammlungen
