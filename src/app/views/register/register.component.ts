import { Component, OnInit } from '@angular/core';

import { MaterialDOMService } from '../../common/services/material-dom.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private mdc: MaterialDOMService
  ) { }

  ngOnInit() {
    this.mdc.renderFields();
    this.mdc.renderButtons();
  }

}
