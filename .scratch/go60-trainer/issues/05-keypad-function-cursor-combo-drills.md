# 05: Keypad, function-key, cursor and combo drills

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill the keys that print nothing. The line shows them as chips I read ahead in. Drills: number pad and arithmetic on `Keypad`, function keys on `Keypad`, arrows and the editing cluster on `Cursor`, and the F1 to F12 and Caps Lock combos. Stories 20, 37 to 40, 45, 46.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] The engine accepts key and chord tokens and shows them as chips in the same look-ahead line.
- [ ] Keypad drill: numbers and arithmetic.
- [ ] Function-key drill, hinted through `Keypad`; combo drill, hinted through the combo pairs, plus Caps Lock.
- [ ] Cursor drill: arrows, Home, End, Page Up, Page Down, select and extend keys, cut, copy, paste, undo, redo.
- [ ] No drill emits a chord the browser cannot trap: no Ctrl+W, Ctrl+T, Ctrl+N, Alt+Tab, nothing with GUI.
- [ ] Each `Keypad` and `Cursor` key is checked in Firefox; a key the page never sees is left out of drills, stays in Explore, and is listed in the pull request.
- [ ] Suite checks: Reach answers for one key on `Keypad` and one on `Cursor`; every token these drills generate is reachable and off the unsafe list.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.
