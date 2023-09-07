import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import Product from '../interfaces/product';
import { Observable } from 'rxjs';
import List from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost/api/products"

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<List<Product>> {
    return this.http.get<List<Product>>(this.url)
  }

  find(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  store(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product)
  }

  delete(product: Product) {
    return this.http.delete(`${this.url}/${product.id}`)
  }
}
