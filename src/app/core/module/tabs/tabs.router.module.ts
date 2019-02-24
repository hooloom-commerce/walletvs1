import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabbedComponent } from '../../layout/tabbed/tabbed.component';
import { HomeComponent } from '../../../views/home/home.component';
import { PayComponent } from '../../../views/pay/pay.component';
import { PayItemComponent } from '../../../views/pay/pay-item/pay-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabbedComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pay',
        children: [
          { path: '', component: PayComponent },
          { path: 'pay-item', component: PayItemComponent }
        ]
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
export class TabsRoutingModule { }
