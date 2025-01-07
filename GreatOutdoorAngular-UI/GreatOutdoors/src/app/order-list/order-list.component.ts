import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrderService } from '../services/orderservice';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent  {

  orders: Order[] = [];
  constructor(private orderService: OrderService) {
    let observable: Observable<Order[]> = this.orderService.fetchOrders();
    observable.subscribe(
      (ordersArg: Order[]) => (this.orders = ordersArg),
      (err) => console.log('error is' + err.message)
    );
  }
 
  }


