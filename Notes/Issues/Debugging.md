# Issues with add-in debugging

You can debug an add-in using Microsoft for the Mac by right clicking the task pane and selecting `Inspect Element`, but this feature does not exist when using Microsoft for Windows.  Instead, one is supposed to use `Debug > Attach to Process` and `Debug > Windows > DOM Explorer` in Visual Studio 2019, but I was not always able to find Internet Explorer processes to which I could attach, nor did DOM Explorer always work, nor did it ever let me set a breakpoint.
