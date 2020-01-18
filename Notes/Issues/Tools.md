# Issues with tools for developing add-ins

## Angular

_Resolved_.  There was a problem with a (keydown) handler not being invoked, compounded by problem with `addEventListener`: evaluation of `this` inside the event handler referred to an html element, not to an instance of the class containing the handler.  The solution was to use `@HostListener`.

## Markdown

There should be a convenient way to view Markdown documentation in a dialog window (or to convert the documentation to HTML for viewing).

Caution is needed with respect to line breaks, which some tools replace by spaces, when converting Markdown to HTML.

## Visual Studio Code

Several desirable features are missing, hard to find, or need improvement.

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

There may be a hidden cache that is hard to flush.  When I refactored code by changing `getKind()` to `get kind()`, the `build` command flagged an error on one of many occurrences of `f.kind`, reporting that `f.getKind` was not a function.  The problem eventually went away, but only after I spent much time looking for its cause.

Visual Studio Code does not provide support for debugging Office 365 add-ins.

## Visual Studio 2019

Visual Studio 2019 provides clumsy [support for debugging add-ins](https://visualstudio.microsoft.com/vs/features/debugging-and-diagnostics/).  I haven't been able to use it to set breakpoints.

Commands for previewing Markdown documentation do not work well, as they do in Visual Studio Code.

## Yeoman Office Generator

The generator does not provide adequate support for using Angular.  In particular, it does not generate an Angular project, in which commands like `ng generate component` would be available.

Confusion also arises because of differences between using `npm start` in a Yeoman project and `ng serve` in an Angular project.

The webpack configuration does not include the directory containing the images foe icons in the production build.  A `CopyWebPackPlugin` needs to be inserted by hand.

See the *Issues* section of the [Yeoman GitHub repository](https://github.com/OfficeDev/generator-office) for comments about the Office generator.
