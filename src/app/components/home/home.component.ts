import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = []
  nextPage: number = 0;
  previousPage: number = 0;
  maxPages: number = 0;

  constructor(
    protected service: ProductService,
    protected route: ActivatedRoute
  ) { }

  updateProducts(){

  }

  ngOnInit(): void {
    this.service.all().subscribe((products) => {
      this.products = products.data.reverse()
      this.nextPage = products.current_page + 1
      this.previousPage = products.current_page - 1
      this.maxPages = products.last_page
    })
  }

  next(){
    this.service.all(this.nextPage).subscribe((products) => {
      this.products = products.data.reverse()
      this.nextPage = products.current_page + 1
      this.previousPage = products.current_page - 1
      this.maxPages = products.last_page
    })
  }

  previous(){
    this.service.all(this.previousPage).subscribe((products) => {
      this.products = products.data.reverse()
      this.nextPage = products.current_page + 1
      this.previousPage = products.current_page - 1
      this.maxPages = products.last_page
    })
  }
}
