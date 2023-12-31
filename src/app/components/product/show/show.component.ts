import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  product: Product = {
    id: 0,
    brand: '',
    description: '',
    name: '',
    photo: '',
    price: 0
  }

  constructor(
    protected service: ProductService,
    protected router: Router,
    protected route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!)
    this.service.find(id).subscribe((product) => {
      this.product = product
    })
  }
}
