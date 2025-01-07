import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrderService } from '../services/orderservice';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  order: Order | undefined;
  constructor(private orderService: OrderService) {}
  addOrder(myform: any) {
    let data = myform.value;
    this.order = new Order(
      0,
      data.userId,
      data.totalPrice,
      data.totalQuantity,
      data.deliveryDate,
      data.dispatchDate
     
    );
    let observable: Observable<Order> = this.orderService.addOrder(
      this.order
    );
    observable.subscribe(
      (order: Order) => (this.order = order),
      (err) => console.log('error is' + err.message)
    );
    myform.reset();
  }
}
