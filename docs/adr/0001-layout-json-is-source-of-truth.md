# 1. The Layout JSON is the source of truth; the Keymap is generated

Date: 2026-11-27. Status: accepted.

## Context

- I want to edit the keyboard two ways: by agent (text in git) and in the Go60 Layout Editor (visual).
- The editor imports only its own JSON. It does not import `.keymap`.
- No open tool converts editor JSON to a Go60 `.keymap` (glovebox and zmk-layout know Glove80 only).
- nickcoutsos/keymap-editor has no Go60 support and breaks on preprocessor macros.

## Decision

- `config/go60.json` (editor JSON) is the source of truth.
- `bin/go60-gen` turns it into `config/go60.keymap`, matching the editor's own export token for token.
- Golden pairs under `tests/golden/` prove the match. CI fails on a stale Keymap.

## Consequences

- One format both the agent and the editor can read and write.
- We own a reverse-engineered generator. Editor features TailorKey does not use may be missing; an import with the editor's `.keymap` catches that and saves a new golden pair.
- The editor marks JSON import experimental. If its format changes, the golden test fails loudly; the committed Keymap still builds.
