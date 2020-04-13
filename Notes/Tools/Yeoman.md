# Notes on the Yeoman Office Generator

The [Yeoman Office generator](https://github.com/OfficeDev/generator-office) provides tools for creating add-ins for Microsoft Office.  See <https://developer.microsoft.com/en-us/office/blogs/creating-office-add-ins-with-any-editor-introducing-yo-office/>.

## Installing Yeoman

Install `yo`, the Yeoman generator, by typing `npm i generator-office`.

## Creating a skeleton add-inproject

Type `yo office` to create a new project.  Respond to the `yo office` prompts as follows:

- Project type: Office Add-in Task Pane project using Angular framework
- Script type: Typescript
- Name: ProjectName
- Office application: Excel

## Issues with Angular

The generator does not provide adequate support for using Angular.  In particular, it does not generate an Angular project, in which commands like `ng generate component` would be available.

Confusion also arises because of differences between using `npm start` in a Yeoman project and `ng serve` in an Angular project.

The webpack configuration does not include the directory containing the images foe icons in the production build.  A `CopyWebPackPlugin` needs to be inserted by hand.

See the *Issues* section of the [Yeoman GitHub repository](https://github.com/OfficeDev/generator-office) for further comments about the Office generator.
