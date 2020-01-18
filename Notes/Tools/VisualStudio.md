# Notes on Visual Studio

[Visual Studio Code](https://code.visualstudio.com/) (for the Mac and Windows), [Visual Studio 2019](https://visualstudio.microsoft.com/vs/) (for Windows), and [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/) all support TypeScript.  Visual Studio 2019 has a Community version that is free for use in small organizations.

Visual Studio Code is easier to use and seems to work better than Visual Studio 2019.  

See [Issues with Visual Studio Code](../Issues/Tools.md##Visual-Studio-Code) and [Issues with Visual Studio 2019](../Issues/Tools.md##Visual-Studio-2019).

Extensions (e.g., the Emacs Friendly Keymap) can be added to many versions of Visual Studio.  

## Visual Studio tools

Visual Studio Code uses the `tsc` compiler, which is configured by options specified in `tsconfig.json`.

JavaScript files files that contain `export` and `import` statements are processed by a loader (e.g., `webpack` or `requirejs`) to package them for use in an HTML file.
