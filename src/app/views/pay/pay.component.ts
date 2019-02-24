import { Component, OnInit } from '@angular/core';
import { MaterialDOMService } from 'src/app/common/services/material-dom.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor(
    private mdc: MaterialDOMService
  ) { }

  ngOnInit() {
    this.mdc.renderList();
  }

}
