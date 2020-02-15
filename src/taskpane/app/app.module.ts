import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import { CommonModule } from "@angular/common";
// import { MonitorComponent } from "./monitor/monitor.component"; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
