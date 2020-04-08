import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import AppComponent from "./app.component";
import { ExcelInspectorComponent } from "./excel-inspector/excel-inspector.component";

@NgModule({
  declarations: [AppComponent, ExcelInspectorComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
