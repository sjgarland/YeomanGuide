import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import AppComponent from "./app.component";
import { ExcelMonitorComponent } from "./ExcelMonitor/ExcelMonitor.component";

@NgModule({
  declarations: [AppComponent, ExcelMonitorComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
