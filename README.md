# TERSEY · lite

Самый лёгкий терминал в мире: нативное macOS-приложение для общения с Claude Code и Codex.
Один Swift-файл (~600 строк) + вращающийся куб на чистом arm64-ассемблере. Бинарник ~220 КБ.

## Сборка

```sh
./build.sh
```

Соберёт `TerseyLite` и поставит `~/Applications/TerseyLite.app` (подпись ad-hoc;
свой сертификат: `IDENTITY="Apple Development: ..." ./build.sh`).

Никаких ключей внутри нет: приложение использует подписочный логин установленных
CLI `claude` / `codex` (переменная `ANTHROPIC_API_KEY` намеренно вычищается из окружения).

Требования: macOS 13+, Xcode Command Line Tools, установленные CLI `claude` и/или `codex`.
