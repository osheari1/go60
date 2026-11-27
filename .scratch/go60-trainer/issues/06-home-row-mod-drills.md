# 06: Home-row-mod drills

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill home-row mods three ways: hold a mod on one hand and tap on the other; stack two or three mods on one hand; roll two same-hand keys fast and get letters. The Trainer tells me when a roll fired a shortcut. This covers the 8 per-finger layers. Stories 41 to 44, 46.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] Cross-hand drill: chips such as Ctrl+O; the hint lights the home-row key to hold and the key to tap.
- [ ] Stacked drill: two-mod and three-mod chords held on one hand.
- [ ] Roll drill: same-hand pairs that must arrive as two letters with no modifier down.
- [ ] The engine checks modifier press and release in these drills, and says so when a roll produced a shortcut or a held mod produced a letter.
- [ ] Chords come from a fixed safe list; nothing the browser steals.
- [ ] Suite checks under Node: a roll that arrives with a modifier down is an error; a correct cross-hand chord advances; every chord is reachable and off the unsafe list.
- [ ] If rolls misfire often on the real board, say so in the pull request. Timing changes are out of scope.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.
