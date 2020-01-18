# Development tasks for XLray

## Deployment

Share in AppSource.

Fix problems that prevent the use of Angular features that work when tested on `localhost:3000`, but not when used in the production build.

The `MonitorComponent` defines a selector `<monitor></monitor>` for use in `app.component.html`.  In the production build, the loader reports that it cannot find `monitor.component.html`.  Code for this component is currently commented out) in `app.component.ts`, `monitor.component.ts`, and `webpack.config.ts`.

The Angular `*ngFor` directive also causes problems in the production build.  The console log for the task pane shows _Error: Template parse errors: Can't bind to 'ngforOf' since it isn't a known property of 'tr'_, Excel issues an error alert: _Custom UI Runtime Error in 53e30403-713a-4849-9398-ffd8ec33ec8c_developer  An error occurred while calling the callback: "OsfImg"_, and the XLray icon does not appear with the occurrences of XLray in the `Home` tab and under `Insert > My Add-ins > Developer Add-ins`.  

These problems may be caused by inadequate configurations in `tsconfig.json` and `webpack.config.js`.  See [Angular in Depth](https://medium.com/angular-in-depth/configuring-typescript-compiler-a84ed8f87e3).  Also investigate

- The purpose of the compiler option `"jsx": "react"` when not using React.
- How [module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) works.
- [Code splitting](https://webpack.js.org/guides/code-splitting/).

## Coding

Catch and report Excel events: selection of a different cell, changes in the value of the displayed formula, insertion or deletion of a row or column.  Show other information, if it exists: decoded license information, user identity, process numbers (as part of the context to see which components can communicate with which).

Catch and report changes in Excel settings.  It works to mirror them in `localStorage` and poll for changes.  Can `localStorage` events be used instead of polling?  Can Excel events be made to work?  See the issues about [settings](Issues/API.md##Settings).

## Investigation and documentation

Check usage of Supertip titles and descriptions by the different versions of Excel.  Check usage of ribbon group icons.  Document the findings in `Notes/Issues/Manifest.md`.

Investigate differences between the builders employed by `ng`, `npm`, `webpack`, and `yarn`.

## Other issues

Try to solve the [task pane width problem](Issues/Appearance.md##Major-issues) by adding a control to the task pane.  This control would pop up a dialog window that may be able to communicate with Excel.  Try to make this window non-modal, like ones created in `commands.html`, so that it will not disappear when the user clicks outside the window.

See the issues about [screen updating](Issues/API.md##Screen-updating).

Make the title bar for the task pane stand out from its contents in Excel for the web, where both have a white background.  A gray background makes it stand out in Excel for Windows and the Mac.  Potential solution: give the line at the top of the pane a different background color.

Investigate former problems with scrollbars.

- Distinguishing between mousedown on a scrollbar from a click on contents.
- Selection does not scroll into view using Chrome or Safari.
- Selection does not scroll into view vertically in the tree view.
- Scrollbar for templates does not scroll all the way to the bottom.

Investigate former problem with runaway text selection/highlighting by the browser.
