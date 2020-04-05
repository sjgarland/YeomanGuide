/*------------------------------------------------------------------
* taskpane/app/ExcelMonitor/ExcelMonitor.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component } from '@angular/core';
/* global console, Excel, require */

/** Controller for the view that monitors Excel. */

@Component({
  selector: 'excel-monitor',
  template: require("./ExcelMonitor.component.html"),
  styleUrls: []
})

export class ExcelMonitorComponent  {
  
  selectedRange = 'None';

  async run() {
    try {
      await Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.load("address");
        await context.sync();
        this.selectedRange = range.address;
        await context.sync();
      });
    } catch (error) { console.error(error); }
  }
  
}

