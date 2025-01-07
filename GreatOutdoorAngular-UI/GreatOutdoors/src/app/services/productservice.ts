import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  baseUrl = 'http://localhost:8585/productstable';

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/add';
    let requestData = {
      productName: product.productName,
      price: product.price,
      image:product.image,
      color: product.color,
      category: product.category,
      quantity: product.quantity,
      manufacturer: product.manufacturer,
      specification: product.specification
    };
    let observable: Observable<Product> = this.http.post<Product>(
      url,
      requestData
    );
    return observable;
  }

  fetchProducts(): Observable<Product[]> {
    const url = this.baseUrl + '/allProducts';
    let observable: Observable<Product[]> = this.http.get<Product[]>(url);
    return observable;
  }

  fetchProductById(id: number): Observable<Product> {
    const url = this.baseUrl + '/by/productid/' + id;
    let observable: Observable<Product> = this.http.get<Product>(url);
    return observable;
  }
}
