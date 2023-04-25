import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

// export class MenuComponent implements OnInit {

export class MenuComponent{
  showBreakfast =true;

  clientName = new FormControl('');
  constructor(private router: Router){}

  mostrarDesayuno() {
    this.showBreakfast = true;
  }
  mostrarMenu() {
    this.showBreakfast = false;
  }


 /* public menu:Array<any> = []
  detalleMenu: any;

  constructor(private ProductService:ProductsService){

  }

  ngOnInit(): void {

    this.menu = [{
    "id": 1214,
    "name": "Sandwich de jamón y queso",
    "price": 1000,
    "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
    "type": "Desayuno",
    "dateEntry": "2022-03-05 15:14:10"
  },
  {
    "id": 7450,
    "name": "Café americano",
    "price": 500,
    "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
    "type": "Desayuno",
    "dateEntry": "2022-03-05 15:14:10"
  }]
  }
  public cargarMenu(){
    this.ProductService.getProduct()
    .subscribe(res =>{
      this.detalleMenu = res
    })
  }
}
*/