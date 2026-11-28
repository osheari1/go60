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
