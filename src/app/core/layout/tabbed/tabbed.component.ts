import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideAnimation, fadeAnimation } from 'src/app/common/utils/router.animations';

@Component({
  selector: 'app-tabbed',
  templateUrl: './tabbed.component.html',
  styleUrls: ['./tabbed.component.scss'],
  animations: [ slideAnimation, fadeAnimation ]
})
export class TabbedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
