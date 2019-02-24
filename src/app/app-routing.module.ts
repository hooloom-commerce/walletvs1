import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro/login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: './core/module/tabs/tabs.module#TabsModule'
  },
  {
    path: 'intro',
    loadChildren: './core/module/full/full.module#FullModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
