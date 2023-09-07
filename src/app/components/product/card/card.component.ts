import { Component, Input } from '@angular/core';
import Product from 'src/app/interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product = {
    id: 1,
    brand: '',
    description: '',
    name: '',
    photo: '',
    price: 0
  }
}
