import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtableeditRoutingModule } from './ptableedit-routing.module';
import { PtableeditComponent } from './ptableedit.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PtableeditComponent],
  imports: [
    CommonModule,
    PtableeditRoutingModule,NgZorroAntdModule,TableModule,DropdownModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class PtableeditModule { }
