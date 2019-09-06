import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoderbaseUiModule} from '@coderbase/ui';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UiComponent } from './containers/ui/ui.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavComponent, FooterComponent, HeaderComponent, UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
    RouterModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
