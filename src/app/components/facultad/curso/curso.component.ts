import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/Service/curso.service'
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
import { Matricula } from 'src/app/Modelo/Matricula';
import { AddDocenteComponent } from './editar/add-docente/add-docente.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { ResponderEncuestaComponent } from '../encuesta/responder-encuesta/responder-encuesta.component';
import { AddEncuestaComponent } from '../encuesta/add-encuesta/add-encuesta.component';
import { RespuestasEncuestaComponent } from '../encuesta/respuestas-encuesta/respuestas-encuesta.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  isDocente: boolean;
  isAdmin: boolean;
  isEstudiante: boolean;
  isMatriculado: boolean;
  curso: Curso;

  @Input() cursoId: number;
  currentEnv = env;
  constructor(private router: Router, private route: ActivatedRoute, private cs: CursoService, private dialog: MatDialog) { }  

  ngOnInit(): void {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.isMatriculado = this.curso.usuarios.some(u => u.cedula == sessionStorage.getItem('cedula'));
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
      this.curso.secciones.forEach(s => {
        s.componentes.sort((a, b) => a.indice > b.indice ? 1 : -1);
      })
    });
    this.isAdmin = sessionStorage.getItem('rol') == 'administrador';
    this.isEstudiante = sessionStorage.getItem('rol') == 'estudiante';
  }

  loadCurso() {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.isMatriculado = this.curso.usuarios.some(u => u.cedula == sessionStorage.getItem('cedula'));
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
      maxHeight: '350px',
      data: { cursoId: cursoId, cursoNombre: cursoNombre, confirmaBedelia: this.curso.confirmaBedelia, creditos: this.curso.cantCreditos, isAdmin: this.isAdmin }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  editSeccion(seccionId: string, seccionNombre: string, indice: number) {
    let dialogRef = this.dialog.open(EditSeccionComponent, {
      width: '540px',
      maxHeight: '350px',
      data: { seccionId: seccionId, seccionNombre: seccionNombre, seccionIndice: indice }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  editComponente(componenteId: string, componenteNombre: string, indice: number) {
    let dialogRef = this.dialog.open(EditComponenteComponent, {
      width: '540px',
      maxHeight: '350px',
      data: { componenteId: componenteId, componenteNombre: componenteNombre, componenteIndice: indice }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  responderencuesta(encuestaId: number){
    
    let dialogRef = this.dialog.open(ResponderEncuestaComponent, {
      width: '1040px',
      maxHeight: '1000px',
      data: { encuestaId: encuestaId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  verRespuestasEncuesta(encuestaId: number){
    
    let dialogRef = this.dialog.open(RespuestasEncuestaComponent, {
      width: '1040px',
      maxHeight: '1000px',
      data: { encuestaId: encuestaId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  crearEncuesta(){
    this.dialog.open(AddEncuestaComponent, {
      width: '540px',
      maxHeight: '600px'
    });
  }

  deleteSeccion(seccionId:number, seccionNombre:string) {
    let dialogRef = this.dialog.open(DeleteSeccionComponent, {
      width: '540px',
      maxHeight: '300px',
      data: { seccionId: seccionId, seccionNombre: seccionNombre, cursoNombre: this.curso.nombre }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }
 
  deleteComponente(componenteId:number, seccionNombre:string, componenteNombre:string) {
    let dialogRef = this.dialog.open(DeleteComponenteComponent, {
      width: '540px',
      maxHeight: '300px',
      data: { componenteId: componenteId, seccionNombre: seccionNombre, componenteNombre: componenteNombre }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  addSeccion() {
    let dialogRef = this.dialog.open(AddSeccionComponent, {
      width: '540px',
      maxHeight: '310px',
      data: { cursoId: this.curso.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  addComponente(seccionId: number) {
    let dialogRef = this.dialog.open(AddComponenteComponent, {
      width: '600px',
      maxHeight: '420px',
      data: { seccionId: seccionId,cursoId: this.curso.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  addDocente() {
    let dialogRef = this.dialog.open(AddDocenteComponent, {
      width: '600px',
      maxHeight: '350px',
      data: { curso: JSON.stringify(this.curso) }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  listUsuarios() {
    let dialogRef = this.dialog.open(ListUsuariosComponent, {
      width: '600px',
      maxHeight: '1080px',
      data: { curso: JSON.stringify(this.curso), facultadId: this.curso.facultadId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadCurso();
    });
  }

  eliminarCurso() {
    this.cs.deleteCurso(this.curso)
    .subscribe(data=>{
      alert("Curso eliminado con éxito.");
      this.router.navigateByUrl('/');
    })
  }

  matricularse() {
    let matricula = new Matricula();
    matricula.cedula = sessionStorage.getItem('cedula');
    matricula.idCurso = this.curso.id;
    matricula.idFacultad = this.curso.facultadId;
    this.cs.matricularse(matricula)
    .subscribe(data=>{
      if (data.result.data) {
        alert("Matriculado con éxito.");
        this.loadCurso();
      } else {
        alert(data.result.message);
      }
    })
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
