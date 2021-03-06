/*--------------------------------------------------------------------------------------------
 * taskpane/taskpane.ts
 *
 * Copyright 2020 (c) Stage One Software.
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import 'core-js/es7/reflect';
import "zone.js"; // Required for Angular
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// eslint-disable-next-line no-unused-vars
import {BrowserModule } from "@angular/platform-browser";
import AppModule from "./app/app.module";
/* global console, document, Office */

Office.initialize = () => {
  const msg = document.getElementById("sideload-msg");
  if (msg) { msg.style.display = "none"; }

  // Bootstrap the app
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
};
