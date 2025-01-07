import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrderService } from '../services/orderservice';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  order: Order | undefined;
  constructor(private orderService: OrderService) {}
  fetchOrder(myform: any) {
    let data = myform.value;
    let id: number = data.orderId;

    let observable: Observable<Order> = this.orderService.fetchOrderById(
      id
    );
    // let successHandler = (product: Product) => (this.product = product);
    // let errHandler = (err) => console.log('error is' + err.message);
    observable.subscribe(
      (order: Order) => (this.order = order),
      (err) => console.log('error is' + err.message)
    );
  }
}
