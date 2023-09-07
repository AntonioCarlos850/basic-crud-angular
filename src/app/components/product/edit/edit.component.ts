import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  product: Product = {
    id: 0,
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
    protected route: ActivatedRoute
  ){ }

  onFileSelected(event: any) {
    this.photo = event.target.files[0];

    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.product.photo = e.target.result
    };

    reader.readAsDataURL(this.photo);
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!)
    this.service.find(id).subscribe((product) => {
      this.product = product
    })
  }

  save(){
    this.service.update(this.product, this.photo).subscribe(() => {
      this.router.navigate([""])
    });
  }
}
