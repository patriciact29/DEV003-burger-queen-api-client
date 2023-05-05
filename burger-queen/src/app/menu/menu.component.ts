import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{

  showBreakfast =true;
  showOrders=true;

  mostrarDesayuno() {
    this.showBreakfast = true;
  }
  mostrarMenu() {
    this.showBreakfast = false;
  }

  showOrder(){
    this.showOrders = true;
  }
  showBill(){
    this.showOrders=false;

  }

  public menu:Array<any> = []
  detalleMenu: any;
}




