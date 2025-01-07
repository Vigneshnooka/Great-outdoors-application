import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/add-customer-service.service';
import { Customer } from 'src/app/model/Customer';
import { Address } from 'src/app/model/Address';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {
/*
  constructor(private service:CustomerService) { }

  
  customers:any;
  customerById: any;
  id:any;
  address:Address=new Address(0,"","","","",0);
  customer:Customer=new Customer("", 0, "", this.address,"");
  
  
  public getAllCustomers(){
    let resp = this.service.getAllCustomers();
    resp.subscribe((data)=>this.customers = data);
  }

  public getCustomerById(){
    let resp = this.service.getCustomerById(this.id);
    resp.subscribe((data)=>this.customerById= data);
  }

  public deleteCustomer(id:number){
    let resp = this.service.deleteCustomer(id);
    resp.subscribe((data:any)=>this.customers=data);
  }
*/


  customer: Customer | undefined;
  
  constructor(private customerService: CustomerService) {}
  fetchCustomer(myform: any) {
    let data = myform.value;
    let id:number= data.customerId;

    let observable: Observable<Customer> = this.customerService.fetchCustomer(id);
    // let successHandler = (product: Product) => (this.product = product);
    // let errHandler = (err) => console.log('error is' + err.message);
    observable.subscribe(
      (customer: Customer) => (this.customer = customer),
      (err) => console.log('error is' + err.message)
    );
  }
}
