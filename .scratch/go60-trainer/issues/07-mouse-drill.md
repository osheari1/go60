# 07: Mouse drill

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill the mouse layers: move to a target and click it, and scroll to a target, with slow, fast and warp variants. Stories 47 to 49.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] Targets appear one at a time; a click on the target scores, a click off it counts an error.
- [ ] Scroll targets: bring a marker into view.
- [ ] Variants prompt slow, fast and warp, with the hint lighting the keys for each.
- [ ] The end shows accuracy and time per target.
- [ ] Explore's mouse layers note how the variants differ.
- [ ] Checked by hand on the real board; no suite check for pointer handling.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.
