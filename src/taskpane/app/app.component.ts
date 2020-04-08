/*------------------------------------------------------------------
* taskpane/app/app.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component } from "@angular/core";
// eslint-disable-next-line no-unused-vars
import { CommonModule } from "@angular/common";
/* global localStorage, require, window */

@Component({
  selector: "app-home",
  template: require("./app.component.html")
})
export default class AppComponent {

  aboutClicks = '0';
  helpClicks = '0';
  inspectorClicks = '0';
  toolboxClicks = '0';
  selectionClicks = '0';
  
  /**
   * Constructs an AppComponent.
   * 
   * Retrieves click counts from `localStorage`.  Updates the count of how many times
   * this constructor has been called.  Attaches an event listener to `localStorage` to
   * detect changes in click counts.
   */
  constructor() {
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
