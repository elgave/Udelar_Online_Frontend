import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgregarUsuarioComponent } from '../../usuarios/agregar-usuario/agregar-usuario.component';
import { AgregarCursoComponent } from '../curso/editar/add-curso/add-curso.component';
import { AddEncuestaComponent } from '../encuesta/add-encuesta/add-encuesta.component';
import { ListEncuestaComponent } from '../encuesta/list-encuesta/list-encuesta.component';
import { AddSeccionTemplateComponent } from './add-seccion-template/add-seccion-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { CambiarColorComponent } from './cambiar-color/cambiar-color.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { InfoCursosComponent } from './info-cursos/info-cursos.component';
import { ListSeccionTemplateComponent } from './list-seccion-template/list-seccion-template.component';
import { ListTemplateComponent } from './list-template/list-template.component';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  facultad: string;
  facultadId: number;
  facultadColor: string;
  facultadUrl: string;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<AdminMenuComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.facultadId = data.facultadId;
    this.facultad = data.facultad;
    this.facultadColor = data.facultadColor;
    this.facultadUrl = data.facultadUrl;
  }

  ngOnInit(): void {
  }

  configColor() {
    this.dialog.open(CambiarColorComponent, {
      width: '540px',
      height: '230px',
      data: { facultadId: this.facultadId, facultad: this.facultad, color: this.facultadColor }
    });
  }

  addCurso() {
    this.dialog.open(AgregarCursoComponent, {
      width: '540px',
      height: '430px',
      data: { facultadId: this.facultadId, facultad: this.facultad }
    });
  }

  addAdmin() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '270px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'administrador', add: true }
    });
  }

  addDocente() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '270px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'docente', add: true }
    });
  }

  removeAdmin() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '270px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'administrador', add: false }
    });
  }

  removeDocente() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '270px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'docente', add: false }
    });
  }

  addEncuesta() {
    this.dialog.open(AddEncuestaComponent, {
      width: '540px',
      maxHeight: '600px'
    });
  }
  
  listEncuesta() {
    this.dialog.open(ListEncuestaComponent, {
      width: '600px',
      maxHeight: '600px'
    });
  }

  infoCursos() {
    this.dialog.open(InfoCursosComponent, {
      width: '700px',
      maxHeight: '600px',
      data: { facultadId: this.facultadId, facultad: this.facultad }
    });
  }

  estadisticaCursos() {
    this.dialog.open(EstadisticaComponent, {
      width: '700px',
      maxHeight: '600px',
      data: { facultadId: this.facultadId, facultad: this.facultad }
    });
  }

  addTemplate() {
    this.dialog.open(AddTemplateComponent, {
      width: '540px',
      maxHeight: '600px'
    });
  }

  addSeccionTemplate() {
    this.dialog.open(AddSeccionTemplateComponent, {
      width: '540px',
      maxHeight: '600px'
    });
  }

  listTemplate() {
    this.dialog.open(ListTemplateComponent, {
      width: '700px',
      maxHeight: '600px'
    });
  }

  listSeccionTemplate() {
    this.dialog.open(ListSeccionTemplateComponent, {
      width: '700px',
      maxHeight: '600px'
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
