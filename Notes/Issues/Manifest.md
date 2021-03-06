# Notes on manifests for Microsoft 365 add-ins

A Microsoft 365 add-in is defined by a [manifest](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests), written in XML, which identifies the add-in, the controls it adds to an Office ribbon, and the actions taken when users click those controls.

Code in `manifest.xml` causes buttons to appear on one of Excel's command tabs: TabHome, TabInsert, TabPageLayoutExcel, TabFormulas, TabData, TabReview, TabView, TabDeveloper, TabAddIns, TabPrintPreview, TabBackgroundRemoval.  Such code begins with the following lines.

    <ExtensionPoint xsi:type="PrimaryCommandSurface">
    <!-- OfficeTab extends an existing tab.  CustomTab creates a new tab. -->
        <OfficeTab id="TabFormulas">

There are two kinds of actions: `ShowTaskpane` (for one or more taskpanes with specified URLs) and `ExecuteFunction` (for functions defined in a single `FunctionFile` such as `commands.html`).

## Issues with manifests

The appearance and behavior of controls on an Office ribbon must be defined in the manifest, written in XML with a very limited set of options, rather than in source files written in HTML, CSS, and JavaScript.

There is no way to create [checkboxes](<https://stackoverflow.com/questions/55173467/office-add-in-ribbon-checkbox>), radio buttons, separators, or inactive elements in menus or on the ribbon.

It is possible to specify different titles, but not different icons, for different taskpanes.  This causes a problem in Excel for the web, which shows the same icon for each task pane in the right margin.  Excel for Windows and the Mac show the titles for the task panes in multiple tabs.  

There is no way to specify arguments for functions in the manifest.

There is no way to uses variables in manifests.  For example, it would be convenient to use a variable to represent a URL so that lines like

    <IconUrl DefaultValue=$URL+"/images/Yeoman80.png"/>  
    <bt:Image id="Icon.16x16" DefaultValue=$URL+"/images/Yeoman16.png"/>

could be used with `$URL="https://localhost:3000"` for local testing or with `$URL="https://stageonesoftware.com/Yeoman Guide"` for deployment on the web.

It is not clear how to create manifests for two separate add-ins, one more fully featured than the other and with a different name and different contents on its ribbon.
