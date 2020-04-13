/*------------------------------------------------------------------
* taskpane/app/toolbox/toolbox.component.ts
* Copyright (c) 2020 Stage One Software.
*-----------------------------------------------------------------*/

import { Component, Input, Inject, NgZone } from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { CommonModule } from "@angular/common";
/* global console, Excel, localStorage, require */

/** Generates information about Excel for the Inspector taskpane. */

@Component({
  selector: 'toolbox',
  template: require("./toolbox.component.html"),
  styleUrls: []
})
export class ToolboxComponent {

  /** The current selection in the spreadsheet. */
  @Input() selectedRange: string;
  
  /** Finds the initial selection.  Attaches an event listener to detect changes. */
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject(NgZone) private ngZone: NgZone) {
    this.findSelectedRange();
    this.attachListener();
  }
  
  /**
   * Obtains the address of the currently selected range from Excel.
   * 
   * Increments the count of the number of times `this.selectedRange` has been
   * set.  
   * 
   * TODO Do we need to notify the Inspector? Can we?
   */
  async findSelectedRange() {
    let count = localStorage.getItem('Yeoman Guide Selection');
    let clicks = (count ? Number.parseInt(count) : 0) + 1;
    localStorage.setItem('Yeoman Guide Selection', clicks.toString());
    let newSelection = '';
    try {
      await Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.load("address");
        await context.sync();
        newSelection = range.address;
      });
    } catch (error) { console.error(error); }
    this.ngZone.run(() => { this.selectedRange = newSelection; });
  }

  /**
   * Attaches a listener to the worksheet's `onSelectionChanged` event.
   * 
   * The listener fires `this.findSelectedRange` when the event occurs.
   */
  async attachListener() {
    try {
      await Excel.run(async context => {
        const sheet = context.workbook.getActiveCell().worksheet;
        // `this` is undefined without `() =>`
        sheet.onSelectionChanged.add(() => this.findSelectedRange());
        await context.sync();
      });
    } catch (error) { console.error(error); }
  }
  
}

