import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribersService } from '../subscribers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!:FormGroup;
  reponse:string[]=[]
  

  constructor(
    private formBuilder: FormBuilder,
    public subscribersService:SubscribersService,

  ) {}

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      UserName:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  send(){
    const value=this.formLogin.value
    console.log(value)
    this.subscribersService.postLoginService(value)
      .subscribe(respuesta => {
        console.log(respuesta)

        this.reponse = respuesta;
        console.log('Aqui', respuesta)
      })
  }



}
