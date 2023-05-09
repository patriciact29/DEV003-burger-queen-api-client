import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
  ){}

  showTables= true;
  showtable(){
    this.showTables = true;
  }

  showOrderList(){
    this.showTables = false;
  }
  showMenu(){
    this.router.navigate(['menu'])
  }
  logout(){
    this.router.navigate([''])
    sessionStorage.clear()
  }
}
