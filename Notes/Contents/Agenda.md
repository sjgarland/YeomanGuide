# Development tasks for Yeoman Guide

## Deployment

Share in AppSource.

## Coding

Implement the Toolbox taskpane.

Use [code splitting](https://webpack.js.org/guides/code-splitting/).

Make the title bar for the task pane stand out from its contents in Excel for the web, where both have a white background.  A gray background makes it stand out in Excel for Windows and the Mac.  Potential solution: give the line at the top of the pane a different background color.

## Investigation

Check usage of Supertip titles and descriptions by the different versions of Excel.  Check usage of ribbon group icons.  Document the findings in `Notes/Issues/Manifest.md`.

Investigate why code that works with `ng serve`, `ng build`, and `angular.json` not work with `npm start` and `webpack.config.js`.  Can the following modifications be eliminated?

- Modifying `imports` statements to use `../..` instead of `src/`.
- Adding `@Inject(SynchronizerService)`, `Inject(ViewService)` in component constructors.
- Removing the parameter from `@Injectable(({providedIn: 'root'})`.

How do `ng serve` and `npm start` supply actual parameters to constructors?

Determine what Office stores in its different caches.

- `~/Library/Containers/com.microsoft.Office365ServiceV2/Data/Library/Caches` has two subdirectories.  The `Microsoft` subdirectory contains a log file.
- `~/Library/Containers/com.microsoft.Excel/Data/Library/Caches/` has four subdirectories.  The `Microsoft` subdirectory contains a log file.

Investigate differences between the builders employed by `ng`, `npm`, `webpack`, and `yarn`.

Investigate [licensing](https://docs.microsoft.com/en-us/office/dev/store/add-license-checks-to-office-and-sharepoint-add-ins?redirectedfrom=MSDN.)

Investigate the purpose of the compiler option `"jsx": "react"` when not using React.

Investigate how [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) works.

Investigate problems with scrollbars.

- Distinguishing between mousedown on a scrollbar from a click on contents.
- Chrome and Safari problems with scrolling into view.
- Problems with scrolling into view vertically.
- Problems scrolling all the way to the bottom.

Investigate problem with runaway text selection/highlighting by the browser.
