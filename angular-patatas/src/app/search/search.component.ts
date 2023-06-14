import { Component, OnInit} from '@angular/core';
import { SubscribersService } from '../subscribers.service';
import { Observable, Subject } from 'rxjs';
import { HomeResponse, InformationSubs } from '../information-subs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor( 
    public subscribersService:SubscribersService){
  }
  subscribers$: Observable<InformationSubs[]> | undefined;
  private searchTerms = new Subject<string>();


  search(term: string): void {
    this.subscribersService.searchHeroes(term).subscribe(respuesta=>
       console.log(respuesta)
    );
  }

  ngOnInit(): void {
    this.subscribers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.subscribersService.searchHeroes(term)),
    );
  }


}
