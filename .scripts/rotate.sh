#! /bin/sh

pdftk "$1" cat 1-endeast output "${1}_rotated.pdf"
