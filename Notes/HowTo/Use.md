# Using Yeoman Guide

These notes describe how to use Yeoman Guide over the web.

Pending the availability of Yeoman Guide in Microsoft's AppSource, it is necessary to download the file `yeomanguide.xml` from this repository and then follow the instructions given here for the different versions of Excel.

## Excel for the web

Open the `Insert` tab on the ribbon and choose  `Office Add-ins`, `Manage My Add-ins`, `Upload My Add-in`, and `Browse`.  Then upload `Yeoman Guide.xml`.

## Excel for the Mac

Put `Yeoman Guide.xml` in `~/Library/Containers/com.microsoft.Excel/Data/Documents/wef`.

In Excel, choose `Insert > Add-ins > My Add-ins` and select Yeoman Guide.

## Excel for Windows

Installation in Excel for Windows involves the following steps.

_Create an add-in catalog._  In File Explorer, create a folder named `AddInCatalog`.  Put `Yeoman Guide.xml` in this catalog.  

_Share the add-in catalog._  Right-click `AddInCatalog` and choose `Properties`. In the `Properties` dialog window, select the `Sharing` tab and click `Share`.  Within the `Network access` dialog window, add yourself and click `Share`.  When you see the confirmation `Your folder is shared`, click `Copy` to copy the network path for `AddInCatalog` to the clipboard. Then click `Done` to close this dialog window and `OK` to close the `Properties` dialog window.

_Make Excel trust the add-in catalog._  Click `File` on Excel's ribbon and select `Options > Trust Center > Trust Center Settings`.  In the `Trust Center` dialog window, select `Trusted Add-in Catalogs`, paste the network path on the clipboard into the `Catalog Url` box, and delete the final right parenthesis and everything that comes before `file://` in that box. Then click `Add catalog` and the `Show in Menu` check box for the newly trusted catalog.  Finally, click `OK` twice to close the `Trust Center` and `Excel Options` dialog windows.

_Install Formula View._  Close and reopen Excel.  Open Excel's `Insert` ribbon and choose `My Add-ins`.  Select `SHARED FOLDER` at the top of the `Office Add-ins` dialog window, click `Yeoman Guide`, and then click `Add`.

## [Excel on an iPad](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac)

Connect the iPad to a Mac with a USB cable.

In iTunes, choose the iPad icon below the menu bar.  Then

- Under `Settings` on the left side of iTunes, choose `Apps`.
- On the right side of iTunes, scroll down to `File Sharing`, and choose Excel in the `Add-ins` column.
- In the Excel column, choose `Add File`, and then find and select `Yeoman Guide .xml`.

Open Excel.  If it is already running, close and restart it.  Choose `Add-ins` on the `Insert` tab and select `Yeoman Guide` from the `Developer` add-ins.

## [Deploying updates to Yeoman Guide](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/develop-add-ins-vscode)

Deployment involves deploying a manifest to users/testers and deploying application code to the web.

To create a manifest for deployment, make a copy of `manifest.xml`, rename the copy to  `Yeoman Guide.xml`, and replace all occurrences of `https://localhost:3000` by `http:stageonesoftware.com/Yeoman Guide`.  

To create the application code, issue the command `npm run build`.  When the build completes, rename the generated `dist` folder to `Yeoman Guide` and  upload it to `stageonesoftware.com`.

Under Mac OS X, the manifests for add-ins obtained from Microsoft's AppSource are buried in the folder `~/Library/Containers/com.microsoft.Excel/Data/Library/Application Support/Microsoft/Office/16.0/Wef`.  See also <https://camerondwyer.com/2018/09/11/office-add-in-manifest-updates-deployment-timing-and-potential-url-issues/>.
