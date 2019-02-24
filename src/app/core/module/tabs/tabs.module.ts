import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/tabbed/footer/footer.component';
import { HeaderComponent } from '../../layout/tabbed/header/header.component';
import { TabbedComponent } from '../../layout/tabbed/tabbed.component';


import { TabsRoutingModule } from './tabs.router.module';
import { MenuComponent } from '../../layout/tabbed/menu/menu.component';
import { HomeComponent } from '../../../views/home/home.component';
import { PayComponent } from '../../../views/pay/pay.component';
import { PayItemComponent } from '../../../views/pay/pay-item/pay-item.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TabbedComponent,
    MenuComponent,
    HomeComponent,
    PayComponent,
    PayItemComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
