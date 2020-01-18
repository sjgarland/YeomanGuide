# Notes on the Yeoman Office generator

The [Yeoman Office generator](https://github.com/OfficeDev/generator-office) creates a [Node.js](https://nodejs.org) [Office Add-in](https://docs.microsoft.com/en-us/office/dev/add-ins/) project that can be managed with [Visual Studio Code](https://code.visualstudio.com/).

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

Amended the `CopyWebPackPlugin` to include the `images` directory in the build.  Without this change, Excel was not able to find the icons listed in the manifest.
