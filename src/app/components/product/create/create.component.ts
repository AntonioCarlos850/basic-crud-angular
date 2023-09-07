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

  photo: any

  constructor(
    protected service: ProductService,
    protected router: Router,
  ) {}

  onFileSelected(event: any) {
    this.photo = event.target.files[0];

    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.product.photo = e.target.result
    };

    reader.readAsDataURL(this.photo);
  }

  save(){
    this.service.store(this.product, this.photo).subscribe(() => {
      this.router.navigate([""])
    });
  }
}
