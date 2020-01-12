# Development tasks for XLray

## Deployment

XLray runs as expected via `npm start` on `https://localhost:3000`, but it does not run when deployed on <https://stageonesoftware.com/XLray>.  

The XLray icon does not appear with the occurrences of XLray in the `Home` tab and under `Insert > My Add-ins > Developer Add-ins`.  

Excel pops up an error alert: _Custom UI Runtime Error in 53e30403-713a-4849-9398-ffd8ec33ec8c_developer  An error occurred while calling the callback: "OsfImg"_.

The taskpane is empty.  Its console log shows _Error: Template parse errors: Can't bind to 'ngforOf' since it isn't a known property of 'tr'._

Determine whether the add-in loader can find the  `*.component.html` and `*.component.css` files.

Figure out how to publish add-ins:

- generate and manage a license (and other boiler plate)
- check the user's license (possibly in the callback from `Office.initialize`)
- protect IP (e.g. by code obfuscation)

Share on GitHub and in AppSource (so that we can post questions/comments about it to stackoverflow).

## Investigation and documentation

Check usage of Supertip titles and descriptions by the different versions of Excel.  Check usage of ribbon group icons.

Investigate differences between the builders employed by `ng`, `npm`, `webpack`, and `yarn`.

## Diagnostic code

Try to show process numbers as part of the context (to see which components can communicate with which).

## Taskpane width

The taskpane [cannot be resized in Office for the web](https://officespdev.uservoice.com/forums/224641-feature-requests-and-feedback/suggestions/33088669-ability-to-resize-task-pane-in-word-online-mac-an>).

Replacing the taskpane with a dialog window, which has unlimited width, does not work: no formula is displayed in the window.  Microsoft documentation states (somewhere) that dialog boxes can communicate with Excel only when opened from a taskpane; the [Office.UI interface](https://docs.microsoft.com/en-us/javascript/api/office/office.ui) cautions not to "use a dialog box to interact with a document.  Use a task pane instead."  See also [Using the Dialog API](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/dialog-api-in-office-add-ins).

There’s one more thing to try: adding a control to the task pane that pops up a modal window that may be able to communicate with Excel, but will disappear when the user clicks outside the window.

## Other issues

Make the title bar for the task pane stand out from its contents in Excel for the web, where both have a white background.  A gray background makes it stand out in Excel for Windows and the Mac.  Potential solution: give the line at the top of the pane a different background color.

Investigate former problems with scrollbars.

- Distinguishing between mousedown on a scrollbar from a click on contents.
- Selection does not scroll into view using Chrome or Safari.
- Selection does not scroll into view vertically in the tree view.
- Scrollbar for templates does not scroll all the way to the bottom.

Investigate former problem with runaway text selection/highlighting by the browser.

## Events

Investigate using `localStorage` events to notice changes without having to poll `localStorage` in `AppComponent`.

Decide whether (and how) to handle Excel events: selection of a different cell, changes in the value of the displayed formula, insertion or deletion of a row or column.

## JavaScript API for Excel

- Try to turn off screen updating for the formula bar, for the value in the cell containing the formula, and for any chart that uses that value.
- The property `Application.ScreenUpdating` in the Visual Basic API would be useful, but it does not exist in the JavaScript API.
- The JavaScript API has a method for suspending screen updating until the next `sync`, but it needs to be suspended until all values have been computed.
- It doesn't help to inhibit Excel events by setting `context.runtime.enableEvents = false;`.
