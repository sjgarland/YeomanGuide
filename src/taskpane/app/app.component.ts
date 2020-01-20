/*------------------------------------------------------------------
* taskpane/app/app.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component } from "@angular/core";
import { Log } from "./log";
const template = require("./app.component.html");
/* global console, document, Excel, localStorage, Office, require, setInterval, window */
/* eslint-disable no-constant-condition */

@Component({
  selector: "app-home",
  template
})
export default class AppComponent {
  items = ["One", "Two", "Three"];
  selectedRange = "None";
  clickCount = "0";
  log = Log.getSingleton();
  
  constructor() {
    this.log.add('Platform: ' + Office.context.platform);
    this.log.add('License: ' + Office.context.license['value']);
    this.log.add('Office version: ' + Office.context.diagnostics.version);
    this.log.add('Browser: ' + window.navigator.appName);
    this.log.add('Browser version: ' + window.navigator.appVersion);
    let version = 4;
    while (true) {
      if (!Office.context.requirements.isSetSupported('ExcelApi', '1.' + version.toString())) { break; }
      version++;
    }
    this.log.add('ExcelApi version 1.' + version.toString());
    this.run();
    localStorage.setItem('count', '0');
    this.checkSettings();
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
  
  /**
  * Polls for changes in `Office.context.documents.settings`.
  * 
  * Polling is necessary because Excel fires the context.workbook.settings.onSettingsChanged
  * event only when the taskpane is displayed and then only when more than one user is
  * editing/coauthoring the spreadsheet.
  * 
  * To minimize interactions with Excel, commands.html mirrors document settings as
  * items in localStorage.  Using document settings in addition to localStorage items
  * preserves settings from one session of Excel to the next.
  * 
  * Polling may not be needed to detect changes in localStorage.  TODO Try using events
  * to catch these changes.
  */
  private checkSettings() {
    const context = this; // Needed to give the setInterval function access to `this`
    setInterval(function() {
      const newCount = localStorage.getItem('count');
      if (newCount != null && newCount != context.clickCount) {
        context.clickCount = newCount;
        context.log.add("Count button click number " + newCount);
      }
    }, 250);
  }
  
  public getClicks(): string { return this.clickCount; }
  
  public logAsTable(): string {
    let s = '<table>';
    for (const line of this.log.get()) { s += '<tr><td>' + line + '</td></tr>'}
    s += '</table>';
    document.getElementById('debuggingLog').innerHTML = s;
    return '';
  }
}
