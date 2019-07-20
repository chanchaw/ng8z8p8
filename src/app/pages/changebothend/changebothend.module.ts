import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangebothendRoutingModule } from './changebothend-routing.module';
import { ChangebothendComponent } from './changebothend.component';

@NgModule({
  declarations: [ChangebothendComponent],
  imports: [
    CommonModule,
    ChangebothendRoutingModule
  ]
})
export class ChangebothendModule { }
