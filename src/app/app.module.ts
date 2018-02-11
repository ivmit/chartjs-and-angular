import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartTooltipService } from './components/chart/chart-tooltip/chart-tooltip.service'


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
