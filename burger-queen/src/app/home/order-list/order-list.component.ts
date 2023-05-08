import { Component, OnInit} from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Products } from 'src/app/service/products.service';

interface Order {
  userId: string | null;
  client: string;
  tableNum: number | null;
  products: [{
    qty: number;
    product: Products[];
  }];
  status: string;
  dataEntry: Date;
};

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  dataOrder!: Order[];
  /* dataOrderProducts!:any; */
  constructor(private orderServ:OrderService) { }

   ngOnInit(): void {
    this.orderServ.getOrders()
    .subscribe(res =>{
      console.log(res)
    this.dataOrder= res
    })
}

}
