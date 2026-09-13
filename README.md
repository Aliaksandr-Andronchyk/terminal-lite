# ТЕРМИНАЛ · lite

A tiny native macOS window that sends one prompt to the locally installed
Claude and Codex CLIs and places both answers side by side.

The project ships two ARM64 variants:

- `TerminalLite`: the smallest build.
- `TerminalLiteModels`: the same idea with Claude and Codex model selectors.

## Privacy

No API key, login token, session database, or personal path is bundled. Before
starting either CLI, ТЕРМИНАЛ removes Claude and OpenAI/Codex API-key variables
from the child environment. Each user signs in to their own local CLI install.

## Build

Requires macOS 13+, Xcode Command Line Tools, and Apple silicon.

```sh
./native/build.sh
```

The script creates raw ARM64 executables and ad-hoc-signed `.app` archives in
`public/downloads/`.

## Run from source

Install and sign in to the `claude` and `codex` CLIs, then launch either app.
macOS may require Control-click → Open for an ad-hoc-signed download.

## Repository map

- `native/base/` – smallest AppKit implementation.
- `native/model-switcher/` – compact implementation with model selectors.
- `public/downloads/` – reproducible binaries and zipped app bundles.
- `app/` – product website.
