import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  formLogin: FormGroup;


  constructor(
    private  router: Router,
    private  builder: FormBuilder,
    private  auth: AuthService) {

    this.formLogin = this.builder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  login(){
    const val = this.formLogin.value;
    this.auth.login(val.user, val.password).subscribe((data) => {
      console.log(data);
    });
  }
}