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

  private mountBody(product: Product, photo: File | null):FormData {
    const formData = new FormData();
    if (photo) {
        formData.append("photo", photo);
    }

    formData.append('brand', product.brand);
    formData.append('description', product.description);
    formData.append('name', product.name);
    formData.append('price', product.price.toString());

    return formData
  }

  store(product: Product, photo: File): Observable<Product> {
    return this.http.post<Product>(this.url, this.mountBody(product, photo))
  }

  update(product: Product, photo: File): Observable<Product> {
    return this.http.post<Product>(`${this.url}/${product.id}`, this.mountBody(product, photo))
  }

  delete(product: Product) {
    return this.http.delete(`${this.url}/${product.id}`)
  }
}
