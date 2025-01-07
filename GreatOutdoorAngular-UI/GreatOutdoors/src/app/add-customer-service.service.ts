import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:8585/customers';
  constructor(private http:HttpClient) { }
  
    public addCustomer(customer:any){
      return this.http.post("http://localhost:8585/customers/add", customer, {responseType: 'text' as 'json'});
    }
  /*
    fetchCustomers(): Observable<Customer[]> {
      const url = this.baseUrl + '/allCustomers';
      let observable: Observable<Customer[]> = this.http.get<Customer[]>(url);
      return observable;
    }*/
    fetchCustomer(id: number): Observable<Customer> {
      let url = this.baseUrl + '/by/customerId/' + id;
      let observable: Observable<Customer> = this.http.get<Customer>(url);
      return observable;
    }
}
