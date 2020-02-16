# Notes on Angular

[Angular](https://angular.io) is one of several frameworks for constructing single-page web applications.  It works well with HTML and TypeScript.

- [Angular 8 Tutorial](https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course)
- [Comparison of Angular, React, and Vue](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)

Angular is used by Google, React by Facebook.  React is easier to learn, but Angular provides much better support than React for the model-view-controller design pattern.

Angular uses the `npm` package manager for JavaScript, which is included in the `Node.js` runtime support for JavaScript.  `npm` provides both a command-line client and an online database of public and paid-for private packages.

## How to install Angular

Download and install `Node.js` from <https://nodejs.org>.

Install `ng`, the Angular command-line client, by typing `npm install -g angular/cli`.

## How to create a skeleton project

Create a project (in the current directory) by typing `ng new ProjectName`.

View the project in browser by typing `cd ProjectName` and `ng serve -o&`.

Open the `ProjectName` folder in Visual Studio Code.  The subfolder `src/app` contains code for the project's principal component:

- app.component.html
- app.component.css
- app.component.ts (you can set the app's title here)

## How to create a skeleton add-in

Install `yo`, the Yeoman generator for Office add-ins, by typing `npm i generator-office`.  See <https://developer.microsoft.com/en-us/office/blogs/creating-office-add-ins-with-any-editor-introducing-yo-office/>.

Type `yo office` to create a new project.  Respond to the `yo office` prompts as follows:

- Project type: Office Add-in Task Pane project using Angular framework
- Script type: Typescript
- Name: ProjectName
- Office application: Excel

## Angular command-line interface

Start local server: `ng -serve -o`

Create component: `ng generate component componentName`

Create distribution: `ng build --prod --base-href ./`
