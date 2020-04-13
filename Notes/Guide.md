# How to Build an Excel Task Pane Add-in Using Angular and Make it Work

Puzzles and problems await anyone who follows Microsoft's instructions for how to [build an Excel task pane add-in using Angular](https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-angular).  These instructions produce a sample _Contoso Task Pane Add-in_ with the following odd behaviors.

- A puzzling message, "Modify the source files, then click __Run__", appears at the bottom of the task pane.  It fails to describe what the button does, and it's not clear to whom it is addressed: users do not modify source files, and, even if they did, they would simply restart the add-in without having to click __Run__.
- A better message would say, "Click __Run__ to highlight your selection", because that's what the button does.
- The add-in's icon, which appears in Excel's _Home_ ribbon during testing, is missing when the add-in is deployed.
- Angular features do not work when used to enhance the add-in's behavior.

This guide shows how to fix these and other problems.  It transforms the sample add-in into Yeoman Guide, a fully functional add-in that illustrates how to use the features provided by Angular.  Yeoman Guide is an open source project hosted on [GitHub]((https://github.com/sjgarland/YeomanGuide).  It was created by [Stage One Software](https://stageonesoftware.com), the developers of the [Formula Forge](https://formulaforge.com) add-in for Excel.  

## Getting started

We get started by using the [Yeoman generator for Office add-ins](https://github.com/OfficeDev/generator-office) to create a new project named YeomanGuide.

```
    ? yo office

         _-----_     ╭──────────────────────────╮
        |       |    │   Welcome to the Office  │
        |--(o)--|    │   Add-in generator, by   │
       `---------´   │ @OfficeDev! Let's create │
        ( _´U`_ )    │    a project together!   │
        /___A___\   /╰──────────────────────────╯
         |  ~  |
       __'.___.'__
     ´   `  |° ´ Y `

    ? Choose a project type: Office Add-in Task Pane project
    ? Choose a script type: TypeScript
    ? What do you want to name your add-in? YeomanGuide
    ? Which Office client application would you like to support? Excel
````
Then we enter the project directory, start Excel with the newly generated add-in,

```
    ? cd YeomanGuide
    ? npm start
```
and click the `Show Taskpane` button that appears at right the end of Excel's `Home` ribbon to display the Contoso Task Pane.  (Contoso is a fictional company used by Microsoft in its examples.)

## Redoing the task pane

We simplify the Contoso Task Pane and provide a clearer explanation of what its button does by replacing the contents of `app.component.html` with

```html
     <main>
         <p class="ms-font-l">Your selection:  {{selectedRange}}</p>
         <p class="ms-font-l">Click <b (click)="colorRange()">here</b> to highlight your selection.</p>
     </main>
```
and dividing the original `run` method in `app.component.ts.ts` into two methods, one to find the selected range and another to set its color.

```typescript
export default class AppComponent {

  selectedRange: string;

  constructor() { this.getRange(); }

  async getRange() {
    try {
      await Excel.run(async context => {
        // Create proxy for the range
        const range = context.workbook.getSelectedRange();
        // Load its address
        range.load("address");
        await context.sync();
        this.selectedRange = range.address;
      });
    } catch (error) { console.error(error); }
  }

  async colorRange() {
    try {
      await Excel.run(async context => {
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const range = sheet.getRange(this.selectedRange);
        // Update the fill color
        range.format.fill.color = "yellow";
        await context.sync();
      });
    } catch (error) { console.log(error); }
  }

}

```

## Making the task pane respond to changes in the current selection

Pitfalls of event handling: meaning of `this`, Angular execution zones.

## Rebranding the add-in

Changing the manifest.

Modifying `webpack.config.js` to include the assets directory in the production build, specify labels for buttons and command groups, providing a title for the task pane, adding a button for Help.

- Angular pitfalls
  - Need to import CommonModule
  - taskpane.ts does not define a component
  - CLI not installed
- Office pitfalls
  - State not shared by taskpanes, commands
  - Slow response to opening windows and dialogs from commands.  Works better in taskpane.