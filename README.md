# XLray

XLray exposes and documents problems in developing add-ins for Office 365 Excel.  It is based on the Angular/Typescript template provided by the [Yeoman Office generator](https://github.com/OfficeDev/generator-office).

XLray is an [open-source project](https://github.com/sjgarland/XLray) created by Stage One Software, the developers of the [Formula Forge](http://formulaforge.com) and Formula View add-ins for Excel 2010.  Stage One is currently re-implementing these add-ins for use with Office 365.  It has already converted 13,000 lines of code for these add-ins to use TypeScript, Angular, HTML, and CSS instead of C#, WPF, and XAML, and it is now adjusting their user interfaces to conform to constraints imposed by Office 365.

The project repository contains extensive [notes](Notes/Contents/Overview.md) about XLray and problems that arise in developing add-ins for Office 365.  In particular, it contains [instructions](Notes/HowTo/Develop.md) for modifying the code produced by the Yeoman Office generator so that it can be deployed successfully.
