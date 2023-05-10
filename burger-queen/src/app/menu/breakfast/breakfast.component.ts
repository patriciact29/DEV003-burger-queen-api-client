import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { OrderService } from 'src/app/service/order.service';

interface Products{
  _id: string,
  name: string,
  price: number,
  image: URL,
  type: string,
  dateEntry: Date,
}

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})

export class BreakfastComponent implements OnInit {
  databreakfast!:Products[];
  constructor(private pService:ProductsService, private orderServ:OrderService){  }

  ngOnInit(): void {
      this.pService.getProduct()
      .subscribe(res =>{
      this.databreakfast = res.filter((product) => product.type==='Desayuno')
      })
  }

  addProduct(dataMenu:Products):void{
    this.orderServ.orderList(dataMenu)
  }
}
