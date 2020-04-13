# Notes on add-in debugging

It is easy to debug an add-in using Microsoft for the Mac by right clicking the task pane and selecting `Inspect Element`, but Microsoft for Windows lacks this capability.  Instead, one is instructed to use `Debug > Attach to Process` and `Debug > Windows > DOM Explorer` in Visual Studio 2019, but this is hard to do: there are several Internet Explorer processes, the DOM Explorer does not always work, and it's hard to set breakpoints.  A better alternative on a PC is to debug Mircosoft for the web using the browser's built-in debugger.
