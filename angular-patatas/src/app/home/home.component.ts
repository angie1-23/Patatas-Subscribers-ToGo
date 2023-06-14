import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../subscribers.service';
import { HomeResponse, InformationSubs } from '../information-subs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public listSubs: InformationSubs[] = [];

  constructor( 
    public subscribersService:SubscribersService){
  }

  // ngOnInit(): void {
  //   this.getOrdersM()
  // }

  ngOnInit() {
    this.subscribersService.getSubscribersService().subscribe({
      next: (data:HomeResponse) => {
        this.listSubs = data.Data;
      },
      error: (err) => {
        this.listSubs = [];
      },
    });
  }


}

