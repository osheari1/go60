# 02: Explore: how do I reach it

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** Explore explains the Layout, not just draws it. Each layer says how I get to it. I search for a character or key name and the picture shows where it lives and what to hold. Combos are drawn. Each layer has a plain-language note. This ticket builds the Reach module that every later ticket uses. Stories 9, 12, 14 to 18.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] Reach module answers "how do I produce this output?" with the keys to hold and the key or keys to tap, on the base mode `HRM_WinLinx`.
- [ ] It resolves thumb layer holds, home-row mods, shifted keys, combos and pass-through keys.
- [ ] It reads the structure of hold-taps and macros; it does not match on their names.
- [ ] It loads under Node with no browser.
- [ ] A pass-through key falls to the next lower *active* layer, as ZMK resolves it, not to the lowest layer that holds this one. Today `below()` in `lib/trainer.html` picks the lowest. Suite check: a layer reachable from two layers shows the right fall-through for each route.
- [ ] Each layer shows how to reach it: which key to hold, or which key toggles it.
- [ ] Combos are drawn as linked keys with their result.
- [ ] Search by character or key name lights the path on the picture.
- [ ] Each layer has a short purpose note; the 8 per-finger layers are explained as home-row-mod machinery, with the cross-hand, stacked and same-hand cases.
- [ ] The three base modes are shown with how to switch between them.
- [ ] `Magic` shows a warning on its bootloader, reset and Bluetooth-clear keys.
- [ ] Suite checks under Node, against the repo's Layout: a symbol via a thumb hold, a function key via its combo, a modifier via a home-row hold, a capital via cross-hand Shift, a key found only on `Magic`.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.
