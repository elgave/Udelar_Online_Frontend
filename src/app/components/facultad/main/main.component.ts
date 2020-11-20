import { FacultadService } from 'src/app/Service/facultad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import * as env from 'src/env';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import { ViewportScroller } from '@angular/common';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { Comunicado } from 'src/app/Modelo/Comunicado';
import { MisNotasComponent } from '../mis-notas/mis-notas.component';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainFacultadComponent implements OnInit {
  currentEnv = env;
  cedula: string;
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  curso: Curso;
  ready: boolean;
  property: string;
  cursoId: number;
  mostrarCursos: Curso[];
  isMisCursos: boolean;
  botonTexto: string;
  textColor: string;
  mainColor: string;
  facultadNombre: string;
  comunicados: Comunicado[];

  constructor(private router: Router, private route: ActivatedRoute, private fs: FacultadService, private scroll: ViewportScroller, private dialog: MatDialog) { }  

  ngOnInit(): void {
    this.cedula = sessionStorage.getItem('cedula');
    this.facultadNombre = sessionStorage.getItem('facultadNombre');
    this.isMisCursos = false;
    this.botonTexto = "Mis cursos";
    this.ready = false;
    if (!sessionStorage.getItem('rol') || !sessionStorage.getItem('token')) this.router.navigateByUrl(`login/${this.fUrl}`);
    this.loadFacultad();
    this.rol = sessionStorage.getItem('rol');
    
  }

  loadFacultad() {
    this.fs.getFacultadId(parseInt(sessionStorage.getItem('facultadId'))).subscribe(data => {
      this.facultad = data.data;
      this.facultad.cursos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.mostrarCursos = this.facultad.cursos;
      this.rol = sessionStorage.getItem('rol');
      this.mainColor = this.facultad.color;
      this.textColor = this.getLightness(this.mainColor) ? 'black':'white';
      if (this.rol == 'docente') {
        this.mostrarCursos = this.facultad.cursos.filter(c => c.docentes.find(d => d.cedula == sessionStorage.getItem('cedula')));
      }
      if (this.route.snapshot.paramMap.get('cursoId')) {
        this.isCurso = true;
      } else {
        this.isCurso = false;
      }

      this.ready = true;
    });
  }

  change(cursoId) {
    this.cursoId = cursoId;
    this.scroll.scrollToPosition([0,0]);
  }

  toggleCursos() {
    this.isMisCursos = !this.isMisCursos;
    if (this.isMisCursos) {
      this.botonTexto = "Todos los cursos";
      this.mostrarCursos = this.facultad.cursos.filter(c => c.usuarios.some(u => u.cedula == sessionStorage.getItem('cedula')));
    }
    else {
      this.botonTexto = "Mis cursos";
      this.mostrarCursos = this.facultad.cursos;
    }
  }

  gestion() {
    let dialogRef = this.dialog.open(AdminMenuComponent, {
      width: '1080px',
      height: '90%',
      data: { facultadId: this.facultad.id, facultad: this.facultad.nombre, facultadColor: this.facultad.color, facultadUrl: this.facultad.url }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadFacultad();
    });
  }

  misCalifiaciones(cedula: string, facultad: Facultad) {
    this.dialog.open(MisNotasComponent, {
      width: '600px',
      maxHeight: '600px',
      data: { facultadId: facultad.id, cedula: cedula }
    });
  }

  home() {
    this.router.navigateByUrl(`/facultad/${this.fUrl}`);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  getLightness(hexCode){
    hexCode = hexCode.substr(1,6);
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
}