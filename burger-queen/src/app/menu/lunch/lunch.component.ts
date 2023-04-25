import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

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
  constructor(private pService:ProductsService){  }

  ngOnInit(): void {

      this.pService.getProduct()
      .subscribe(res =>{
      this.datalunch = res
      console.log(res)
      })

  }

}
