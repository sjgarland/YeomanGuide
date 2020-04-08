# Issues with add-in appearance

## Major issues

There are severe restrictions on the size of a task pane.  It is impossible to create task panes that are as large as (or larger than) the main application window, even though task panes can float out of that window.

The width of the taskpane [cannot be increased in Office for the web](https://officespdev.uservoice.com/forums/224641-feature-requests-and-feedback/suggestions/33088669-ability-to-resize-task-pane-in-word-online-mac-an>).

Replacing the taskpane with a dialog window, which is non-modal and has unlimited width, does not help because no formula is displayed in the window.  Microsoft documentation states (somewhere) that dialog boxes can communicate with Excel only when opened from a taskpane; the [Office.UI interface](https://docs.microsoft.com/en-us/javascript/api/office/office.ui) cautions not to "use a dialog box to interact with a document.  Use a task pane instead."  See also [Using the Dialog API](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/dialog-api-in-office-add-ins).

## Excel peculiarities

In Excel for the web, the location of the `Add-ins` group on the `Insert` ribbon depends on whether or not Excel's ribbons are simplified.

Different versions of Excel display different tabs on the ribbon.  In Excel for the Mac, there is no `File` tab on the ribbon (it is a menu at the top of the window).  In Excel for the web, there is no `PageLayout` tab on the ribbon (the `Formulas` tab appeared only in 2020).

Microsoft for the Mac supplements the ribbon with menus at the top of the screen: Excel, File, Edit, View, Insert, Format, Tools, Data, Window, and Help.

## Other issues

Add-ins do not present a uniform appearance across different platforms.

Only Excel for Windows displays both the `Title` and  `Description` in the `Supertip` for a control.  Excel for the Mac displays only the `Title`.  Excel for the web displays neither.

No version of Excel displays the `Icon` for a group on a tab on the ribbon.

The title bar for floating dialogs is different on different platforms.  Excel for the Mac shows _Office Add-ins - localhost_.  Excel for the web shows different titles with different browsers: a proper title with Chrome, but with a banner below the title with security information about _localhost:3000_; _localhost_ with Safari.

The task pane personality menu is 12x32 pixels on Excel for Windows.  It is 26x26 pixels on Excel for the Mac, where it floats in 8 pixels from the right and 6 pixels from the top, thereby obscuring the top right corner of the task pane.

It is impossible to [hide the personality menu](<https://stackoverflow.com/questions/58633794/remove-personality-menu-from-add-in>), which enables users to view source code.
