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
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy{
  formLogin: FormGroup;
  usuarioLogin: LoginUser = new LoginUser();
  usuario: Usuario = null;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  facultad: Facultad = null;
  rol: string = null;

  subRef$: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:  Router,
    private route: ActivatedRoute
  ) {
    this.formLogin = formBuilder.group({
      cedula: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('token')) this.router.navigateByUrl(`facultad/${sessionStorage.getItem('facultadUrl')}`)
    this.sub2 = this.http.get<Response<Array<Facultad>>>('http://localhost:54403/api/facultad')
      .subscribe(r => {
        this.facultad = r.data.find(f => f.url = this.fUrl);
      });
  }

  loadUser() {
    this.sub3 = this.http.get<Response<Usuario>>(`http://localhost:54403/api/usuario/${this.formLogin.value.cedula}/${this.facultad.id}`)
      .subscribe(r => {
        if (r.data != null) this.usuario = r.data;
      });
  }

  Login() {
    this.usuarioLogin.cedula = this.formLogin.value.cedula;
    this.usuarioLogin.password = this.formLogin.value.password;
    this.usuarioLogin.facultadid = this.facultad.id;
    
    this.subRef$ = this.http.post<Response<string>>('http://localhost:54403/api/usuario/login', this.usuarioLogin)
      .subscribe(res => {
        if (res.data != null) {
          const token  = res.data;
          if (token != null) {
            console.log('token', token);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('facultadUrl', this.fUrl);
            sessionStorage.setItem('facultadId', this.facultad.id.toString());
            this.rol = this.formLogin.value.rol;
            sessionStorage.setItem('rol', this.rol);
            this.router.navigateByUrl(`facultad/${this.fUrl}`);
            console.log(this.rol);
            console.log(this.rol);
            console.log(this.rol);
            console.log(this.rol);
            console.log(this.rol);
            console.log(this.rol);
            console.log(this.rol);
            //! sessionStorage.setItem('rol', rol.descripcion)
            // switch (rol.descripcion) {
            //   case 'administrador':
            //     this.router.navigate(["adminHome"]);
            //   break;
            //   case 'docente':
            //     this.router.navigate(["docenteHome"]);
            //   break;
            //   case 'estudiante':
            //     this.router.navigate(["estudianteHome"]);
            //   break;
            // }
          }
        }
      }, err => {
        console.log('Error en el login', err); 
      });
  }

  ngOnDestroy(){
    if (this.subRef$){
      this.subRef$.unsubscribe(); 
      this.sub2.unsubscribe();
      this.sub3.unsubscribe();
    }
  }
}