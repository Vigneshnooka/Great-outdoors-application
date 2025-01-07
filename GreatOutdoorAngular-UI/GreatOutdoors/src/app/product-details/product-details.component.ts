import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  id:number=0;
  constructor(private productService: ProductService) {}

  fetchProduct(productId: any) {
    let data = productId.value;
    this.id = data.productId;

    let observable: Observable<Product> = this.productService.fetchProductById(this.id);
    // let successHandler = (product: Product) => (this.product = product);
    // let errHandler = (err) => console.log('error is' + err.message);
    observable.subscribe(
      (product: Product) => (this.product = product),
      (err) => console.log('error is' + err.message)
    );
  }
}
