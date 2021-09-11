#! /bin/sh

OLD_PWD="$(pwd)"

_config() {
  cd "$OLD_PWD/$1"
  git-config-bschlangaul.sh
}

_config ".scripts/nodejs"
_config "Code"
_config ""
