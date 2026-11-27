# 04: Symbol drills

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill the `Symbol` layer: first short random symbol groups, then real shell and Python lines. The hint lights the thumb hold and the symbol key. Stories 35, 36.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] Stage 1: short random groups drawn from the symbols the Reach module finds on `Symbol`.
- [ ] Stage 2: built-in shell and Python lines.
- [ ] The hint shows the `Symbol` path for a symbol even where a shifted base key would also send it.
- [ ] A symbol counts as correct by what the board sent, whichever path was used.
- [ ] Suite check: every token the symbol stages generate is reachable.
- [ ] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.
