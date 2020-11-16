import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Usuario } from 'src/app/Modelo/Usuario';
import { FacultadService } from 'src/app/Service/facultad.service';

@Component({
  selector: 'app-est-facultades',
  templateUrl: './est-facultades.component.html',
  styleUrls: ['./est-facultades.component.css']
})

export class ReporteEstFacultades implements OnInit {
  facultades:Array<Facultad>;
  ready:boolean;

  constructor(private fs: FacultadService, private router:Router) { }

  count(usuarios:Array<Usuario>, rol:string) {
    return usuarios.filter(u => u.roles.find(r => r.descripcion == rol)).length;
  }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.ready = false;
    this.fs.getFacultades().subscribe(r => {
      this.facultades = r.data;
      this.ready = true;
    });
  }
}
