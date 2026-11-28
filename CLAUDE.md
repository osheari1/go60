# go60

Job: hold my Go60 Layout and the tools that build and flash it. Read README.md and GLOSSARY.md first.

## Rules

- Change keys by editing `config/go60.json`, then `bin/go60-gen < config/go60.json > config/go60.keymap`. Never edit the Keymap by hand.
- Kconfig goes in `config/go60.conf`.
- Run `tests/run` before every commit. It must print `all passed`.
  - Docs-only commit: every path in `git diff --cached --name-only` ends in `.md`. Skip `tests/run`.
- `go60-gen` fails on a Layout feature it does not know: extend it, with a golden pair from the editor's own export.
- Do not run `go60-flash`: it needs a human at the keyboard.

## Agent skills

### Issue tracker

Local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles, each label equal to its role name, recorded as `Status:` lines. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `GLOSSARY.md` + `docs/adr/`. See `docs/agents/domain.md`.

### Pipeline

Steps, in order: branch, review, pr, check, merge, release, deploy.

- Before a step, read `docs/agents/<step>.md` in the repo the work belongs to.
- Review runs twice: local review before pr, bot review after the PR opens.
- Step files never fall back to home's. Each repo is different.
- These rules replace any other branch or merge rules.
- File missing, or `Status: not defined`:
  - warn the operator once, offer to fill it from what the repo already has;
  - then carry on. Nothing is blocked.
  - Missing file: also offer to create the stub (title, `Status: not defined`, `Covers:` line).
- Precedence: an MP Skills rule beats a step file. A ticket's triage state beats `merge.md` "Who merges".

### Skill map

Which MP Skills skill does what, and which steps it touches: `~/rs/home/docs/agents/mp-skills.md`.

- Unsure which skill or flow fits? Ask the operator to run `/ask-matt` (user-invoked only).
- Use MP Skills' own words for its concepts (e.g. ship). Never redefine them.
