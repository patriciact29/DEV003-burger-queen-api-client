import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
 @Input() dataMenu:any;
 public image: string;
 constructor(){
 }
 ngOnInit(): void {
   this.image="https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg"
   console.log('Data', this.dataMenu)
 }
}
