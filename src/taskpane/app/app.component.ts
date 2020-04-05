/*------------------------------------------------------------------
* taskpane/app/app.component.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

import { Component } from "@angular/core";
// eslint-disable-next-line no-unused-vars
import { CommonModule } from "@angular/common";
import { Log } from "./log";
/* global Office, require, window */

@Component({
  selector: "app-home",
  template: require("./app.component.html")
})
export default class AppComponent {

  log = Log.getSingleton();
  
  constructor() {
    this.log.add('Platform: ' + Office.context.platform);
    this.log.add('License: ' + Office.context.license['value']);
    this.log.add('Office version: ' + Office.context.diagnostics.version);
    this.log.add('Browser: ' + window.navigator.appName);
    this.log.add('Browser version: ' + window.navigator.appVersion);
    let version = 4;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (!Office.context.requirements.isSetSupported('ExcelApi', '1.' + version.toString())) { break; }
      version++;
    }
    this.log.add('ExcelApi version 1.' + version.toString());
  }

}
