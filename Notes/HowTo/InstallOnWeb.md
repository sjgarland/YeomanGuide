# Web installation

These notes describe how to deploy XLray using a web server, as well as how to use it with the Microsoft Office 365 version of Excel.

## [Deployment](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/develop-add-ins-vscode)

Deployment involves deploying a manifest to users/testers and deploying application code to the web.

To create a manifest for deployment, make a copy of `manifest.xml`, rename the copy to  `xlray.xml`, and replace all occurrences of `https://localhost:3000` by `http:stageonesoftware.com/XLray`.  

To create the application code, make the same replacements in `commands.html`.  Then issue the command `npm run build`.  When the build completes, rename the generated `dist` folder to `XLray` and undo the replacements made in `commands.html`.

To deploy `XLray`, upload it to `stageonesoftware.com`.  On `stageonesoftware.com`, copy the `*.component.css` files from the folder `XLray` to the root directory.  _Check whether this is necessary._

Under Mac OS X, the manifests for add-ins obtained from Microsoft's AppSource are buried in the folder `~/Library/Containers/com.microsoft.Excel/Data/Library/Application Support/Microsoft/Office/16.0/Wef`.  See also <https://camerondwyer.com/2018/09/11/office-add-in-manifest-updates-deployment-timing-and-potential-url-issues/>.

## Using Excel for the web

Open the `Insert` tab on the ribbon and choose  `Office Add-ins`, `Manage My Add-ins`, `Upload My Add-in`, and `Browse`.  Then upload `xlray.xml`.

## Using Excel for the Mac

Put `xlray.xml` in `~/Library/Containers/com.microsoft.Excel/Data/Documents/wef`.

In Excel, choose `Insert > Add-ins > My Add-ins` and then select XLray.

### Using Excel for Windows

## [Using an iPad](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac)

Connect the iPad to a Mac with a USB cable.

In iTunes, choose the iPad icon below the menu bar.  Then

- Under `Settings` on the left side of iTunes, choose `Apps`.
- On the right side of iTunes, scroll down to `File Sharing`, and choose Excel in the `Add-ins` column.
- In the Excel column, choose `Add File`, and then find and select `xlray .xml`.

Open Excel.  If it is already running, close and restart it.  Choose `Add-ins` on the `Insert` tab and select `XLray` from the `Developer` add-ins.
