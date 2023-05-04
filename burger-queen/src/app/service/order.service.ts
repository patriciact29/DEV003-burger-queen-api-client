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

  createOrder(): Observable<Order[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };

    return this.http.post<Order[]>(this.apiurl, httpOptions)
    }

    getOrders(): Observable<Order[]> {

      const httpOptions = {
        headers: new HttpHeaders({
          // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        }),
      };

      return this.http.get<Order[]>(this.apiurl, httpOptions)
      }



}
