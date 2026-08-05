#!/bin/zsh
# Сборка TERSEY · lite: один swift-файл + вращающийся куб на arm64-ассемблере.
# Подпись ad-hoc. Свой сертификат можно подставить: IDENTITY="..." ./build.sh
set -e
cd "$(dirname "$0")"
clang -c cube.s -o cube.o
swiftc -O terseylite.swift cube.o -o TerseyLite

APP=${APP:-~/Applications/TerseyLite.app}
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"
cp TerseyLite "$APP/Contents/MacOS/TerseyLite"
cp Info.plist "$APP/Contents/Info.plist"
codesign --force --sign "${IDENTITY:--}" "$APP"
echo "готово: $APP"
