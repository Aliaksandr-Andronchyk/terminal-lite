#!/bin/zsh
set -euo pipefail

ROOT="${0:A:h}"
DOWNLOADS="$ROOT/../public/downloads"
WORK="$ROOT/.build"

rm -rf "$WORK"
mkdir -p "$WORK" "$DOWNLOADS"

build_variant() {
  local source_dir="$1"
  local executable="$2"
  local app_name="$3"
  local app="$WORK/$app_name.app"

  clang -c "$ROOT/$source_dir/cube.s" -o "$WORK/$app_name-cube.o"
  swiftc -O "$ROOT/$source_dir/terseylite.swift" "$WORK/$app_name-cube.o" \
    -o "$DOWNLOADS/$executable"

  mkdir -p "$app/Contents/MacOS"
  cp "$DOWNLOADS/$executable" "$app/Contents/MacOS/$executable"
  cp "$ROOT/$source_dir/Info.plist" "$app/Contents/Info.plist"
  codesign --force --sign - "$app"
  ditto -c -k --sequesterRsrc --keepParent "$app" "$DOWNLOADS/$app_name-macOS-arm64.zip"
}

build_variant base TerminalLite TerminalLite
build_variant model-switcher TerminalLiteModels TerminalLiteModels

rm -rf "$WORK"
shasum -a 256 "$DOWNLOADS"/TerminalLite*
ls -lh "$DOWNLOADS"/TerminalLite*
