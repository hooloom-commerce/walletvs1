import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from '../../layout/full/full.component';
import { FullRoutingModule } from './full.router.module';
import { LoginComponent } from '../../../views/login/login.component';
import { RegisterComponent } from '../../../views/register/register.component';

@NgModule({
  declarations: [
    FullComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FullRoutingModule
  ]
})
export class FullModule { }
