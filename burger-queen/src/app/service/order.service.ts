import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Products } from './products.service';

interface Order {
  userId: string | null;
  client: string;
  tableNum: number | null;
  products: [{
    qty: number;
    product: Products[];
  }];
  status: string;
  dataEntry: Date;
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private apiurl: string = 'http://localhost:8080/orders';

  dataOrder: any = {
    client:"",
    status:"",
    products: [],
  }

//crear lista
  orderList(dataMenu:Products): void{
    const add = {
      qty: 1,
      name: dataMenu.name,
      price: dataMenu.price,
      dataEntry:new Date().toLocaleString()

  };
    this.dataOrder.products.push(add)
    console.log(this.dataOrder)
  }
//delete
delete(product:any){
  const index = this.dataOrder.products.indexOf(product);
  this.dataOrder.products.splice(index, 1);
}
//sumar qty
  increment(dataOrder:any){
    dataOrder.qty++;
  }
//restar qty
  decrease(dataOrder:any){
    dataOrder.qty--;
    if(dataOrder.qty===0){
      this.delete(dataOrder)
    }
  }

//crear orden
  createOrder(order:any): Observable<Order[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };
    return this.http.post<Order[]>(this.apiurl, order, httpOptions)
    }

// obtener orden
    getOrders(): Observable<any> {

      const httpOptions = {
        headers: new HttpHeaders({
          // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        }),
      };

      return this.http.get<any>(this.apiurl, httpOptions)
      }
}
//comentario
