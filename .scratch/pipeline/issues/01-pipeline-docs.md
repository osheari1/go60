# Pipeline step docs

Status: resolved

## What

Add the pipeline step files to this repo, and route agents to them.

- Model: `~/rs/home/docs/agents/{branch,review,pr,check,merge,release,deploy}.md`.
- Rules: home `CLAUDE.md`, `### Pipeline` and `### Skill map`.
- Skill map: `~/rs/home/docs/agents/mp-skills.md`. Never copy it here.

## Why

Merge and branch rules were scattered across CLAUDE.md files, or missing. One file per step gives each rule one place.

## Do

- Write all seven `docs/agents/<step>.md` files.
  - Each starts: `# <Step>`, `Status: defined` or `Status: not defined`, a `Covers:` line.
  - A step this repo doesn't use: `Status: defined`, body `None.`
  - A step with no rules yet: `Status: not defined`. Don't invent rules.
  - `deploy.md` has `## Apply`, `## Verify`, `## Rollback`.
  - `merge.md` has `## Merge`, `## Who merges`, `## After merge`.
- `CLAUDE.md` `## Agent skills`: add `### Pipeline` and `### Skill map`, worded as in home.
- Never override a Matt Pocock skill rule (see the skill map).
- Set this ticket's `Status:` to `resolved` in the same PR.

## Repo specifics

- `CLAUDE.md:13` points to home "Branch work", which is gone. Move it to `branch.md`, keeping "Worktrees go under `.worktrees/`".
- `go60-flash` needs a human at the keyboard (`CLAUDE.md:12`): `deploy.md` Apply is `ready-for-human` work. The agent never runs it.
- Check `.scratch/release/` for release rules to put in `release.md`.

## Comments

- Operator, on PR #12:
  - Drop "Worktrees go under `.worktrees/`". PR #10 removed it on purpose.
  - Step files keep only rules go60 itself states. Rules from home's old Branch work are not moved.
  - A file with any "Not defined" section is `Status: not defined`.
