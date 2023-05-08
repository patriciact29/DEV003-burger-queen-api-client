import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { FormControl } from '@angular/forms'
import { OrderService } from 'src/app/service/order.service';

interface Products {
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
  dataOrder!:any;
  clientName = new FormControl('');
  constructor(private ProductService: ProductsService, private orderServ:OrderService) { }


  ngOnInit(): void {
    this.dataOrder = this.orderServ.dataOrder.products
  }
  delete(product:any){
    this.orderServ.delete(product)
  }
  increase(dataOrder:any){
    this.orderServ.increment(dataOrder)
  }
  decrease(dataOrder:any){
    this.orderServ.decrease(dataOrder)
  }
  createOrder(){
    console.log("works")
  }
}



