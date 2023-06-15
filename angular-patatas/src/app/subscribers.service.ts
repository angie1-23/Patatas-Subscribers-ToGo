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

  private urlBase = 'https://lab.app.invertebrado.co/api/account/login'
  private urlBaseGet='https://lab.app.invertebrado.co/api/subscribers/'
  token = localStorage.getItem('Token');
  log: any;

  constructor( 
    private http: HttpClient
    
    // private messageService: MessageService
    ) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  


  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    })
  };

  postLoginService(value:any): Observable<any> {
    return this.http.post<any>(this.urlBase,value);
  }

  getSubscribersService(): Observable<HomeResponse>{
    // console.log(this.token)
    return this.http.get<HomeResponse>(this.urlBaseGet, this.httpOptions); 
    
  }
 
  searchSubscribers(term: string): Observable<InformationSubs[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<InformationSubs[]>(`${this.urlBaseGet}/?criteria=${term}`,this.httpOptions)
    // pipe(
    //   tap(x => x.length ?
    //      this.log(`found heroes matching "${term}"`) :
    //     this.log(`no heroes matching "${term}"`)),
    //   // catchError(this.handleError<any[]>('searchHeroes', []))
    // );
  

}

}
