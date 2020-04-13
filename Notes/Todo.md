# Investigation agenda

Deployment in AppSource.

[Code splitting](https://webpack.js.org/guides/code-splitting/).

[Licensing](https://docs.microsoft.com/en-us/office/dev/store/add-license-checks-to-office-and-sharepoint-add-ins).

Use of Supertip titles and descriptions by the different versions of Excel.  Use of ribbon group icons.

Why code that works with `ng serve`, `ng build`, and `angular.json` needs the following modifications to work with `npm start` and `webpack.config.js`.

- Modifying `imports` statements to use `../..` instead of `src/`.
- Adding `@Inject(SynchronizerService)`, `Inject(ViewService)` in component constructors.
- Removing the parameter from `@Injectable(({providedIn: 'root'})`.

The differences between the builders employed by `ng`, `npm`, `webpack`, and `yarn`.

How do `ng serve` and `npm start` supply actual parameters to constructors?

What Office stores in its different caches.

- `~/Library/Containers/com.microsoft.Office365ServiceV2/Data/Library/Caches` has two subdirectories.  The `Microsoft` subdirectory contains a log file.
- `~/Library/Containers/com.microsoft.Excel/Data/Library/Caches/` has four subdirectories.  The `Microsoft` subdirectory contains a log file.

The purpose of the compiler option `"jsx": "react"` when not using React.

How [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) works.

Problems with scrollbars.

- Distinguishing between mousedown on a scrollbar from a click on contents.
- Chrome and Safari problems with scrolling into view.
- Problems with scrolling into view vertically.
- Problems scrolling all the way to the bottom.

Runaway text selection/highlighting by the browser.
