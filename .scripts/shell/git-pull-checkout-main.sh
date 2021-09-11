#! /bin/sh

OLD_PWD="$(pwd)"

_config() {
  cd "$OLD_PWD/$1"
  git pull
  git checkout origin main
}

_config ".scripts/nodejs"
_config "Code"
_config ""
