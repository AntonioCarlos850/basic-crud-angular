import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product: Product = {
    id: 1,
    brand: '',
    description: '',
    name: '',
    photo: '',
    price: 0
  }

  constructor(
    protected service: ProductService,
    protected router: Router,
  ) {}

  save(){
    this.service.store(this.product).subscribe(() => {
      this.router.navigate([""])
    });
  }
}
