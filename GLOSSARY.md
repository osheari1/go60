# Glossary

**Layout**: the keyboard's keys, layers, macros, hold-taps and combos, as the Go60 Layout Editor's JSON. The source of truth.

**Keymap**: the ZMK devicetree (`.keymap`) generated from the Layout. Never edited by hand.

**Firmware image**: the single `go60.uf2` built from the Keymap; the same file goes on both Halves.

**Half**: the left or right piece of the Go60. Each is flashed on its own, right first.

**Bootloader drive**: the USB drive a Half shows while in bootloader: `GO60RHBOOT` (right) or `GO60LHBOOT` (left).

**Flash**: copy the Firmware image onto a Bootloader drive.

**Golden pair**: a Layout and the Layout Editor's own Keymap for it; the generated Keymap must match it.
