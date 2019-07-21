import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtableroweditRoutingModule } from './ptablerowedit-routing.module';
import { PtableroweditComponent } from './ptablerowedit.component';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PtableroweditComponent],
  imports: [
    CommonModule,
    PtableroweditRoutingModule,TableModule,FormsModule,ReactiveFormsModule,
    DropdownModule,ButtonModule,InputTextModule
  ],
  providers:[MessageService]
})
export class PtableroweditModule { }
