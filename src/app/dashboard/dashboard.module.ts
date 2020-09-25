import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstTaskComponent } from './components/dashboard/first-task/first-task.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'first-task',  component: FirstTaskComponent }
];


@NgModule({
  declarations: [
    DashboardComponent,
    FirstTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
