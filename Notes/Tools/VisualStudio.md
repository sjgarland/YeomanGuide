# Notes on Visual Studio Code

## Issues with Visual Studio Code

The indenter

- puts spaces on blank lines (which cause TSLint complaints)
- changes the indentation level inside a long block comment
- gets confused when function headers (and some other constructs) extend over several lines

The lint tool for code does not issue warnings about constructs that are legal in Javascript, but suspect in TypeScript.

- Missing parentheses in `if (x.isOK)` when `isOK` is declared by `isOK(): boolean` and not `get isOK(): boolean`
- Missing `toString()` conversions

Some helpful additions:

- A lint tool for HTML that catches errors such as misspelled instance variables.
- The ability to bind often-used commands on the command palette to keystrokes.
- A `Print` command on the `File` menu (that handles all text files, including `.ts`, `.html`, `.css`, and `.md`).
- A debugger that provides easily understood information about exceptions (e.g., when the translation from TypeScript into JavaScript doesn't recognize an object's class).
- Angular support with better error messages when an imported module is not listed in `app.module.ts`.

Visual Studio Code uses a hidden cache that is hard to flush.  When refactoring code by changing `getKind()` to `get kind()`, the `build` command flagged an error on one of many occurrences of `f.kind`, reporting that `f.getKind` was not a function.  The problem eventually went away, but only after much time was wasted looking for its cause.

The Windows version of Visual Studio Code does not provide support for debugging Office 365 add-ins.

