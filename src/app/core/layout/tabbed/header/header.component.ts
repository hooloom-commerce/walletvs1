import { Component, OnInit } from '@angular/core';

import { MaterialDOMService } from 'src/app/common/services/material-dom.service';
import { PlatformService } from 'src/app/common/services/platform.service';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public drawer: any;
  public drawerState = false;

  constructor(
    private mdc: MaterialDOMService,
    private platform: PlatformService
  ) { }

  ngOnInit() {
    this.mdc.renderTopAppBar();
    this.drawer = this.mdc.renderDrawer();
    this.drawer.open = this.drawerState;

    this.loseFocus();
  }

  toggleDrawer() {
    this.drawerState = !this.drawerState;
    this.drawer.open = this.drawerState;
  }

  loseFocus() {
    if (this.platform.platformCheck) {
      const clickEvent = fromEvent(document.body, 'MDCDrawer:closed');
      clickEvent.subscribe((event) => {
        this.drawerState = false;
      });

    }
  }

}
