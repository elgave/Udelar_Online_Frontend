import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoginUser } from 'src/app/Modelo/LoginUser';
import { Response } from 'src/app/Modelo/Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy{
  formLogin: FormGroup;
  usuarioLogin:LoginUser = new LoginUser();

  subRef$: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:  Router
  ) {
    this.formLogin = formBuilder.group({
      cedula: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){

  }

  Login(){
    
    this.usuarioLogin.cedula = this.formLogin.value.cedula,
    this.usuarioLogin.password = this.formLogin.value.password,

    this.subRef$ = this.http.post<Response<string>>('http://localhost:54403/api/usuario/login',
        this.usuarioLogin)
        .subscribe(res => {
          const token  = res.data;
          console.log('token', token);
          sessionStorage.setItem('token', token);
          this.router.navigate(["listarUsuarios"]);
        }, err => {
          console.log('Error en el login', err); 
        });
  }

  ngOnDestroy(){
    if (this.subRef$){
      this.subRef$.unsubscribe(); 
    }
  }
}