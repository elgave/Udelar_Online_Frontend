import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AdminLoginComponent implements OnInit, OnDestroy{
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:  Router,
    private us: UsuarioService
  ) {

    this.formLogin = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar') this.router.navigateByUrl('gestion');
  }

  Login() {
    let usuarioLogin = { id: this.formLogin.value.id, password: this.formLogin.value.password };
    this.us.adminLogin(usuarioLogin)
      .subscribe(res => {
        if (res.data != null) {
          sessionStorage.setItem('token', res.data);
          sessionStorage.setItem('tipoSesion', 'udelar');
          this.router.navigateByUrl(`gestion`);
        } else {
          this.formLogin.controls['password'].setErrors({'incorrect': true});
        }
      }, err => {
        console.log('Error en el login', err); 
      });
  }

  ngOnDestroy(){
  }
}