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

Microsoft's recommended [typography](https://docs.microsoft.com/en-us/office/dev/add-ins/design/add-in-typography) can be problematic because Mac OS X does not provide the Segoe font

- Title: .ms_font-xl, Segoe Light, 21px
- Subtitle: .ms-font-l, Segoe Semilight, 17px
- Body text: .ms-font-m, Segoe Regular, 14px
- Caption: .ms-font-xs, Segoe Regular, 11px

Microsoft's recommended [icon styles](https://docs.microsoft.com/en-us/office/dev/add-ins/design/add-in-icons-monoline)

- rgb(77, 130, 184) or #4D82B8 for icon sizes 32 and above
- rgb(74, 125, 177) or #4A7DB1 for icon size 16

Recommendations in <https://www.64notes.com/design/stop-helvetica-arial/>

- Typefaces
  - Lucida Grande is the author's favorite
  - Trebuchet MS is "brilliant"
  - Verdana, Tahoma look good
  - Helvetica looks better than Arial
  - Georgia is much better than Times New Roman for a font with serifs
- Color
  - Text: #222222 to #555555
  - Background: off white #FAFAFA, #F9F9F9, #F8F8F8

## Icons

Use <http://transparent.imageonline.co/> to make the background transparent.

Duplicate, rename, and resize each `png` file to create the required `icon-16.png`, `icon-32.png`, `icon-80.png`, as well as the recommended `icon-64.png` for Mac OS X.  Skip the other recommended, but optional sizes: 20px, 24px, 40px, 48px.
