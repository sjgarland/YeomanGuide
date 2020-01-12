# XLray

XLray exposes and documents problems that arise in developing add-ins for Office 365 Excel using Typescript and Angular.

The initial code for XLray was based on a template produced by the [Yeoman Office generator](https://github.com/OfficeDev/generator-office).  See the *Issues* section of the Yeoman GitHub repository for comments about the Office generator.

See [TODO](Notes/TODO.md) for work to be done on XLray, in particular for problems encountered in trying to deploy it on the web.  See also the following notes for more information about XLray and the architecture for Office 365 add-ins.

## How To

[Use XLray over the web](HowTo/InstallOnWeb.md)  
[Use XLray locally](HowTo/UseLocally.md)

## Issues

[Issues with add-in appearance](Notes/Issues/Appearance.md)  
[Issues with add-in behavior](Notes/Issues/Behavior.md)  
[Issues with add-in debugging](Notes/Issues/Debugging.md)  
[Issues with add-in manifests](Notes/Issues/Manifest.md)  
[Issues with the Javascript APIs for Excel and Office](Notes/Issues/API.md)  
[Issues with tools for developing add-ins](Notes/Issues/Tools.md)

## Tools

[Angular](Tools/Angular.md)  
[Markdown](Tools/Markdown.md)  
[Office 365](Tools/Office365.md)  
[Visual Studio](Tools/VisualStudio.md)

## Modifications to the Yeoman template

### Manifest

- Generated a new `Id`.
- Changed the `ProviderName`, `DisplayName`, `Description`, `AppDomain`, `ShortStrings`, `LongStrings`, and `Icon` information.

### Assets

- Renamed the `assets` directory to `images`.
- Replaced the icons in this directory with new icons, including a 64px version that was recommended for the Macintosh.
- Labeled the icons with their dimensions in pixels to clarify where each is used.

### app.component.html, app.component.ts

Edited the contents.

### webpack.config.js

Amended the `CopyWebPackPlugin` to include the `images` directory in the build.  Without this change, Excel was not able to find the icons listed in the manifest.  (This defect in the Yeoman template should be eliminated.)

## Copyright

Copyright (c) 2020 Stage One Software. All rights reserved.
