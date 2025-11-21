import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AppCommonModule } from '../app-common.module';
import moment from 'moment';

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
      billNumber: 'P/234-5678',
      billDate: moment().format('DD-MMM-YYYY HH:mm:ss'),
      customerName: '',
      customerAddress: '',
      customerPhone: '',
      items: [
        new Item(),new Item(),new Item(),new Item(),new Item(),
        new Item(),new Item(),new Item(),new Item(),new Item(),
        new Item(),new Item(),new Item(),new Item(),new Item(),
        new Item(),new Item(),new Item(),new Item(),new Item(),
        new Item(),new Item(),new Item(),new Item(),new Item()
      ],
      totalQuantity: 45,
      itemsValue: 3500,
      discount: 42,
      tender: null,
      change: null,
      totalAmount: 3458
    };
  }

  onTenderChange() {
    const tender = parseFloat(this.bill.tender);
    const totalAmount = parseFloat(this.bill.totalAmount);
    if (!isNaN(tender) && tender >= totalAmount) {
      this.bill.change = (tender - totalAmount);
    } else {
      this.bill.change = null;
    }
  }
}


