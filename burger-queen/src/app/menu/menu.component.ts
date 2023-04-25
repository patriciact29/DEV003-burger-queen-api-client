import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
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

}
