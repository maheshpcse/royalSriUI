import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.styl']
})
export class OrdersComponent implements OnInit {
  value: Date;
  orderList: any = [];
  constructor() { }

  ngOnInit() {
    this.orderList = [
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 1
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 2
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 3
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 4
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 1
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 1
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 2
      },
      {
        orderNo: '123456789',
        manufac: 'Angel Broking Ltd',
        orderDate: '30-Jul-2021',
        challan: 'DM/UP/82',
        status: 3
      },
    ]

  }

}
