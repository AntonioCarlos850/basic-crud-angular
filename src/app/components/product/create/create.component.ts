import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Product from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup

  photo: any
  photoUrl: any

  constructor(
    protected service: ProductService,
    protected router: Router,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      brand: ['', [Validators.required]],
      description: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [0, Validators.compose([
        Validators.min(0.01),
        Validators.required
      ])],
      photo: [''],
      id: [0]
    })
  }

  onFileSelected(event: any) {
    this.photo = event.target.files[0]
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.photoUrl = e.target.result
    };

    reader.readAsDataURL(this.photo);
  }

  save(){
    if (this.form.valid) {
      this.service.store(this.form.value, this.photo).subscribe(() => {
        this.router.navigate([""])
      });
    }
  }
}
