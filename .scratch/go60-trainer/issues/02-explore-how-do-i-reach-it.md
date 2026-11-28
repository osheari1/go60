# 02: Explore: how do I reach it

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** Explore explains the Layout, not just draws it. Each layer says how I get to it. I search for a character or key name and the picture shows where it lives and what to hold. Combos are drawn. Each layer has a plain-language note. This ticket builds the Reach module that every later ticket uses. Stories 9, 12, 14 to 18.

**Blocked by:** 01

**Status:** resolved

- [x] Reach module answers "how do I produce this output?" with the keys to hold and the key or keys to tap, on the base mode `HRM_WinLinx`.
- [x] It resolves thumb layer holds, home-row mods, shifted keys, combos and pass-through keys.
- [x] It reads the structure of hold-taps and macros; it does not match on their names.
- [x] It loads under Node with no browser.
- [x] A pass-through key falls to the next lower *active* layer, as ZMK resolves it, not to the lowest layer that holds this one. Today `below()` in `lib/trainer.html` picks the lowest. Suite check: a layer reachable from two layers shows the right fall-through for each route.
- [x] Each layer shows how to reach it: which key to hold, or which key toggles it.
- [x] Combos are drawn as linked keys with their result.
- [x] Search by character or key name lights the path on the picture.
- [x] Each layer has a short purpose note; the 8 per-finger layers are explained as home-row-mod machinery, with the cross-hand, stacked and same-hand cases.
- [x] The three base modes are shown with how to switch between them.
- [x] `Magic` shows a warning on its bootloader, reset and Bluetooth-clear keys.
- [x] Suite checks under Node, against the repo's Layout: a symbol via a thumb hold, a function key via its combo, a modifier via a home-row hold, a capital via cross-hand Shift, a key found only on `Magic`.
- [x] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.

## Comments

- Closed by RALPH: Reach module in lib/trainer.html: Reach.reach/paths (hold + tap path for a character, chord or key name, via thumb holds, home-row mods, shifted keys, combos, pass-through; by structure, not names), Reach.ways (route per base mode), route-aware pass-through (next lower active layer; below() removed), Reach.note (purpose notes; per-finger layers explained; Magic warning), Reach.combos. Explore shows reach routes, notes, combos and a Find box that lights the path. Suite checks for every ticket case; commit 0bcdacb. Still needs a human: merge, tag go60, bump cfg's go60 component.
- Reopened (operator, 2026-11-28), from code review:
  - Search for `Ctrl+Z` or `Ctrl+C` shows "Hold Keypad" via key 47, a plain `&layer` key, before the `Cursor` thumb hold (⌫). The order comes from search order, not a rule. Spec: "the hint shows the intended path"; story 40 puts editing on `Cursor`; thumbs are "Backspace gives `Cursor`, Delete gives `Keypad`".
  - Want: among equal-length routes, a thumb layer-hold wins over a plain layer key. Derive "thumb" from the Layout and `config/info.json`, not from key numbers or layer names.
  - Want: a route through a plain layer key names the key, like thumb routes do ("Hold ⌫ (Cursor)"), not just "Hold Keypad".
  - Red first: a suite check that `Reach.paths(layout, 'Ctrl+Z')[0]` holds the `Cursor` thumb, and one for the plain-key wording. See them fail before changing `lib/trainer.html`.
  - Tick every box above that the code meets.

- Closed by RALPH: Review fixes in 0a0f983: Reach.board(layout, keys) takes the board's key positions from config/info.json. Thumb keys are found by their info.json label. Among equal-length routes, a thumb layer-hold now beats a plain layer key, so Ctrl+Z gives 'Hold ⌫ (Cursor), then tap ⌃Z'. A route through a plain layer key names the key by place: 'Hold the right-hand key in row 4, column 6 (Keypad)'. Two red suite checks were added first. tests/run: all passed. Still needs a human: merge, tag go60, bump cfg's go60 component.
