import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{
constructor(
  private router : Router
){}
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
  returnHome(){
    this.router.navigate(['home'])
  }
  public menu:Array<any> = []
  detalleMenu: any;
}




