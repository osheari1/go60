# Spec: Go60 Trainer

Status: ready-for-agent

Target repo: `~/rs/go60`. Read its `CLAUDE.md`, `README.md`, `GLOSSARY.md` and ADR 0001 first.

## Problem Statement

- My Go60 now runs the TailorKey Layout with Gallium letters.
- I do not know where the letters are, and I do not understand what the layers do.
- Online trainers work for the letters, but the keyboard they draw is not my keyboard, so their hints are wrong.
- No online trainer knows TailorKey's layers, home-row mods or combos.

## Solution

- A Trainer: one browser page, generated from my own Layout, that draws my Go60 exactly as flashed.
- Two modes:
  - **Explore**: pick any layer, see every key and how to reach it.
  - **Drill**: type a full line I can read ahead in, with the next key lit on the Go60 picture.
- Because the page is generated from the Layout, editing the Layout changes the Trainer with no extra work.

## User Stories

Generating and opening

1. As the operator, I want one command that opens the Trainer, so that starting a session costs nothing.
2. As the operator, I want the Trainer built from my Layout, so that it never shows a key that is not on my board.
3. As the operator, I want the Trainer to change when I change the Layout, so that I never maintain it by hand.
4. As the operator, I want the page to work offline with no server, so that it opens anywhere.
5. As an agent, I want the generator to take a Layout on stdin and write the page on stdout, so that I can test it like `go60-gen`.
6. As an agent, I want the generator to fail loudly on a Layout it cannot read, so that a broken page is never opened.
7. As the operator, I want the Trainer on my PATH after a cfg update, so that I can run it from any directory.

Explore

8. As the operator, I want to pick any layer and see all its keys on a picture of the Go60, so that I learn what each layer holds.
9. As the operator, I want each layer to say how I get to it (which thumb to hold, which key toggles it), so that I can reach it on the real board.
10. As the operator, I want to hover or select a key and see what it sends, so that unlabelled keys make sense.
11. As the operator, I want hold-tap keys to show both the tap and the hold, so that I see home-row mods and thumb keys at a glance.
12. As the operator, I want combos drawn as linked key pairs with their result, so that I can find F1 to F12, Caps Lock, sticky Hyper and sticky Meh.
13. As the operator, I want keys that pass through to the layer below shown as such, so that I know what still works on a layer.
14. As the operator, I want a plain-language note on each layer's purpose, so that I understand why it exists.
15. As the operator, I want the 8 per-finger layers explained as home-row-mod machinery, so that I stop wondering when to use them.
16. As the operator, I want the three base modes (`HRM_WinLinx`, `Typing`, `Autoshift`) shown with how to switch, so that I know they exist.
17. As the operator, I want `Magic` shown with a warning on the bootloader, reset and Bluetooth-clear keys, so that I do not press them by accident.
18. As the operator, I want to search for a character or key name and see where it lives, so that I can answer "where is `{`?" quickly.

Drill engine

19. As the operator, I want a full line of text to read ahead in, so that drilling feels like keybr or monkeytype and not one key at a time.
20. As the operator, I want non-printing keys shown as a row of chips, so that cursor keys, function keys and shortcuts drill the same way as text.
21. As the operator, I want the next key lit on the Go60 picture, so that I do not look at my hands.
22. As the operator, I want the key I must hold (thumb or home-row key) lit too, so that I learn the whole path to a key.
23. As the operator, I want to hide the picture, so that I can test myself without hints.
24. As the operator, I want a wrong key to block progress until I press the right one, so that I do not rehearse wrong motions.
25. As the operator, I want each error counted, so that my accuracy is honest.
26. As the operator, I want accuracy and words per minute at the end of a drill, so that I see how the session went.
27. As the operator, I want a new drill to start with one key press, so that I stay in flow.
28. As the operator, I want nothing saved between sessions, so that there is no state to manage.
29. As the operator, I want to pick the drill and stage from the keyboard, so that I never reach for the mouse.

