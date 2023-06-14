import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HomeResponse, InformationSubs} from './information-subs';



@Injectable({
  providedIn: 'root'
})

export class SubscribersService {

  urlBase = 'https://lab.app.invertebrado.co/api/account/login'
  urlBaseGet='https://lab.app.invertebrado.co/api/subscribers/'
  token = localStorage.getItem('Token');

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    })
  };
  constructor( private http: HttpClient) { }


  postLoginService(value:any): Observable<any> {
    return this.http.post<any>(this.urlBase,value);
  }

  getSubscribersService(): Observable<HomeResponse> {
    return this.http.get<HomeResponse>(this.urlBaseGet, this.httpOptions);
  }

}
