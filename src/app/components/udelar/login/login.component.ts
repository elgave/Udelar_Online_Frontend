import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Facultad } from 'src/app/Modelo/Facultad';
import { LoginUser } from 'src/app/Modelo/LoginUser';
import { Response } from 'src/app/Modelo/Response';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AdminLoginComponent implements OnInit, OnDestroy{
  formLogin: FormGroup;
  subRef$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:  Router,
  ) {

    this.formLogin = formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('admintoken')) this.router.navigateByUrl('gestion');
  }

  Login() {
    let usuarioLogin = { id: this.formLogin.value.id, password: this.formLogin.value.password }    
    this.subRef$ = this.http.post<Response<string>>('http://localhost:54403/api/udelaradmin/login', usuarioLogin)
      .subscribe(res => {
        if (res.data != null) {
          sessionStorage.setItem('admintoken', res.data);
          this.router.navigateByUrl(`gestion`);
        } else {
          this.formLogin.controls['password'].setErrors({'incorrect': true});
        }
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