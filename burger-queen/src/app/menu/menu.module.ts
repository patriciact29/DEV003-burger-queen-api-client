import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';

@NgModule({
  declarations: [
    MenuComponent,
    BreakfastComponent,
    LunchComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'breakfast', component: BreakfastComponent },
      { path: 'lunch', component: LunchComponent },
    ]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
