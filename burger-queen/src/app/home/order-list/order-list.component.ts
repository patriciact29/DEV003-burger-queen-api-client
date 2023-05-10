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
    //se llama a la función del service
    this.orderServ.getOrders()
    .subscribe(res =>{
      console.log(res)
      //igualamos data order al array de respuesta
    this.dataOrder= res
    })
}

}
