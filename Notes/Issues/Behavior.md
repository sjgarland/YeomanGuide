# Notes on add-in behavior

## Major issues

There are problems that prevent using Firefox with Excel for the web.

- No icons appear on the add-ins tab
- Loading the task pane produces the message _Did Not Connect: Potential Security Issue_ and then hangs for a long time before it is possible to scroll down to see a disabled `Advanced` button for bypassing the security checks.
- Security problems also prevent viewing an external web page in a dialog window.

Clicks on buttons or menu items defined in the manifest can cause changes in an Excel spreadsheet (through the JavaScript Excel API), but they cannot trigger changes in a taskpane.  Nor can actions taken in one taskpane trigger changes in the others.  This is because each taskpane, as well as `commands.html`, is handled by a separate browser process.  The only shared state is in the Excel spreadsheet.  Potential workarounds include socket.io and LocalStorage with events (which do not work in all browsers) or timer-based polling.

Excel for Windows and Excel for the Mac, but not Excel for the web, allow task panes to be dragged to floating windows.

It is not possible to use add-ins obtained from Microsoft's [AppSource](https://appsource.microsoft.com/) without an active internet connection.  Attempts to do so result in error messages such as _We cannot connect to the server at o15.officeredir.microsoft.com._ and _Sorry, we can't load the add-in.  Please make sure you have network and/or Internet connectivity._

## Other issues

In Excel for Windows, clicking a button on a ribbon causes the ribbon to collapse.

The `File` menu on Excel for the web allows users to open only files that have been uploaded to `onedrive.live.com`.

Fewer functions (411 out of 479 as of December 2019) appear in the `Function` menu on the `Insert` tab and work with auto-complete, on Excel for the web.

There are problems when using Chrome and Safari with Excel for the web.  They allow an external web page to be viewed in a dialog window, but fail when you try to scroll vertically.  They also require users to allow displaying the dialog.

There are problems with using `window.open` in a script in `commands.html`: an exceedingly long delay occurs with Excel for the web before a window opens on subsequent invocations.  The browser's debugger shows that some process was stuck, and the console reports _All records throttled_.  This delay does not occur if `window.open` is used in code for a taskpane.
