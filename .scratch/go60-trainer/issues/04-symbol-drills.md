# 04: Symbol drills

Spec: `../spec.md`. Target repo: `~/rs/go60`; read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first. One pull request for this ticket.

**What to build:** I drill the `Symbol` layer: first short random symbol groups, then real shell and Python lines. The hint lights the thumb hold and the symbol key. Stories 35, 36.

**Blocked by:** 03

**Status:** resolved

- [x] Stage 1: short random groups drawn from the symbols the Reach module finds on `Symbol`.
- [x] Stage 2: built-in shell and Python lines.
- [x] The hint shows the `Symbol` path for a symbol even where a shifted base key would also send it.
- [x] A symbol counts as correct by what the board sent, whichever path was used.
- [x] Suite check: every token the symbol stages generate is reachable.
- [x] The suite prints `all passed`.
- [ ] Shipped: pull request merged, go60 tagged, the `go60` component in cfg bumped to that tag, and `go60-train --open` works from any directory.

## Comments

- Closed by RALPH: Two Symbol stages in lib/trainer.html: random groups of the 32 symbols Reach finds on Symbol, then built-in shell and Python lines. In those stages the hint lights the Symbol path even where a base key sends the symbol; the engine still accepts the character the board sent, whichever path sent it. Suite checks the stage symbols, both generators, reachability and hints of every token, and Symbol-path hints. Still needs a human: merge, tag go60, bump cfg's go60 component.
- Reopened (operator, 2026-11-28), from code review:
  - `symbolStages` finds the layer with `layout.layer_names.indexOf('Symbol')`. ADR 0001: the Layout is the source of truth; rename the layer and both Symbol stages vanish. Find it from the Layout's structure (as `&magic`'s layer is found in ticket 01).
  - Fail loud: a missing Symbol layer, or `symbolDrill` with no lines, must show a visible error, not an empty stage list or drill.
  - README says "symbols on `Symbol`": describe it without the name, or say the name is today's.
  - Red first: a suite check with that layer renamed, and one for the missing-layer error; see them fail first.
  - Tick every box above that the code meets.

- Closed by RALPH: Symbol layer now found by structure: the non-base layer whose keys send the most symbols, more than the base. Renamed layer still gives both stages. No Symbol layer, no built-in line that fits, or no Space: the stage stays listed and starting it shows a visible error that names the stage. README no longer depends on the name. Red-first suite checks for the renamed and missing cases. Still needs a human: merge, tag go60, bump cfg component.
