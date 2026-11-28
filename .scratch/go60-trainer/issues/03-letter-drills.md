# 03: Letter drills

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill Gallium letters on a full line of text I can read ahead in, with the next key lit on my Go60 picture. I pick the stage myself. This ticket builds the drill engine every later drill uses. Stories 19, 21 to 34.

**Blocked by:** 02

**Status:** ready-for-agent

- [x] A drill shows three lines of text; I type through them and can read ahead.
- [x] A wrong key blocks progress until the right key is pressed, and counts one error.
- [x] The end of a drill shows accuracy and words per minute; one key press starts a new drill.
- [x] The picture lights the next key and any key that must be held; a toggle hides the picture.
- [x] Drill and stage are picked from the keyboard alone.
- [x] Stages: home row only; plus top row; plus bottom row; all letters; capitals with `, . ; '` and Caps Word.
- [x] Each stage's allowed letters come from the Layout's rows, not a hard-coded table.
- [x] Words come from a built-in common-word list; no network.
- [x] Nothing is saved between sessions.
- [x] Suite checks under Node: feed the engine a token list and inputs; assert position, error count and blocking. Every token a letter stage generates is reachable.
- [x] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.

## Comments

- Closed by RALPH: Drill module in lib/trainer.html: engine (position, errors, blocking, accuracy, wpm), three-line wrap, five letter stages from the Layout's rows (info.json row + home-row-mod detection), built-in word list, Caps Word hints; keyboard-only Drill mode with hint picture and toggle; nothing saved. Suite checks the engine, stages, Layout-driven rows and reachability of every generated token. Still needs a human: merge, tag go60, bump cfg's go60 component.
- Reopened (operator, 2026-11-28), from code review:
  - "a toggle hides the picture": `h` works only on the stage picker. Mid-drill `h` is a letter, so the picture can't be hidden during a drill. Want a toggle that works mid-drill and never collides with a character the drill asks for.
  - Fail loud: `generate` returns `[]` when its pool is empty, so a stage silently has no text. Want a visible error naming the stage instead.
  - Home-row stage: keep the whole home row (`aeghinrsty`, with `G` and `Y`). Operator chose this over only `N R T S` / `H A E I`.
  - Red first: a suite check per behaviour you can reach headless; see each fail first.
  - Tick every box above that the code meets.
