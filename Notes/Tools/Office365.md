# Notes on Microsoft Office 365 add-ins

## Documentation

[Office add-in documentation](https://docs.microsoft.com/office/dev/add-ins/overview/office-add-ins)

[Office add-in samples](https://github.com/officedev)

[Excel add-in concepts](https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-core-concepts)

[Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) hosts questions about Office 365 development.

## Manifests

Code in `manifest.xml` causes buttons to appear on one of Excel's command tabs: TabHome, TabInsert, TabPageLayoutExcel, TabFormulas, TabData, TabReview, TabView, TabDeveloper, TabAddIns, TabPrintPreview, TabBackgroundRemoval.

This code begins with the following lines.

    <ExtensionPoint xsi:type="PrimaryCommandSurface">
    <!-- OfficeTab extends an existing tab.  CustomTab creates a new tab. -->
        <OfficeTab id="TabFormulas">

## Style

### Fonts

Title: .ms_font-xl, Segoe Light, 21px
Subtitle: .ms-font-l, Segoe Semilight, 17px
Body text: .ms-font-m, Segoe Regular, 14px

See also <https://docs.microsoft.com/en-us/windows/win32/uxguide/vis-fonts>.

### Icons

Use the colors [recommended](https://docs.microsoft.com/en-us/office/dev/add-ins/design/add-in-icons-monoline) by Office 365:

* rgb(77, 130, 184) or hex 4D82B8 for icon sizes 32 and above
* rgb(74, 125, 177) or hex 4A7DB1 for icon size 16

Use <http://transparent.imageonline.co/> to make the background transparent.

Duplicate, rename, and resize each `png` file to create the required `icon-16.png`, `icon-32.png`, `icon-80.png`, as well as the recommended `icon-64.png` for Mac OS X.  Skip the other recommended, but optional sizes: 20px, 24px, 40px, 48px.
