import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PageClientAddComponent } from './pages/page-client-add/page-client-add.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';

@NgModule({
  declarations: [ClientsComponent, ListClientsComponent, ItemClientComponent, PageClientAddComponent, AddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }