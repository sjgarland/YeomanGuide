# Notes on Angular

[Angular](https://angular.io) is a popular framework, developed by Google, for constructing single-page web applications.  Other frameworks include [React](https://reactjs.org/), developed by Facebook, and [Vue](https://vuejs.org/).  React is easy to learn, but Angular provides much better support for the model-view-controller design pattern.  The [Angular 8 Tutorial](https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course) provides a good introduction.

Angular provides excellent support for the model-view-controller design pattern.  Models and controllers are written in TypeScript, views in HTML and CSS.  The source code can be structured to emphasize the design pattern, with the model in `src/model`, the views in `src/app/*/*.component.html` and `src/app/*/*.component.css`, and the controller in `src/app/*/*.component.ts` and `src/app/*.controller.ts`.  Furthermore, the ability to declare selectors for components makes it easy to decompose views into manageable pieces.

## Installing Angular

Download and install `Node.js` from <https://nodejs.org>.  `Node.js` supplies runtime support for JavaScript; it includes the `npm` package manager, which provides both a command-line client and an online database of public and paid-for private packages.

Install `ng`, the Angular command-line client, by typing `npm install -g angular/cli`.

## Creating a skeleton Angular project

Create a project (in the current directory) by typing `ng new ProjectName`.  View the project in browser by typing `cd ProjectName` and `ng serve -o&`.  Open the `ProjectName` folder in Visual Studio Code.  The subfolder `src/app` contains code for the project's principal component:

- app.component.html
- app.component.css
- app.component.ts (you can set the app's title here)

Alternatively, use the [Yeoman Office Generator](Yeoman.md) to create a skeleton project for an Office add-in.

## Angular command-line interface

Start local server: `ng -serve -o`

Create component: `ng generate component componentName`

Create distribution: `ng build --prod --base-href ./`
