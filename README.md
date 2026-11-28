# go60

Keymap and firmware tools for my MoErgo Go60 (ZMK, MoErgo fork).
Started from [go60-zmk-config](https://github.com/moergo-keyboards/go60-zmk-config). Words: [GLOSSARY.md](GLOSSARY.md).

## How it fits

```
Layout Editor ──export──▶ go60-import ──▶ config/go60.json   (Layout: source of truth)
agent edits ─────────────────────────────▶      │
                                                 ▼ go60-gen
                                          config/go60.keymap (Keymap: generated)
                                                 │ push
                                                 ▼ CI (.github/workflows/build.yml)
                                          go60.uf2 ──▶ go60-flash ──▶ right half, left half
```

- The Layout is the source of truth. Why: [ADR 0001](docs/adr/0001-layout-json-is-source-of-truth.md).
- Never edit `config/go60.keymap` by hand. CI fails if it is stale.
- Kconfig lives in `config/go60.conf`, not in the Layout.
- Firmware is pinned to `moergo-sc/zmk` `v26.09` in `build.yml`.

## Tools

| Want | Command |
|---|---|
| Edit visually | Import `config/go60.json` in the Layout Editor (Settings → Local Backup and Restore) |
| Bring an editor export in | `go60-import <export.json> [<export.keymap>]` |
| Regenerate the Keymap after editing the Layout | `bin/go60-gen < config/go60.json > config/go60.keymap` |
| Flash HEAD's CI build | `go60-flash` |
| Flash a local file | `go60-flash <file.uf2>` |
| See any layer, and what each key sends (the Trainer) | `go60-train --open` |
| Run the suite | `tests/run` |

- Give `go60-import` the editor's `.keymap` too: it then proves `go60-gen` matches the editor.
  A mismatch saves the pair as a new golden test in `tests/golden/`.
- `go60-train`, the Trainer:
  - `go60-train < Layout.json > trainer.html`: one offline HTML page from a Layout on stdin.
  - `--open` finds the Layout in the git checkout you are in, else in `${GO60_REPO:-~/rs/go60}`.
  - `--open` writes the page to `${XDG_CACHE_HOME:-~/.cache}/go60/trainer.html` and opens the browser.
  - Key positions come from `config/info.json`, the board's own description.
- `go60-flash` is a wizard: it prompts each bootloader key combo, waits for the drive, checks it, copies.
- Installed on laptops by the cfg component `go60`, pinned to a tag of this repo.
- Releases are tagged by CI: each push to `main` that passes the build job (`tests/run` and firmware) gets the next `v<N>` (`.github/tag`).
  Bumping cfg's `pkgver` to that tag is still by hand.

## Not here

- Factory reset and re-pair: do it by hand after a firmware version change. [Go60 guide](https://docs.moergo.com/go60-user-guide/customizing-key-layout/).
- Home-row-mod tuning: later.
