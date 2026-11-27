# Glossary

**Layout**: the keyboard's keys, layers, macros, hold-taps and combos, as the Go60 Layout Editor's JSON. The source of truth.

**Keymap**: the ZMK devicetree (`.keymap`) generated from the Layout. Never edited by hand.

**Firmware image**: the single `go60.uf2` built from the Keymap; the same file goes on both Halves.

**Half**: the left or right piece of the Go60. Each is flashed on its own, right first.

**Bootloader drive**: the USB drive a Half shows while in bootloader: `GO60RHBOOT` (right) or `GO60LHBOOT` (left).

**Flash**: copy the Firmware image onto a Bootloader drive.

**Golden pair**: a Layout and the Layout Editor's own Keymap for it; the generated Keymap must match it.

**TailorKey**: the Layout family my Go60 runs ("TailorKey v4.2l Bilateral"): home-row mods, thumb layer holds, combos, and per-finger layers that make the home-row mods bilateral.

**Gallium**: the letter arrangement on TailorKey's base layers. Home row `N R T S` and `H A E I`.

**Base mode**: one of the three base layers you switch between on `Magic`: `HRM_WinLinx` (home-row mods; the default), `Typing` (plain letters), `Autoshift` (hold a key for its shifted character).

**Trainer**: the browser page `go60-train` builds from the Layout to learn the board. Offline, one file, never writes the Layout.

**Explore**: the Trainer mode that draws the Go60 for any layer and says what each key sends.

**Drill**: the Trainer mode where you type a line of text or key chips with the next key lit on the picture.
