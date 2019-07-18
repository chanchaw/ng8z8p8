import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PtableComponent } from './ptable.component';

const routes: Routes = [
  { path:'',component:PtableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtableRoutingModule { }
