#! /bin/sh

cp README_template.md README.md

sed -i 's+//DB+https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/01-DB+g' README.md
sed -i 's+//AUD+https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/02-Programmierung/02-AUD+g' README.md
sed -i 's+//OOMUP+https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/02-Programmierung/01-OOMUP+g' README.md
sed -i 's+//EXAMEN+https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/Staatsexamen+g' README.md
#sed -i 's+//+https://raw.githubusercontent.com/hbschlang/lehramt-informatik/master/+g' README.md
