import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtableRoutingModule } from './ptable-routing.module';
import { PtableComponent } from './ptable.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PtableComponent],
  imports: [
    CommonModule,
    PtableRoutingModule,TableModule
  ]
})
export class PtableModule { }
