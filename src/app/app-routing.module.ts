import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'ptable', loadChildren: () => import('./pages/ptable/ptable.module').then(m => m.PtableModule) },
  { path: 'testDragdrop', loadChildren: () => import('./pages/test-dragdrop/test-dragdrop.module').then(m => m.TestDragdropModule) },
  { path: 'ptableedit', loadChildren: () => import('./pages/ptableedit/ptableedit.module').then(m => m.PtableeditModule) },
  { path: 'changebothend', loadChildren: () => import('./pages/changebothend/changebothend.module').then(m => m.ChangebothendModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
