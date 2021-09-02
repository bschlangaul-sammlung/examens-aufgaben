#! /bin/sh

CONFIG=/etc/lehramt-informatik.config.tex

BENUTZER="$USER"
ARBEITSVERZEICHNIS="$(pwd)"

sudo touch "$CONFIG"
sudo chown "$USER" "$CONFIG"

# Leeren
> "$CONFIG"

_setze_definition() {
  echo "\\\\def\\\\$1{$2}" >> "$CONFIG"
}

_setze_definition LehramtInformatikRepository "$ARBEITSVERZEICHNIS"
_setze_definition LehramtInformatikGithubDomain "https://github.com"
_setze_definition LehramtInformatikGithubRawDomain "https://raw.githubusercontent.com"
_setze_definition LehramtInformatikGithubTexRepo "hbschlang/lehramt-informatik"
_setze_definition LehramtInformatikGithubCodeRepo "hbschlang/Java-Didaktik-Beispiele"
_setze_definition LehramtInformatikGitBranch "main"
_setze_definition LehramtInformatikAutorName "Hermine~Bschlangaul"
_setze_definition LehramtInformatikAutorEmail "hermine.bschlangaul@gmx.net"
_setze_definition LehramtInformatikTitel "Aufgaben-~und~Materialsammlung~„Lehramt~Informatik“"
