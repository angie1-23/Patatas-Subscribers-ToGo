import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HomeResponse, InformationSubs} from './information-subs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class SubscribersService {

  urlBase = 'https://lab.app.invertebrado.co/api/account/login'
  urlBaseGet='https://lab.app.invertebrado.co/api/subscribers/'
  token = localStorage.getItem('Token');
  log: any;

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    })
  };

  postLoginService(value:any): Observable<any> {
    return this.http.post<any>(this.urlBase,value);
  }

  getSubscribersService(): Observable<HomeResponse> {
    // console.log(this.token)
    return this.http.get<HomeResponse>(this.urlBaseGet, this.httpOptions);
  }

  searchHeroes(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any[]>(`${this.urlBaseGet}/?criteria=${term}`,this.httpOptions).pipe(
      tap(x => x.length ?
         console.log(`found heroes matching "${term}"`) :
         console.log(`no heroes matching "${term}"`)),
      // catchError(this.handleError<any[]>('searchHeroes', []))
    );
  

}

}
