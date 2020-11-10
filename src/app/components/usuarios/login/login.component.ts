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
    if (sessionStorage.getItem('token')) this.router.navigateByUrl(`facultad/${sessionStorage.getItem('facultadUrl')}`);
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
    
    this.us.login(this.usuarioLogin)
      .subscribe(res => {
        if (res.data != null) {
          const token  = res.data;
          if (token != null) {
            console.log('token', token);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('facultadUrl', this.fUrl);
            sessionStorage.setItem('facultadNombre', this.facultad.nombre);
            sessionStorage.setItem('facultadId', this.facultad.id.toString());
            this.rol = this.formLogin.value.rol;
            sessionStorage.setItem('cedula', this.usuarioLogin.cedula);
            sessionStorage.setItem('rol', this.rol);
            sessionStorage.setItem('mainColor', this.facultad.color);
            sessionStorage.setItem('lightness', this.getLighness(this.facultad.color.substr(1,6)) ? 'light' : 'dark');
            this.router.navigateByUrl(`facultad/${this.fUrl}`);
          }
        } else {
          this.formLogin.controls['password'].setErrors({'incorrect': true});
        }
      }, err => {
        console.log('Error en el login', err); 
      });
  }

  getLighness(hexCode){
    var rgb = hexCode.split(/(?=(?:..)*$)/);
    let r = parseInt(rgb[0], 16);
    let g = parseInt(rgb[1], 16);
    let b = parseInt(rgb[2], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    //return [h, s, l];
    if (l > 0.6) return true; else return false;
  }

  ngOnDestroy() {}
}