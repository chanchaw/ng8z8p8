import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDragdropComponent } from './test-dragdrop.component';

const routes: Routes = [
  { path:'',component:TestDragdropComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDragdropRoutingModule { }
