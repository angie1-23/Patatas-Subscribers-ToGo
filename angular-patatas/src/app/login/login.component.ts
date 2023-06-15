import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribersService } from '../subscribers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public subscribersService: SubscribersService,
    private router: Router

  ) { }

  public formLogin!: FormGroup;
  reponse: string[] = []
  public token: string = ""

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      UserName: ['', [Validators.required], Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  send() {
    const value = this.formLogin.value
    console.log(value)
    this.subscribersService.postLoginService(value)
      .subscribe(respuesta => {
        this.token = respuesta.Token
        localStorage.setItem('Token', this.token);
        console.log(this.token)
        this.reponse = respuesta;
        console.log('Aqui', respuesta)
      }
      )

    this.router.navigate(['home'])
  }



}
