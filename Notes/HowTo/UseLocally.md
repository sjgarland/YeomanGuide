# Local use

These notes describe how to install and use a local development version of the XLray add-in for the Office 365 version of Excel.  See the simpler [Web-based installation instructions](WebInstallation.md).

## Required infrastructure

[Microsoft Office 365](https://products.office.com) provides desktop and web-based versions of Excel.

Excel for Windows requires Microsoft Windows 10 Version 1909, with Internet Explorer Version 11.535.

[Node.js](https://nodejs.org) provides runtime support and the `npm` package manager for JavaScript.

## Run Excel with the XLray add-in

Issue the command `npm start` in the `XLray` folder.  This will start both a `dev server` and Excel.  Under Mac OS X, it is currently necessary to start the `dev server` by typing `sudo npm start`.  (The `dev server` is a process created by the shell script `node_modules/.bin/webpack-dev-server`.)

The ribbon in Excel for Windows and Excel for the Macintosh should now contain an `XLray` tab.

To make that tab appear in Excel for the web, select its `Insert` tab.  Next click `Office Add-ins`, `Manage My Add-ins`, `Upload My Add-in`, and `Browse`.  Then upload `manifest.xml` from the `XLray` folder.

## Debugging options

To [debug on a Mac](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/debug-office-add-ins-on-ipad-and-mac):

- Type `defaults write com.microsoft.Excel OfficeWebAddinDeveloperExtras -bool true`.
- Start Excel and sideload the add-in.
- Right click the add-ins task pane and select `Inspect Element`.

To [debug under Windows](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/attach-debugger-from-task-pane):

- Run Visual Studio 2019.
- Start Excel and sideload the add-in.
- In Visual Studio, select `Debug > Attach to Process` and attach to all `iexplore.exe` processes.
- Select `Debug > Windows > DOM Explorer`.
- Right click the add-ins task pane and select `Inspect Element`.

See also

- [Debug add-ins in Office on the web](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/debug-add-ins-in-office-online)
- [Use F12 developer tools on Windows 10](https://docs.microsoft.com/office/dev/add-ins/testing/debug-add-ins-using-f12-developer-tools-on-windows-10)

## Run-time logging

Under Mac OS X, type the following commands to enable runtime logging, start Excel, and examine the log:

> `defaults write com.microsoft.Excel CEFRuntimeLoggingFile -string log.txt`
> `sudo npm start`
> `open ~/library/Containers/com.microsoft.Excel/Data/log.txt`

To stop runtime logging, type

> `defaults delete com.microsoft.Excel CEFRuntimeLoggingFile`

Under Windows, type `npx office-addin-dev-settings runtime-log --enable log.txt`.

## Troubleshooting

If Excel's ribbon does not contain the `XLray` tab, but a `dev server` is running, select the `Insert` tab, click the triangle to the right of `My Add-ins`, and select `XLray`.

If `XLray` is not in the list of add-ins, or if the `dev server` did not start, there may be a problem with the [manifest](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests).  To [validate a manifest](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/troubleshoot-manifest), type `npm run validate`.  This will check check whether the manifest adheres to the appropriate [XML schema](https://github.com/OfficeDev/office-js-docs-pr/tree/master/docs/overview/schemas/taskpane).

If the manifest passes this test, enable runtime logging to see if it contains a semantic error, such as a missing resource definition.

Problems sometimes occur if you open a new workbook (or if you start Excel by clicking its icon).  It's not clear how to prevent them.  It's also not clear why loading the add-in doesn't always work.

If problems arise, particularly when installing a new version of XLray, try the following.

- Delete the contents of `~/Library/Containers/com.microsoft.Excel/Data/Documents/wef`.  Under Windows, go to `AppData\Local\Microsoft\Office\16.0` and type `rmdir /S Wef`.
- Delete the contents of `~/Library/Containers/com.microsoft.Excel/Data/Library/Caches`.
- Issue the command `npm stop`, then the command `npm start`.
- If this fails, try clearing Safari's cache.
- When all else fails, restart your machine.
