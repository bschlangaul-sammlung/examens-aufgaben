#! /bin/sh

for PDF in $(find . -iname "*.pdf"); do
	echo $PDF
	ocrmypdf \
		--deskew \
		--rotate-pages \
		-l deu+eng \
		--sidecar "$PDF.txt" \
		"$PDF" \
		"$PDF"
done
