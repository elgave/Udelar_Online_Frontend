import { Component, OnInit } from '@angular/core';
import { UsuarioXFacultad } from 'src/app/Modelo/UsuarioXFacultad';
import { ServiceService } from 'src/app/Service/service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-usuarios-xfacultad-reporte',
  templateUrl: './usuarios-xfacultad-reporte.component.html',
  styleUrls: ['./usuarios-xfacultad-reporte.component.css']
})
export class UsuariosXFacultadReporteComponent implements OnInit {

  usuariosXFacultad:UsuarioXFacultad[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getUsuariosXFacultad()
    .subscribe(data=>{
      this.usuariosXFacultad=data;
    })
  }

}
