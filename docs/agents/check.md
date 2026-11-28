# Check

Status: defined

Covers: automated pass/fail checks, local and on the PR.

## Local

- Run `tests/run` before every commit. It must print `all passed`.
  - Docs-only commit: every path in `git diff --cached --name-only` ends in `.md`. Skip `tests/run`.

## On the PR

- `.github/workflows/build.yml` job `build` runs on every push and pull request.
  - It runs `tests/run`, then builds the firmware (`go60.uf2`).
