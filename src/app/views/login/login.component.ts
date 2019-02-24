import { Component, OnInit } from '@angular/core';

import { MaterialDOMService } from '../../common/services/material-dom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private mdc: MaterialDOMService
  ) { }

  ngOnInit() {
    this.mdc.renderFields();
    this.mdc.renderButtons();
  }


}
