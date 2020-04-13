/*------------------------------------------------------------------
* taskpane/app/app.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component, OnInit, ElementRef, Inject, Input } from "@angular/core";
// eslint-disable-next-line no-unused-vars
import { CommonModule } from "@angular/common";
/* global localStorage, require, window */

@Component({
  selector: "app-home",
  template: require("./app.component.html")
})
export default class AppComponent implements OnInit {

  @Input() pane: string;

  aboutClicks: string;
  helpClicks: string;
  inspectorClicks: string;
  toolboxClicks: string;
  selectionClicks: string;
  
  /**
   * Constructs an AppComponent.
   * 
   * Sets `this.pane` to the value `v` supplied for `pane` in the selector
   * `<app-home pane="v">`.  Displays the Inspector pane when `this.pane == 1`
   * and the Toolbox pane when `this.pane == 2`.
   * 
   * Angular will not initialize `this.pane`, even though it is annotated with
   * `@Input()`, because `taskpane.ts` and `taskpane2.ts` are not Angular
   * components.  Instead, this constructor explicitly extracts the value
   * supplied for `pane` in the `<app-home>` selector.
   */
  constructor(@Inject(ElementRef) e: ElementRef) {
    this.pane = e.nativeElement.getAttribute('pane')
  }

  /**
   * Initializes this component.
   * 
   * Retrieves click counts from `localStorage`.  Updates the count of how many times
   * this component has been created.  Attaches an event listener to `localStorage` to
   * detect changes in click counts.
   */
  ngOnInit() {
    this.update();
    let clicks = Number.parseInt(this.inspectorClicks) + 1;
    this.inspectorClicks = clicks.toString();
    localStorage.setItem('Yeoman Guide Inspector', this.inspectorClicks);
    window.onstorage = () => { this.update(); };
  }

  /** Retrieves the click counts from `localStorage`. */
  update() {
    this.aboutClicks = this.fetch('About');
    this.helpClicks = this.fetch('Help');
    this.inspectorClicks = this.fetch('Inspector');
    this.toolboxClicks = this.fetch('Toolbox');
    this.selectionClicks = this.fetch('Selection');
  }

  /** Gets a click count from `localStorage`. */
  fetch(what: string): string {
    what = "Yeoman Guide " + what;
    let count = localStorage.getItem(what);
    if (!count) { count = '0'; }
    return count;
  }

  /** Resets the click counts to zero and updates the display. */
  public onReset() { 
    localStorage.removeItem('Yeoman Guide About');
    localStorage.removeItem('Yeoman Guide Help');
    localStorage.removeItem('Yeoman Guide Inspector');
    localStorage.removeItem('Yeoman Guide Toolbox');
    localStorage.removeItem('Yeoman Guide Selection');
    this.update();
  }

  /** Responds to a change in the Selection click count. */
  public onSelectionChanged() {
    this.selectionClicks = this.fetch('Selection');
  }

}
