import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { OrderService } from 'src/app/service/order.service';

interface Products {
  _id: string,
  name: string,
  price: number,
  image: URL,
  type: string,
  dateEntry: Date,
};

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})

export class LunchComponent implements OnInit{
  datalunch!:Products[];
  constructor(private pService:ProductsService, private orderServ:OrderService){  }

  ngOnInit(): void {
      this.pService.getProduct()
      .subscribe(res =>{
      this.datalunch = res.filter((product) => product.type==='Almuerzo')
      })
  }

  addProduct(dataMenu:Products):void{
    this.orderServ.orderList(dataMenu)
  }
}
