import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-item',
  templateUrl: './pay-item.component.html',
  styleUrls: ['./pay-item.component.scss']
})
export class PayItemComponent implements OnInit {
  public pageNumber: number;

  constructor() {
    this.pageNumber = 1;
  }

  ngOnInit() {
  }

}
