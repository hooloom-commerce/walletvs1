import { Component, OnInit } from '@angular/core';
import { MaterialDOMService } from 'src/app/common/services/material-dom.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private mdc: MaterialDOMService
  ) { }

  ngOnInit() {
    this.mdc.renderButtons();
  }

}