Letter drills

30. As the operator, I want a home-row-only stage, so that I learn `N R T S` and `H A E I` first.
31. As the operator, I want stages that add the top row, then the bottom row, so that I learn Gallium in steps.
32. As the operator, I want an all-letters stage with common English words, so that I practise real text.
33. As the operator, I want to choose the stage myself, so that I am not held back or pushed on by an algorithm.
34. As the operator, I want a last stage with capitals, `, . ; '` and Caps Word, so that I practise Shift as a home-row hold.

Layer drills

35. As the operator, I want a symbol drill of short random groups, so that I learn where each symbol sits on `Symbol`.
36. As the operator, I want a symbol stage of real shell and Python lines, so that I practise what I actually type.
37. As the operator, I want a keypad drill of numbers and arithmetic, so that I learn the number pad on `Keypad`.
38. As the operator, I want a function-key drill, so that I learn the F-key row on `Keypad`.
39. As the operator, I want a cursor drill of arrows, Home, End, Page Up, Page Down and the select and extend keys, so that I learn `Cursor`.
40. As the operator, I want the cursor drill to include its cut, copy, paste, undo and redo keys, so that I learn the editing cluster.

Home-row mods and combos

41. As the operator, I want a cross-hand shortcut drill (hold a mod on one hand, tap on the other), so that I learn the normal way to chord.
42. As the operator, I want a stacked-mod drill (two or three mods on one hand), so that I can press Ctrl+Shift chords.
43. As the operator, I want a same-hand roll drill that must come out as letters, so that I trust fast rolls not to fire shortcuts.
44. As the operator, I want the Trainer to tell me when a roll produced a shortcut instead of letters, so that I learn the timing.
45. As the operator, I want a combo drill for F1 to F12 and Caps Lock, so that I learn the two-key presses.
46. As the operator, I want shortcut drills to avoid chords the browser steals, so that the Trainer never closes itself.

Mouse

47. As the operator, I want a move-and-click target drill, so that I learn the mouse layer.
48. As the operator, I want slow, fast and warp variants, so that I learn when each helps.
49. As the operator, I want scroll targets, so that I learn the scroll keys.

Words

50. As an agent, I want the new terms in the glossary, so that later work uses the same words.

## Implementation Decisions

Modules

- **Generator**: a Python command beside the existing tools. Layout on stdin, HTML page on stdout. It injects two JSON blobs into a page template: the Layout, and the key positions from the board's layout description. It does nothing else.
  - An `--open` form reads the repo's own Layout, writes the page under the user cache directory, and opens it in the default browser.
  - It exits non-zero with a clear message on unreadable input.
- **Page template**: one file holding the HTML, CSS and JavaScript. No dependencies, no network, no build step. Same split as the Keymap generator and its template.
- **Reach module** (inside the page, the one deep module): given the Layout, answers "how do I produce this output?" and "what does this key do on this layer?".
  - Input: an output (a character, a key name, or a chord).
  - Output: the path, as the keys to hold and the key or keys to tap, on the base mode.
  - It resolves layer holds on thumbs, home-row mods, shifted keys, combos, and pass-through keys.
  - Explore, the hint picture and every drill use it. Nothing else reads the Layout's structure.
  - It must be loadable by Node without a browser, so the suite can call it.
- **Drill engine**: one engine for all drills. A drill is a list of tokens. A token is either a printing character (shown as flowing text) or a key or chord (shown as a chip). The engine shows three lines, checks each input against the next token, blocks on error, counts errors, and reports accuracy and words per minute at the end.
- **Drill content**: each drill is a small generator of tokens. Letter stages filter a built-in common-word list by the letters each stage allows; the allowed letters come from the Layout's rows, not a hard-coded Gallium table. Symbol, keypad and cursor drills draw their token set from what the Reach module finds on that layer.

Behaviour

