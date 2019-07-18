import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtableRoutingModule } from './ptable-routing.module';
import { PtableComponent } from './ptable.component';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PtableComponent],
  imports: [
    CommonModule,
    PtableRoutingModule,TableModule,FormsModule,ReactiveFormsModule,DropdownModule
  ]
})
export class PtableModule { }
