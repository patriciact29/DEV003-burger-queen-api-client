import { Component, OnInit} from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  dataOrder:any[] = [];

  constructor(private orderServ:OrderService) { }

   ngOnInit(): void {
    this.orderServ.getOrders()
    .subscribe(res =>{
      console.log(res)
    this.dataOrder= res
    })
}

}
