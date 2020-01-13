# Issues with the Javascript APIs for Excel and Office

## Screen updating

The JavaScript API for Excel lacks properties and methods that exist in the C# and Visual Basic APIs.  In particular, it lacks the property `application.ScreenUpdating` that enables screen updating to be turned off and and then back on.

Instead, the JavaScript API has only a method `application.suspendScreenUpdatingUntilNextSync`.  This method does not suffice for an add-in that uses Excel to evaluate formulas.  It causes visible side-effects (e.g., changing graphs and charts that depend on the cell in which the formulas are evaluated) that can be avoided with the other APIs.

It does not help to inhibit Excel events by setting `context.runtime.enableEvents = false`.

## Settings

The `onSettingsChanged` event in the `Excel.SettingCollection` class [does not appear to work](https://stackoverflow.com/questions/45247447/how-to-register-handler-for-settingschanged-event-in-office-web-add-ins).

Microsoft's [documentation](https://docs.microsoft.com/en-us/javascript/api/office/office.settingschangedeventargs?view=excel-js-online) notes that "Your add-in's code can register a handler for the settingsChanged event when the add-in is running with any Excel client, but the event will fire only when the add-in is loaded with a spreadsheet that is opened in Excel on the web, and more than one user is editing the spreadsheet (coauthoring). Therefore, effectively the settingsChanged event is supported only in Excel on the web in coauthoring scenarios."
