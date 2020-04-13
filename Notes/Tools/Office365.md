# Notes on Microsoft Office 365 add-ins

## Documentation

- [Office add-in documentation](https://docs.microsoft.com/office/dev/add-ins/overview/office-add-ins)
- [Office add-in samples](https://github.com/officedev)
- [Excel add-in concepts](https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-core-concepts)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) hosts questions about Office 365 development.

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

## Issues with Microsoft Office 365 add-ins

Microsoft provides very poor support for using the model-view-controller design pattern to develop add-ins.  It blurs the boundaries between the components of this pattern.

Microsoft's architecture for COM add-ins is based on WPF, the Windows Presentation Framework.  In WPF, views are written in XAML, the Extensible Application Markup Language, and the behavior behind the views (i.e., the model and the controllers) is described using a combination of hand-written and compile-generated C# (or Visual Basic) code).

Microsoft's architecture for Javascript add-ins is more cumbersome.  The behavior of a taskpane can be defined using the model-view-controller design pattern, but that approach cannot be extended to the entire add-in.

- There is no good way for different tasks panes, or a task pane and a ribbon command, to interact with the same model.  Each task pane and ribbon command is processed in a separate process, and these processes do not share any state.
- The view presented by the ribbon is defined in a single monolithic XML manifest.  This is a step backwards from the more flexible customizations possible with XAML.
- The view presented by the ribbon is severely constrained, and using the manifest to describe that view is very tedious.  See a separate list of [comments about the manifest](../Issues/Manifest.md).
