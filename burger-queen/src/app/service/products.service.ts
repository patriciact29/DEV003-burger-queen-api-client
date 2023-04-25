import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

interface Products {
  _id: string,
  name: string,
  price: number,
  image: URL,
  type: string,
  dateEntry: Date,
};

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
    constructor(private http: HttpClient ) { }
    private apiurl: string = 'http://localhost:8080/products';

    getProduct(): Observable<Products[]> {

      const httpOptions = {
        headers: new HttpHeaders({
          // Authorization es una propiedad, con el valor del token que reicibimos al iniciar sesión en el login
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        }),
      };
      //public get(apiurl: string){

      return this.http.get<Products[]>(this.apiurl, httpOptions)
      }
    }
  //};

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
