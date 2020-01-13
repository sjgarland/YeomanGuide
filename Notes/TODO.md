# Development tasks for XLray

## Coding

Try using additional  `*.component.html` and `*.component.css` files.  See if the add-in loader finds them.

Modify the manifest so that it creates an XLray ribbon with actions for viewing the taskpane, popping up an About message, and changing an Excel setting.

Try catching changes in Excel settings.  An approach that works is to mirror them in `localStorage` and poll for changes.  Can `localStorage` events be made to work?  Can Excel events be made to work?  See the issues about [settings](Issues/API.md##Settings).

Try handling other Excel events: selection of a different cell, changes in the value of the displayed formula, insertion or deletion of a row or column.

Try to show process numbers as part of the context (to see which components can communicate with which).

## Deployment

When XLray uses the Angular `*ngFor` directive, it can be used from `localhost:3000` but not from <https://stageonesoftware.com/XLray>.  The console log for the task pane shows _Error: Template parse errors: Can't bind to 'ngforOf' since it isn't a known property of 'tr'_, Excel issues an error alert: _Custom UI Runtime Error in 53e30403-713a-4849-9398-ffd8ec33ec8c_developer  An error occurred while calling the callback: "OsfImg"_, and the XLray icon does not appear with the occurrences of XLray in the `Home` tab and under `Insert > My Add-ins > Developer Add-ins`.  

Share in AppSource.  Enable posting questions/comments about it to stackoverflow.

## Investigation and documentation

Check usage of Supertip titles and descriptions by the different versions of Excel.  Check usage of ribbon group icons.

Investigate differences between the builders employed by `ng`, `npm`, `webpack`, and `yarn`.

## Taskpane width

The taskpane [cannot be resized in Office for the web](https://officespdev.uservoice.com/forums/224641-feature-requests-and-feedback/suggestions/33088669-ability-to-resize-task-pane-in-word-online-mac-an>).

Replacing the taskpane with a dialog window, which has unlimited width, does not work: no formula is displayed in the window.  Microsoft documentation states (somewhere) that dialog boxes can communicate with Excel only when opened from a taskpane; the [Office.UI interface](https://docs.microsoft.com/en-us/javascript/api/office/office.ui) cautions not to "use a dialog box to interact with a document.  Use a task pane instead."  See also [Using the Dialog API](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/dialog-api-in-office-add-ins).

There’s one more thing to try: adding a control to the task pane that pops up a modal window that may be able to communicate with Excel, but will disappear when the user clicks outside the window.

## Other issues

See the issues about [screen updating](Issues/API.md##Screen-updating).

Make the title bar for the task pane stand out from its contents in Excel for the web, where both have a white background.  A gray background makes it stand out in Excel for Windows and the Mac.  Potential solution: give the line at the top of the pane a different background color.

Investigate former problems with scrollbars.

- Distinguishing between mousedown on a scrollbar from a click on contents.
- Selection does not scroll into view using Chrome or Safari.
- Selection does not scroll into view vertically in the tree view.
- Scrollbar for templates does not scroll all the way to the bottom.

Investigate former problem with runaway text selection/highlighting by the browser.
