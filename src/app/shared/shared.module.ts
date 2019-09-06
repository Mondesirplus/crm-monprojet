import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonAddComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplatesModule, ButtonAddComponent, ReactiveFormsModule],
})
export class SharedModule { }