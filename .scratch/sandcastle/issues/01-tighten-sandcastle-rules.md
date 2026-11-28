# 01: Tighten the Sandcastle rules

Target repo: `~/rs/go60`. Files: `.sandcastle/main.mts`, `.sandcastle/prompt.md`. Teaching notes: `~/rs/learn/sandcastle/`.

**What to change:** what the first runs taught us. Today a multi-ticket run stacks every ticket on one branch, red-first is easy to skip, and the agent may not get the shared home rules.

**Blocked by:** None

**Status:** needs-triage

- [ ] One PR per ticket. A run that works several tickets puts each on its own branch, e.g. Sandcastle's `sequential-reviewer` template or the `branch` strategy.
- [ ] Red-green is a hard rule. The commit, or the log, shows the new check failing before the fix. Today `prompt.md` step 3 says "RGR" in one line, and runs have skipped it.
- [ ] The agent in the sandbox loads the shared home rules (`~/rs/home/CLAUDE.md`, `docs/agents/`, the MP Skills pointers), the way a host session started with the home alias does. Or we decide it doesn't need them, and write down why.
- [ ] Each change is checked by a short targeted run.

## Notes

- Seen on Trainer 02-04 (2026-11-28): one run, three tickets, one branch. Reviewed and shipped as one PR this time only.
- A separate session is checking whether the home setup works inside `bwrap`. Its findings go in the Comments below.

## Comments
