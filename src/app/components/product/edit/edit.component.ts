import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  form!: FormGroup

  photo: any
  photoUrl: any

  constructor(
    protected service: ProductService,
    protected router: Router,
    protected route: ActivatedRoute,
    private builder: FormBuilder
  ){ }

  onFileSelected(event: any) {
    this.photo = event.target.files[0]
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.photoUrl = e.target.result
    };

    reader.readAsDataURL(this.photo);
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      id: [],
      price: [0, Validators.compose([
        Validators.min(0.01),
        Validators.required
      ])],
      name: ['', [Validators.required]],
      photo: [],
      description: ['', [Validators.required]],
      brand: ['', [Validators.required]],
    })

    const id = parseInt(this.route.snapshot.paramMap.get("id")!)
    this.service.find(id).subscribe((product) => {
      this.form.get("id")?.setValue(product.id)
      this.form.get("price")?.setValue(product.price)
      this.form.get("name")?.setValue(product.name)
      this.form.get("description")?.setValue(product.description)
      this.form.get("brand")?.setValue(product.brand)
      this.photoUrl = product.photo
    })
  }

  save(){
    this.service.update(this.form.value, this.photo).subscribe(() => {
      this.router.navigate([""])
    });
  }
}
