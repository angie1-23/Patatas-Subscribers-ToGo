import { Component, OnInit,Input } from '@angular/core';
import { SubscribersService } from '../subscribers.service';
import { HomeResponse, InformationSubs,SubscribersBo } from '../information-subs';
// import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public listSubs: InformationSubs[] = [];
  // @Input() listSubs: InformationSubs[]  = [];
  users: Array<SubscribersBo> = []
  listaUsers: SubscribersBo | null = null
  modal: boolean = false
  currentUser: SubscribersBo | null = null
 

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

  onShowModal(user:SubscribersBo | null) {
    this.currentUser = user
  }

  //Add new subscribers and udpdate//
  userAdd(value:any) {
    let USERS = "Subscribers":{
      

      Name: value.Name,
      Email: value.Email,
      CountryCode: value.CountryCode,
      PhoneNumber:value.PhoneNumber,
      // JobTitle?:string;
      // Area: string;
      // Topics:any[];
    }
    let usersFinal = {"Subscribers":{[USERS]}}
     

    
    console.log('aqui estoy',USERS)
    // console.log(this.currentUser);
    // if (this.currentUser) {
    //   //Edit product
    //   this.subscribersService.updateSubscribersService(this.currentUser.Id, USERS).subscribe(
    //     data => {
    //       this.subscribersService.update.emit({
    //         update: true,
    //       });
    //       this.modal = false
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // } else {
      //Creat product if id is defined
    this.subscribersService.postSubscribersService(usersFinal).subscribe(
        data => {
          this.listSubs.push(data);
          // this.subscribersService.update.emit({
          //   update: true,
          // });
         
        },
        // error => {
        //   console.log(error);
        // }
        
      );
    // }
    // this.getUsers()
  
  }
  
}



