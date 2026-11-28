# Branch

Status: defined

Covers: where work starts and where it lives until the PR.

- Branch from `main`. The main checkout stays on `main`.
- Worktree placement: whoever makes the worktree decides.
  - git by hand: worktrees go under `.worktrees/` (git-ignored).
  - Claude Code or a skill: its default.
  - Herdr: `~/rs/.worktrees/<repo>/<branch>`.
- Worktree cleanup: whatever the skill or Claude Code uses.
