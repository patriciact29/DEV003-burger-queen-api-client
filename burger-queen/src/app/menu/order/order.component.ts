import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { FormControl } from '@angular/forms'

interface Products{
  _id: string,
  name: string,
  price: number,
  image: URL,
  type: string,
  dateEntry: Date,
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  clientName = new FormControl('');
  constructor(private ProductService:ProductsService){  }

}
