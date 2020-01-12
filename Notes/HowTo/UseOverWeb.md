# Web use

These notes describe how to use XLray over the web with various versions of Office 365 Excel.

Pending the availability of XLray in Microsoft's AppSource, it is necessary to download the file `xlray.xml` from this repository and then follow the instructions given here for the different versions of Excel.

## Excel for the web

Open the `Insert` tab on the ribbon and choose  `Office Add-ins`, `Manage My Add-ins`, `Upload My Add-in`, and `Browse`.  Then upload `xlray.xml`.

## Excel for the Mac

Put `xlray.xml` in `~/Library/Containers/com.microsoft.Excel/Data/Documents/wef`.

In Excel, choose `Insert > Add-ins > My Add-ins` and select XLray.

## Excel for Windows

See [Microsoft's documentation](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins) for handling security issues that arise in using Excel for Windows.

## [Excel on an iPad](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac)

Connect the iPad to a Mac with a USB cable.

In iTunes, choose the iPad icon below the menu bar.  Then

- Under `Settings` on the left side of iTunes, choose `Apps`.
- On the right side of iTunes, scroll down to `File Sharing`, and choose Excel in the `Add-ins` column.
- In the Excel column, choose `Add File`, and then find and select `xlray .xml`.

Open Excel.  If it is already running, close and restart it.  Choose `Add-ins` on the `Insert` tab and select `XLray` from the `Developer` add-ins.

## [Deploying updates to XLray](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/develop-add-ins-vscode)

Deployment involves deploying a manifest to users/testers and deploying application code to the web.

To create a manifest for deployment, make a copy of `manifest.xml`, rename the copy to  `xlray.xml`, and replace all occurrences of `https://localhost:3000` by `http:stageonesoftware.com/XLray`.  

To create the application code, issue the command `npm run build`.  When the build completes, rename the generated `dist` folder to `XLray` and  upload it to `stageonesoftware.com`.

Under Mac OS X, the manifests for add-ins obtained from Microsoft's AppSource are buried in the folder `~/Library/Containers/com.microsoft.Excel/Data/Library/Application Support/Microsoft/Office/16.0/Wef`.  See also <https://camerondwyer.com/2018/09/11/office-add-in-manifest-updates-deployment-timing-and-potential-url-issues/>.

