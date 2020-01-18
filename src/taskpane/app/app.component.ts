/*------------------------------------------------------------------
* app/app.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component } from "@angular/core";
import { Log } from "./log";
const template = require("./app.component.html");
/* global console, document, Excel, Office, require, window */
/* eslint-disable no-constant-condition */

@Component({
  selector: "app-home",
  template
})
export default class AppComponent {
  items = ["One", "Two", "Three"];
  selectedRange = "None";

  constructor() {
    Log.add('Platform: ' + Office.context.platform);
    Log.add('License: ' + Office.context.license['value']);
    Log.add('Office version: ' + Office.context.diagnostics.version);
    Log.add('Browser: ' + window.navigator.appName);
    Log.add('Browser version: ' + window.navigator.appVersion);
    let version = 4;
    while (true) {
      if (!Office.context.requirements.isSetSupported('ExcelApi', '1.' + version.toString())) { break; }
      version++;
    }
    Log.add('ExcelApi version 1.' + version.toString());
    this.run();
  }

  async run() {
    try {
      await Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.load("address");
        await context.sync();
        this.selectedRange = range.address;
      });
    } catch (error) { console.error(error); }
  }

  public log(): string[] { return Log.get() }
  
  public logAsTable(): string {
    let s = '<table>';
    for (const line of Log.get()) { s += '<tr><td>' + line + '</td></tr>'}
    s += '</table>';
    document.getElementById('debuggingLog').innerHTML = s;
    return '';
  }
}
