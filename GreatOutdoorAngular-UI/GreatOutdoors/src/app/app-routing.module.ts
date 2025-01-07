import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddCustomerComponent } from 'src/app/add-customer/add-customer.component';
import { CustomerDetailsComponent } from 'src/app/customer-details/customer-details.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { LoginComponent } from 'src/app/login/login.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { GotoComponent } from 'src/app/goto/goto.component';
import { OrderDetailsComponent } from 'src/app/order-details/order-details.component';
import { AddOrderComponent } from 'src/app/add-order/add-order.component';
import { OrderListComponent } from 'src/app/order-list/order-list.component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-product', component: ProductListComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'list-order', component: OrderListComponent },
  {path:'add-customer',component:AddCustomerComponent},
  {path:'customerDetails',component:CustomerDetailsComponent},
  {path:"", component:HomeComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"signUp",component:AddUserComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  {path:"goto",component:GotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
