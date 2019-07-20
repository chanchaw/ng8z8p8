import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangebothendComponent } from './changebothend.component';

const routes: Routes = [
  { path:'',component:ChangebothendComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangebothendRoutingModule { }
