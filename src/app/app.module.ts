import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoCardSectionComponent } from './components/info-card-section/info-card-section.component';
import { BigChartComponent } from './components/big-chart/big-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';
import { C3LineChartComponent } from './components/c3-line-chart/c3-line-chart.component';
import { ReportsSectionComponent } from './components/reports-section/reports-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoCardComponent,
    InfoCardSectionComponent,
    BigChartComponent,
    LineChartComponent,
    C3LineChartComponent,
    ReportsSectionComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
