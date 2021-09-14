#! /bin/sh

OLD_PWD="$(pwd)"

_config() {
  cd "$OLD_PWD/$1"
  git pull origin main
  git checkout main
}

_config "werkzeug"
_config "java"
_config ""
