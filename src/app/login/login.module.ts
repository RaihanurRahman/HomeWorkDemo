import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '**', redirectTo: 'login' }
];


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
    ]
})
export class LoginModule { }
