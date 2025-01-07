import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/productservice';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GotoComponent } from './goto/goto.component';
import { AddOrderComponent } from 'src/app/add-order/add-order.component';
import { OrderDetailsComponent } from 'src/app/order-details/order-details.component';
import { OrderListComponent } from 'src/app/order-list/order-list.component';
import { OrderService } from 'src/app/services/orderservice';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    HomeComponent,
    AddUserComponent,
    LoginComponent,
    WelcomeComponent,
    GotoComponent,
    AddOrderComponent,
    OrderDetailsComponent,
    OrderListComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductService,OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
