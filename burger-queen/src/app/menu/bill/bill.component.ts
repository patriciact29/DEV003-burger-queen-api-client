import { Component } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ProductsService } from 'src/app/service/products.service';
import { OrderComponent } from '../order/order.component';

interface Products {
  _id: string,
  name: string,
  price: number,
  image: URL,
  type: string,
  dateEntry: Date,
  qty:number,
}
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  totalPrice :number =0;
  products: Products[] = [];
  dataOrder!:any;
  constructor(private orderServ:OrderService, private productsService: ProductsService){}


  ngOnInit(): void {
    this.dataOrder  = this.orderServ.dataOrder.products
    this.getTotalPrice();
  }
  getTotalPrice(): void {
    this.totalPrice  = 0;
    for (let product of this.orderServ.dataOrder.products) {
      this.totalPrice += product.qty * product.price;
    }
  }

}
