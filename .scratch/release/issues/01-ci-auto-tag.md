# 01: CI tags every green push to main

Target repo: `~/rs/go60`; read its `CLAUDE.md` and `README.md` first. One pull request for this ticket.

**What to build:** when `tests/run` passes on a push to `main`, CI tags that commit with the next `v<N>`. I never tag by hand.

**Why:** cfg's `go60` component pins a go60 tag (`components/go60/pkgbuild/go60-tools/PKGBUILD`, `#tag=v$pkgver`). Today every release needs a hand-made tag (`v1`, `v2`).

**Blocked by:** None (can start immediately)

**Status:** resolved

- [x] A `tag` job in `.github/workflows/build.yml` runs only on pushes to `main`, and only after the job that runs `tests/run` passes.
- [x] It tags `v<N+1>`, where `<N>` is the highest existing `v<N>` tag on the remote.
- [x] It does nothing if the commit already has a `v<N>` tag, so a rerun makes no second tag.
- [x] It has `contents: write` in that job only; the rest of the workflow keeps read access.
- [x] Pull requests and branch pushes never tag.
- [x] README says releases are tagged by CI and that the cfg bump (`pkgver`) is still by hand.
- [x] The suite prints `all passed`.

## Notes

- Precedent: cfg's `.github/workflows/suite.yml`, `tag` job. It tags `cfg-tools-v<pkgver>` after the suite passes on `main`, skips when the tag exists, and pushes with `git push origin refs/tags/<tag>`.
- Out of scope: bumping cfg automatically.

## Comments

- Closed by RALPH: Added .github/tag and a tag job in build.yml (needs build, push to main only, contents: write in that job only); README notes CI tagging and manual cfg pkgver bump; suite covers next-tag and rerun.
