import { Injectable,Output,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { HomeResponse, InformationSubs, SubscribersB} from './information-subs';
// import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class SubscribersService {

  private urlBase = 'https://lab.app.invertebrado.co/api/account/login'
  private urlBaseGet='https://lab.app.invertebrado.co/api/subscribers/'
  token = localStorage.getItem('Token');
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor( 
    private http: HttpClient
    ) { }

// Headers and token 
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

  //--- Add subcribers ----//

  postSubscribersService(user:SubscribersB): Observable<any> {
    return this.http.post<SubscribersB>(this.urlBaseGet, user,this.httpOptions);
  }

  // updateSubscribersService(id: any, updateUsers: Subscribers):Observable<Subscribers> {
  //   const urlPatch = `${this.urlBaseGet}/${id}`;   // PATCH api/heroes/42
  //   return this.http.patch<Subscribers>(urlPatch, updateUsers, this.httpOptions);
  // }
 
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
