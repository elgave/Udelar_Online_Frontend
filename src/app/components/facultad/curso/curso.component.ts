import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/Service/curso.service'
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import * as env from 'src/env';
import { MatDialog } from "@angular/material/dialog";
import { AddSeccionComponent } from './seccion/add-seccion/add-seccion.component';
import { AddComponenteComponent } from './componente/add-componente/add-componente.component';

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
  }

  loadCurso() {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
      this.curso.secciones.forEach(s => {
        s.componentes.sort((a, b) => a.indice > b.indice ? 1 : -1);
      })
      this.isDocente = this.curso.docentes.find(u => u.cedula == sessionStorage.getItem('cedula')) != null;
    }); 
  }

  ngOnChanges() {
    this.loadCurso();
  }

  editCurso() {

  }

  addSeccion() {
    let dialogRef = this.dialog.open(AddSeccionComponent, {
      width: '540px',
      height: '380px',
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
