import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './home/order-list/order-list.component';

const routes :Routes=[
  {path:'', component: LoginComponent,pathMatch: "full"},//crear objeto por cada ruta
  {path:'home', canActivate: [AuthGuard], component:HomeComponent, pathMatch: "full"},
  {path:'menu', component: MenuComponent, pathMatch: "full"},
  {path:'orders', component:OrderListComponent, pathMatch: "full"}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
