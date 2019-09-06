import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes =[
  { path: 'login', component: LoginComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(
        appRoutes
      )
    ]
  })
export class LoginRoutingModule { }
