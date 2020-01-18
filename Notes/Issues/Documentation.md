# Issues concerning documentation

## Inadequate definitions (or unexplained jargon)

*Sideloading*:  In the [Office 365 documentation](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing), _sideloading_ seems to be a synonym for _installing_.  Its [Wikipedia definition](https://en.wikipedia.org/wiki/Sideloading) as _a term used mostly on the Internet, similar to "upload" and "download", but in reference to the process of transferring files between two local devices_ does not support this use.

*Chunk*: A _chunk_ in `webpack.config.js` seems to be an entry in the header of an HTML page.

## Outdated documentation

Some Office 365 [manifest documentation](https://docs.microsoft.com/en-us/office/dev/add-ins/reference/manifest/control) refers to a _Tooltip_, which appears to be an outdated version of a _Supertip_.

## Incorrect documentation

The [Office 365 API documentation](https://docs.microsoft.com/en-us/javascript/api/office/office.context?view=word-js-preview#license) says that `Office.context.license` is a string, yet it is actually an object.  To get its value, use `Office.context.license['value']`.

## Missing documentation

There is no documentation that indicates what must be added to `webpack.config.js` so that the loader can find images and code.
