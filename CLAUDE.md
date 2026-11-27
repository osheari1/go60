# go60

Job: hold my Go60 Layout and the tools that build and flash it. Read README.md and GLOSSARY.md first.

## Rules

- Change keys by editing `config/go60.json`, then `bin/go60-gen < config/go60.json > config/go60.keymap`. Never edit the Keymap by hand.
- Kconfig goes in `config/go60.conf`.
- Run `tests/run` before every commit. It must print `all passed`.
- `go60-gen` fails on a Layout feature it does not know: extend it, with a golden pair from the editor's own export.
- Do not run `go60-flash`: it needs a human at the keyboard.
- Branch work goes in a worktree under `.worktrees/` (see `~/rs/home/docs/agents/workmux.md`).

## Agent skills

### Issue tracker

Local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles, each label equal to its role name, recorded as `Status:` lines. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `GLOSSARY.md` + `docs/adr/`. See `docs/agents/domain.md`.
