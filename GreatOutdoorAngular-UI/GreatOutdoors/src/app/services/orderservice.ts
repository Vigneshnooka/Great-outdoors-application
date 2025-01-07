import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable()
export class OrderService {
  baseUrl = 'http://localhost:8585/orderstable';

  constructor(private http: HttpClient) {}

  addOrder(order: Order): Observable<Order> {
    const url = this.baseUrl + '/add';
    let requestData = {
      userId:order.userId,
      totalPrice: order.totalPrice,
      totalQuantity: order.totalQuantity,
      deliveryDate: order.deliveryDate,
      dispatchDate: order.dispatchDate
    };
    let observable: Observable<Order> = this.http.post<Order>(
      url,
      requestData
    );
    return observable;
  }

  fetchOrders(): Observable<Order[]> {
    const url = this.baseUrl + '/allOrders';
    let observable: Observable<Order[]> = this.http.get<Order[]>(url);
    return observable;
  }
  fetchOrderById(id: number): Observable<Order> {
    const url = this.baseUrl + '/by/orderid/' + id;
    let observable: Observable<Order> = this.http.get<Order>(url);
    return observable;
  }


}