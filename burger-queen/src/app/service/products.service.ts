import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient ) { }
    private apiurl: string = 'http://localhost:8080/products';



    getProduct(): Observable<any> {

      const httpOptions = {
        headers: new HttpHeaders({
          // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        }),
      };
      return this.http.get<any>(this.apiurl, httpOptions)
    }
  }
  
/*
{
      "id": 1214,
      "name": "Sandwich de jamón y queso",
      "price": 1000,
      "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
      "type": "Desayuno",
      "dateEntry": "2022-03-05 15:14:10"
    }
  */