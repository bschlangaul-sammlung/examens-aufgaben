#! /bin/sh

CONFIG=/etc/lehramt-informatik.config.tex

BENUTZER="$USER"
ARBEITSVERZEICHNIS="$(pwd)"

sudo touch "$CONFIG"
sudo chown "$USER" "$CONFIG"

echo "\\\\def\\\\LehramtInformatikRepository{$ARBEITSVERZEICHNIS}" > /etc/lehramt-informatik.config.tex
