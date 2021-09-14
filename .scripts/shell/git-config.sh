#! /bin/sh

OLD_PWD="$(pwd)"

_config() {
  cd "$OLD_PWD/$1"
  git-config-bschlangaul.sh
}

_config "werkzeug"
_config "java"
_config ""
