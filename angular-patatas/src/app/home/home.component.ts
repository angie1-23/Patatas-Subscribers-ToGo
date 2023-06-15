import { Component, OnInit,Input } from '@angular/core';
import { SubscribersService } from '../subscribers.service';
import { HomeResponse, InformationSubs,SubscribersB,Subscriber} from '../information-subs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public listSubs: InformationSubs[] = [];
  // @Input() listSubs: InformationSubs[]  = [];
  usersArr: SubscribersB

  listaUsers: SubscribersB | null = null
  modal: boolean = false
  currentUser: Subscriber| null = null
 

  addUserForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    CountryCode: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
  })
 

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

  onShowModal(user:Subscriber | null) {
    this.currentUser = user
  }

  //Add new subscribers and udpdate//
  userAdd() {

    this.usersArr = this.addUserForm.value;


    // let USERS: Subscribers = {
    //   Name: value.Name,
    //   Email: value.Email,
    //   CountryCode: value.CountryCode,
    //   PhoneNumber:value.PhoneNumber,
    // }

    // let subscribers 

    // console.log(USERS)
  

    // console.log('aqui estoy',this.usersArr)
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
    this.subscribersService.postSubscribersService( this.person).subscribe(
        data => {
          this.listSubs.push(data);
          console.log(data)
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



