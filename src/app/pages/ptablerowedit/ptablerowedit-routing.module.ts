import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PtableroweditComponent } from './ptablerowedit.component';

const routes: Routes = [
  { path:'',component:PtableroweditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtableroweditRoutingModule { }
