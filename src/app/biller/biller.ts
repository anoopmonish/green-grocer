import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import moment from 'moment';

@Component({
  selector: 'app-biller',
  imports: [AppCommonModule],
  templateUrl: './biller.html',
  styleUrl: './biller.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Biller implements OnInit {
  bill: any;

  ngOnInit() {
    this.initiateNewBill();
  }

  initiateNewBill() {
    this.bill = {
      billNumber: '',
      billDate: moment().format('DD-MMM-YYYY HH:mm:ss'),
      customerName: '',
      customerAddress: '',
      customerPhone: '',
      items: [
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item(),
        new Item()
      ],
      totalAmount: 0
    };
  }
}

class Item {
  sno: number;
  code = 'A001';
  name = 'Anoop Monish Chiluveru';
  quantity = 2;
  price = 40;
  mrp = 45;
  tax = 0;
  amount = 80;
}
