import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SubscribersService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'Bearer jwttoken',
  //     Authorization: `Bearer ${this.accessToken}`,
  //   })
  // };
   urlBase = 'https://lab.app.invertebrado.co/api/account/login'

  constructor( private http: HttpClient) { }


  postLoginService(value:any): Observable<any> {
    return this.http.post<any>(this.urlBase,value);
  }
}
