import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from '../../layout/full/full.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegisterComponent } from 'src/app/views/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class FullRoutingModule { }
