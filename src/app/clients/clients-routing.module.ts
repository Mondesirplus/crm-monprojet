import { NgModule } from '@angular/core';
import { ClientsComponent } from './pages/clients/clients.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: ClientsComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(
        appRoutes
      )
    ]
  })
export class ClientsRoutingModule { }
