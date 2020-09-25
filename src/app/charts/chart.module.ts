import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexboxComponent } from './flexbox/flexbox.component';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartRoutingModule } from './chart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ChartRoutingModule
  ],
  declarations: [
    BarChartComponent,
    FlexboxComponent
  ]
})
export class ChartModule { }
