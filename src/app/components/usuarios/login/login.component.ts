import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';
import { LoginUser } from 'src/app/Modelo/LoginUser';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FacultadService } from 'src/app/Service/facultad.service';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy{
  formLogin: FormGroup;
  usuarioLogin: LoginUser = new LoginUser();
  usuario: Usuario = null;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  facultad: Facultad = null;
  rol: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private fs: FacultadService,
    private us: UsuarioService,
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
    if (sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'usuario') this.router.navigateByUrl(`facultad/${sessionStorage.getItem('facultadUrl')}`);
    this.fs.getFacultades()
      .subscribe(r => {
        this.facultad = r.data.find(f => f.url == this.fUrl);
      });
  }

  loadUser() {
    this.us.getUsuarioId(this.formLogin.value.cedula, this.facultad.id)
      .subscribe(r => {
        if (r.data != null) {
          this.usuario = r.data;
        } else {
          this.formLogin.controls['cedula'].setErrors({'incorrect': true});
        }
      });
  }

  Login() {
    this.usuarioLogin.cedula = this.formLogin.value.cedula;
    this.usuarioLogin.password = this.formLogin.value.password;
    this.usuarioLogin.facultadid = this.facultad.id;
    this.usuarioLogin.rol = this.formLogin.value.rol;
    
    this.us.login(this.usuarioLogin)
      .subscribe(res => {
        if (res.data != null) {
          const token  = res.data;
          if (token != null) {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('tipoSesion', 'usuario');
            sessionStorage.setItem('facultadUrl', this.fUrl);
            sessionStorage.setItem('facultadNombre', this.facultad.nombre);
            sessionStorage.setItem('facultadId', this.facultad.id.toString());
            this.rol = this.formLogin.value.rol;
            sessionStorage.setItem('cedula', this.usuarioLogin.cedula);
            sessionStorage.setItem('rol', this.rol);
            sessionStorage.setItem('mainColor', this.facultad.color);
            this.router.navigateByUrl(`facultad/${this.fUrl}`);
          }
        } else {
          this.formLogin.controls['password'].setErrors({'incorrect': true});
        }
      }, err => {
        console.log('Error en el login', err); 
      });
  }
  ngOnDestroy() {}
}