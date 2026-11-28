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

- Investigation (agent, 2026-11-28): home setup does **not** reach the bwrap agent. Full notes: `~/rs/learn/sandcastle/reference/home-setup-in-sandbox.md`.
  - The agent loads only go60 `CLAUDE.md`, plus 14 built-in skills. There is no `~/rs/home`, no `~/.claude/CLAUDE.md`, and no plugins (mattpocock-skills, caveman). Seen in a probe and in a real run's session log.
  - bwrap: `--tmpfs /home`, `HOME=/home/agent` (empty), `--clearenv`. Mounts are only the worktree, the git dirs and `PATH` dirs.
  - Sandcastle runs `claude --print ... --model m` with no `--add-dir`, `--settings` or `--plugin-dir`, and `claudeCode()` has no option for extra flags.
  - The host alias is `claude` in `cfg/components/shell/home/.zsh/core.sh:29`: `--add-dir ~/rs/home` plus `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`. There is no `hclaude`, and the home `CLAUDE.md` is out of date on this.
  - go60 has no TDD rule. The mattpocock `tdd` skill asks the user to confirm seams, so it would not fit an AFK run even if mounted.
  - Recommended: write the red-green loop into `prompt.md` in go60 terms: a new golden pair or `check`, then `tests/run` shows `FAIL:`, then a fix, then `all passed`. Require the red output in the commit message, or a test-first commit.
  - Enforce red-green from the host or a reviewer run: the test commit on the parent code must make `tests/run` exit 1.
  - Home rules: decide the AFK agent doesn't need them, since they cover the host, worktrees and human format. go60 has its own `docs/agents/`. If needed later: a read-only `mounts` entry for `~/rs/home` plus an `onSandboxReady` copy into `~/.claude/CLAUDE.md` (unverified).
