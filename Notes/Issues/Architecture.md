# Issues with program architecture

## Good support for the model-view-controller design pattern

Angular provides excellent support for the model-view-controller design pattern.  Models and controllers are written in TypeScript, views in HTML and CSS.  The source code can be structured to emphasize this design pattern, with the model in `src/model`, the views in `src/app/*/*.component.html` and `src/app/*/*.component.css`, and the controller in `src/app/*/*.component.ts` and `src/app/*.controller.ts`.  Furthermore, the ability to declare selectors for components allows one to decompose views into manageable pieces.

## Poor support for the model-view-controller design pattern

Microsoft provides very poor support for using the model-view-controller design pattern to develop add-ins.  It blurs the boundaries between the components of this pattern.

Its architecture for COM add-ins allows models to be written cleanly in C#, but it uses a mixture of XAML, WPF, hand-written C# code, and compiler-generated C# code for the controllers.  Its Javascript architecture is even more cumbersome.  The behavior of a taskpane can be defined using the model-view-controller design pattern, but that approach cannot be extended to the entire add-in.

- There is no good way for different tasks panes, or a task pane and a ribbon command, to interact with the same model.  Each task pane and ribbon command is processed in a separate process, and the processes do not share any state.
- The view presented by the ribbon is defined in a single monolithic XML manifest.  This is a step backwards from the more flexible customizations possible with XAML.
- The view presented by the ribbon is severely constrained, and using the manifest to describe that view is very tedious.  See a separate list of [comments about the manifest](Manifest.md).