- The Trainer assumes the base mode `HRM_WinLinx`. `Typing` and `Autoshift` appear in Explore only.
- A drill checks what the board sent, not which physical key was pressed. A browser cannot tell `(` on `Symbol` from Shift+9. The hint shows the intended path; it is not enforced.
- Home-row-mod drills are the exception: modifier press and release are visible, so the engine checks them.
- The per-finger layers are covered by the three home-row-mod drills. There is no per-finger drill.
- `Magic` is Explore-only: its keys send nothing a page can see, and some reboot or unpair the board.
- Shortcut drills use a fixed safe list. Left out: Ctrl+W, Ctrl+T, Ctrl+N, Alt+Tab, and anything with GUI. Firefox, the default browser, cannot trap these.
- Any key the browser turns out not to report (media keys, Print Screen and Pause are the likely ones) drops to Explore-only.
- The mouse drill uses pointer movement, clicks and wheel events from the board's mouse emulation.
- Nothing is saved between sessions.
- The Layout stays the source of truth (ADR 0001). The Trainer reads it and never writes it.

Delivery

- Three pull requests in the go60 repo, each in its own worktree:
  1. Generator, page, Reach module, Explore, drill engine, letter stages.
  2. Symbol, keypad, cursor, home-row-mod and combo drills.
  3. Mouse drill.
- Each slice ends with a tag of go60 and a bump of the `go60` component in cfg.
- README gains a row for the Trainer in its tools table.
- GLOSSARY gains: Trainer, Explore, Drill, TailorKey, Gallium, Base mode.
- No ADR: nothing here is hard to reverse.

## Testing Decisions

- A good test checks behaviour through a public seam: what the command prints, or what the Reach module answers. It does not check markup, class names or private functions.
- Two seams, both added to the existing single suite:
  1. **Generator, stdin to stdout.** Feed the repo's Layout; assert exit zero, that the page carries the Layout and the key positions, and that bad input exits non-zero with a message. Prior art: the suite's Keymap generator checks, which pipe a Layout in and compare the output.
  2. **Reach module, under Node.** Load it from the generated page and assert known answers against the repo's Layout. At least: a symbol reached by a thumb hold, a function key reached by its combo, a modifier reached by a home-row hold, a capital reached by a cross-hand Shift, and a key that exists only on `Magic`.
- Slice 2 adds Reach answers for one key on each of `Keypad` and `Cursor`, and a check that every token a drill generates is reachable.
- The drill engine is tested through the same Node seam: feed a token list and a sequence of inputs, assert position, error count and blocking.
- No browser test. Drawing, the hint picture and the mouse drill are checked by hand.
- The suite must still need no hardware, network or root, and must still print `all passed`.

## Out of Scope

- Adaptive key unlocking, as keybr does.
- Saved history, streaks, accounts.
- Drilling `Magic`, the `Typing` mode or the `Autoshift` mode.
- Enforcing which physical key was pressed.
- Shortcuts the browser cannot trap.
- Any change to the Layout, the Keymap or the firmware.
- Home-row-mod timing changes. The roll drill may show they are needed; that is separate work.
- Other keyboards or other Layouts than the one in the repo.

## Further Notes

- The Layout is "TailorKey v4.2l Bilateral - Gallium": 19 layers, 17 combos.
- Thumb holds on the base mode: Backspace gives `Cursor`, Delete gives `Keypad`, Space gives `Symbol`, Enter gives `Mouse`.
- Home row: `N R T S` and `H A E I`, as GUI, Alt, Ctrl, Shift from pinky to index.
- "Bilateral" means a home-row mod applies only to keys on the other hand; a same-hand key cancels the mod and types both letters. The per-finger layers implement this.
- The hold-tap and macro names in the Layout carry a `_TKZ` suffix and a finger name. The Reach module should read their structure, not match on names, so a TailorKey update does not break it.
- If slice 2 finds many `Cursor` keys the browser does not report, say so in the pull request rather than shrinking the drill silently.
