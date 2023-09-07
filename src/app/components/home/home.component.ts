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
  constructor(
    protected service: ProductService,
    protected route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.all().subscribe((products) => {
      this.products = products.data.reverse()
    })
  }
}
