import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  formDesayuno: FormGroup


  clientName = new FormControl('');
  constructor(
    private router: Router,
    private builder: FormBuilder
  ) {
   this.formDesayuno = this.builder.group({

   });
  }

    desayuno():void {
      //const val = this.formDesayuno.value;
      this.router.navigate(['breakfast']);
      console.log("aqui");

  }
  updateName() {
    this.clientName.setValue('Nancy');

  }

}
