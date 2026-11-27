# 01: Explore: see any layer on my Go60

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** One command opens the Trainer: a self-contained browser page that draws my Go60 from the Layout. I pick any layer and see every key on it. I select a key and see what it sends. This is the thin first path through generator, page and suite. Stories 1 to 6, 8, 10, 11, 13, 50.

**Blocked by:** None (can start immediately)

**Status:** resolved
- [ ] The generator takes a Layout on stdin and writes one HTML page on stdout; the page needs no network and no server.
- [ ] `--open` reads the repo's Layout, writes the page under the user cache directory, and opens the default browser.
- [ ] Unreadable input exits non-zero with a clear message on stderr and writes no page.
- [ ] The picture uses the board's own key positions, not hand-drawn geometry.
- [ ] Every layer in the Layout can be picked; none is hard-coded by name or count.
- [ ] A hold-tap key shows both its tap and its hold.
- [ ] A pass-through key is shown as pass-through, with what it falls through to.
- [ ] Selecting a key shows what it sends in plain words.
- [ ] Suite check: generator output carries the Layout and the key positions; bad input fails.
- [ ] GLOSSARY gains Trainer, Explore, Drill, TailorKey, Gallium, Base mode. README tools table gains the Trainer.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.

## Comments

- Closed by RALPH: go60-train + lib/trainer.html (Reach module, Explore UI), suite checks via tests/page.js, README/GLOSSARY updated; commit 6e8abcd. Remaining shipping steps need a human: merge PR, tag go60, bump the go60 cfg component so go60-train is on PATH.
