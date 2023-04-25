import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{
  showBreakfast =true;

  clientName = new FormControl('');
  constructor(private ProductService:ProductsService){  }

  mostrarDesayuno() {
    this.showBreakfast = true;
  }
  mostrarMenu() {
    this.showBreakfast = false;
  }

  public menu:Array<any> = []
  detalleMenu: any;
}



 
