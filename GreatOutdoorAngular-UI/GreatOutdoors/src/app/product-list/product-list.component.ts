import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    let observable: Observable<Product[]> = this.productService.fetchProducts();
    observable.subscribe(
      (productsArg: Product[]) => (this.products = productsArg),
      (err) => console.log('error is' + err.message)
    );
  }
}
