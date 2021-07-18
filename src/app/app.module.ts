import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { FormsModule } from '@angular/forms';
import { KpiComponent } from './abstracts/kpi/kpi.component';
import { BarchartComponent } from './abstracts/barchart/barchart.component';
@NgModule({
  declarations: [
    AppComponent,
    KpiComponent,
    BarchartComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [KpiComponent]
})
export class AppModule { }
