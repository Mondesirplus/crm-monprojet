import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { SharedModule } from '../shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { PagePrestationAddComponent } from './pages/page-prestation-add/page-prestation-add.component';



@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PagePrestationAddComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
