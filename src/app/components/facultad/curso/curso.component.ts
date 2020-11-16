import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/Service/curso.service'
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import * as env from 'src/env';
import { MatDialog } from "@angular/material/dialog";
import { AddSeccionComponent } from './seccion/add-seccion/add-seccion.component';
import { AddComponenteComponent } from './componente/add-componente/add-componente.component';
import { DeleteSeccionComponent } from './seccion/delete-seccion/delete-seccion.component';
import { DeleteComponenteComponent } from './componente/delete-componente/delete-componente.component';
import { EditSeccionComponent } from './seccion/edit-seccion/edit-seccion.component';
import { EditComponenteComponent } from './componente/edit-componente/edit-componente.component';
import { RenombrarCursoComponent } from './editar/renombrar-curso/renombrar-curso.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  isDocente: boolean;
  isAdmin: boolean;
  isEstudiante: boolean;
  curso: Curso;

  @Input() cursoId: number;
  currentEnv = env;
  constructor(private router: Router, private route: ActivatedRoute, private cs: CursoService, private dialog: MatDialog) { }  

  ngOnInit(): void {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
      this.curso.secciones.forEach(s => {
        s.componentes.sort((a, b) => a.indice > b.indice ? 1 : -1);
      })
    });
    this.isAdmin = sessionStorage.getItem('rol') == 'administrador'
  }

  loadCurso() {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
      this.curso.secciones.forEach(s => {
        s.componentes.sort((a, b) => a.indice > b.indice ? 1 : -1);
      })
      this.isDocente = this.curso.docentes.find(u => u.cedula == sessionStorage.getItem('cedula')) != null && sessionStorage.getItem('rol') == 'docente';
    }); 
  }

  ngOnChanges() {
    this.loadCurso();
  }

  editCurso(cursoId: number, cursoNombre: string) {
    let dialogRef = this.dialog.open(RenombrarCursoComponent, {
      width: '540px',
      height: '350px',
      data: { cursoId: cursoId, cursoNombre: cursoNombre, confirmaBedelia: this.curso.confirmaBedelia, creditos: this.curso.cantCreditos, isAdmin: this.isAdmin }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  editSeccion(seccionId: string, seccionNombre: string, indice: number) {
    let dialogRef = this.dialog.open(EditSeccionComponent, {
      width: '540px',
      height: '350px',
      data: { seccionId: seccionId, seccionNombre: seccionNombre, seccionIndice: indice }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  editComponente(componenteId: string, componenteNombre: string, indice: number) {
    let dialogRef = this.dialog.open(EditComponenteComponent, {
      width: '540px',
      height: '350px',
      data: { componenteId: componenteId, componenteNombre: componenteNombre, componenteIndice: indice }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  deleteSeccion(seccionId:number, seccionNombre:string) {
    let dialogRef = this.dialog.open(DeleteSeccionComponent, {
      width: '540px',
      height: '300px',
      data: { seccionId: seccionId, seccionNombre: seccionNombre, cursoNombre: this.curso.nombre }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }
 
  deleteComponente(componenteId:number, seccionNombre:string, componenteNombre:string) {
    let dialogRef = this.dialog.open(DeleteComponenteComponent, {
      width: '540px',
      height: '300px',
      data: { componenteId: componenteId, seccionNombre: seccionNombre, componenteNombre: componenteNombre }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  addSeccion() {
    let dialogRef = this.dialog.open(AddSeccionComponent, {
      width: '540px',
      height: '310px',
      data: { cursoId: this.curso.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  addComponente(seccionId: number) {
    let dialogRef = this.dialog.open(AddComponenteComponent, {
      width: '600px',
      height: '420px',
      data: { seccionId: seccionId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  icon(ext:string) {
    switch (ext) {
      case "zip":
      case "rar":
      case "tar":
      case "tar.gz":
      case "7z":
        return "pack.png";
      case "pdf":
        return "pdf.png";
      case "doc":
      case "docx":
      case "odt": 
        return "doc.png";
      case "ppt":
      case "pptx":
      case "odp": 
        return "ppt.png";
      case "xls":
      case "xlsx":
      case "ods": 
        return "xls.png";
      default:
        return "generic.png";
    }
  }
}
