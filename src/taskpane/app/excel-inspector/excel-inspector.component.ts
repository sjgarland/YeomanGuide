/*------------------------------------------------------------------
* taskpane/app/excel-inspector/excel-inspector.component.ts
* Copyright (c) 2020 Stage One Software.
*-----------------------------------------------------------------*/

import { Component, Input, ChangeDetectorRef, Inject, EventEmitter, Output } from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { CommonModule } from "@angular/common";
/* global console, Excel, localStorage, Office, require, window */

/** Generates information about Excel for the Inspector taskpane. */

@Component({
  selector: 'excel-inspector',
  template: require("./excel-inspector.component.html"),
  styleUrls: []
})
export class ExcelInspectorComponent {
  
  /** The platform on which Excel is running: Online, PC, or Mac. */
  platform: string;

  /** The version of Excel that is running. */
  version: string;

  /** The web browser currently displaying Excel Online. */
  browser: string;

  /** The current selection in the spreadsheet. */
  @Input() selectedRange: string;

  /** Emits an event for the `AppComponent`. */
  @Output() selectionChanged = new EventEmitter();
  
  /** Generates the necessary information.  Attaches an event listener to detect changes. */
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject(ChangeDetectorRef) private ref: ChangeDetectorRef) {
    this.platform = Office.context.platform.toString();
    this.version = Office.context.diagnostics.version;
    this.browser = this.getBrowser();
    this.findSelectedRange();
    this.attachListener();
  }
  
  /** Returns the name and version of the current browser. */
  private getBrowser(): string {
    if (!window || !window.navigator) { return 'None in use'; }
    let v = window.navigator.userAgent;
    if (v.indexOf('Edge') > 0)               { return this.getVersion(v, 'Edge'); }
    else if (v.indexOf('Firefox') > 0)       { return this.getVersion(v, 'Firefox'); }
    else if (v.indexOf('Trident') > 0)       { return this.getVersion(v, 'Trident'); }
    else if (v.indexOf('Chrome') > 0)        { return this.getVersion(v, 'Chrome'); }  // must check here
    else if (v.indexOf('Safari') > 0)        { return this.getVersion(v, 'Safari'); }
    else if (v.indexOf('AppleWebKit') > 0)   { return this.getVersion(v, 'AppleWebKit'); }
    return 'Unrecognized';
  }
  
  /** Extracts "name/version" from the value `v` of `window.navigator.userAgent`. */
  private getVersion(v: string, name: string): string {
    var n = v.indexOf(name);
    if (n < 0) { return ''; }
    if (name === 'Safari') {
      n = v.indexOf('Version');
      n = v.indexOf('/', n) + 1;
      return 'Safari/' + v.substring(n, v.indexOf(' ', n));
    } else if (name === 'Trident') {
      n = v.indexOf('rv:') + 3;
      return 'MSIE' + v.substring(n, v.indexOf(')', n) - 1);
    }
    v += ' ';
    return v.substring(n, v.indexOf(' ', n));
  }
  
  /**
   * Obtains the address of the currently selected range from Excel.
   * 
   * Increments the count of the number of times `this.selectedRange` has
   * been set.  Emits an event to notify `AppComponent` that the value
   * maintained in `localStorage` for this counter has changed.
   * 
   * Angular does not seem to detect that `this.selectedRange` has changed
   * when this method is invoked by `this.listen` in response to an event
   * that occurs in Excel rather than in the taskpane.  Hence this method
   * uses a `ChangeDetectorRef` to force Angular to detect the change.
   */
  async findSelectedRange() {
    let count = localStorage.getItem('Yeoman Guide Selection');
    let clicks = (count ? Number.parseInt(count) : 0) + 1;
    localStorage.setItem('Yeoman Guide Selection', clicks.toString());
    this.selectionChanged.emit();
    try {
      await Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.load("address");
        await context.sync();
        this.selectedRange = range.address;
      });
    } catch (error) { console.error(error); }
    this.ref.detectChanges();
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

