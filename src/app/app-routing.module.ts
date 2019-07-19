import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'ptable', loadChildren: () => import('./pages/ptable/ptable.module').then(m => m.PtableModule) },
  { path: 'testDragdrop', loadChildren: () => import('./pages/test-dragdrop/test-dragdrop.module').then(m => m.TestDragdropModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
