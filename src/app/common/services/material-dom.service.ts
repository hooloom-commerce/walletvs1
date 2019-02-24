import { Injectable } from '@angular/core';

import { MDCDrawer } from '@material/drawer';
import { MDCList } from '@material/list';
import { MDCTextField } from '@material/textfield';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCRipple } from '@material/ripple';

import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialDOMService {

  constructor(
    private platform: PlatformService
  ) { }

  renderFields() {
    if (this.platform.platformCheck) {
      const fields = document.querySelectorAll('.form-input');
      fields.forEach(field => {
        const textField = new MDCTextField(field);
      });
    }
  }

  renderButtons() {
    if (this.platform.platformCheck) {
      const buttons = document.querySelectorAll('.form-button');
      buttons.forEach(button => {
        const buttonRipple = new MDCRipple(button);
      });
    }
  }

  renderTopAppBar() {
    if (this.platform.platformCheck) {
      const topAppBarElement = document.querySelector('.mdc-top-app-bar');
      const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
  }

  renderDrawer() {
    if (this.platform.platformCheck) {
      const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
      return drawer;
    }
  }

  renderList() {
    if (this.platform.platformCheck) {
      const list = new MDCList(document.querySelector('.mdc-list'));
      const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
    }
  }
}
