import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { OrderListComponent } from "./order-list/order-list.component";


const routes: Routes = [{
  path: '',component: HomeComponent,
  children: [
    { path: 'orders-list', component: OrderListComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
