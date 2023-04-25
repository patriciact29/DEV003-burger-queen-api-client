import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';

const routes: Routes = [{
    path: '',component: MenuComponent,
    children: [
      { path: 'breakfast', component: BreakfastComponent },
      { path: 'lunch', component: LunchComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
