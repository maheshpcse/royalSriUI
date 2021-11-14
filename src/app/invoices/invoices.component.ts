import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.styl']
})
export class InvoicesComponent implements OnInit {
  value: Date;
  orderList: any = [];
  showType:any = 'default'
  constructor() { }

  ngOnInit() {

    this.orderList = [
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
      {
        invoiceNo: 'DM/UP/82',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        delvDare: '30-Jul-2021',
        mop: 'Credit',
        amount: '1,27,735.94'
      },
    ]

  }

  openType(value: any) {
    this.showType = value;
  }

}
