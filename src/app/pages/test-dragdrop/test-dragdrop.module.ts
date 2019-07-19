import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDragdropRoutingModule } from './test-dragdrop-routing.module';
import { TestDragdropComponent } from './test-dragdrop.component';
import { DragdropDirective } from '../../shared/directive/dragdrop.directive';

@NgModule({
  declarations: [TestDragdropComponent,DragdropDirective],
  imports: [
    CommonModule,
    TestDragdropRoutingModule
  ]
})
export class TestDragdropModule { }
