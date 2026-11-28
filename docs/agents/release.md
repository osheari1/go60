# Release

Status: defined

Covers: cutting a versioned artifact (tag, package) from `main`.

- CI tags releases. Never tag by hand.
  - Each push to `main` that passes the `build` job (`tests/run` and the Firmware image) gets the next `v<N>`.
  - Job `tag` in `.github/workflows/build.yml` runs `.github/tag`.
  - A commit that already has a `v<N>` tag gets no second one.
- Bumping cfg's `pkgver` to that tag is still by hand.
  - Why: cfg's `go60` component pins a go60 tag (`#tag=v$pkgver`).
