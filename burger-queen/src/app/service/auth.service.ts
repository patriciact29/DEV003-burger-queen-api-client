import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient ) { }

  login(user: string, password: string): Observable<any> {
    return this.http.post("http://localhost:8080", {user, password});
  }

}
