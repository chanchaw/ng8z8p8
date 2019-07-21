import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtableroweditRoutingModule } from './ptablerowedit-routing.module';
import { PtableroweditComponent } from './ptablerowedit.component';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PtableroweditComponent],
  imports: [
    CommonModule,
    PtableroweditRoutingModule,TableModule,FormsModule,ReactiveFormsModule,
    DropdownModule
  ],
  providers:[MessageService]
})
export class PtableroweditModule { }
