import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgregarUsuarioComponent } from '../../usuarios/agregar-usuario/agregar-usuario.component';
import { AgregarCursoComponent } from '../curso/editar/add-curso/add-curso.component';
import { AddEncuestaComponent } from '../encuesta/add-encuesta/add-encuesta.component';
import { ListEncuestaComponent } from '../encuesta/list-encuesta/list-encuesta.component';
import { CambiarColorComponent } from './cambiar-color/cambiar-color.component';

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
      height: '200px',
      data: { facultadId: this.facultadId, facultad: this.facultad, color: this.facultadColor }
    });
  }

  addCurso() {
    this.dialog.open(AgregarCursoComponent, {
      width: '540px',
      height: '350px',
      data: { facultadId: this.facultadId, facultad: this.facultad }
    });
  }

  addAdmin() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '250px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'administrador', add: true }
    });
  }

  addDocente() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '250px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'docente', add: true }
    });
  }

  removeAdmin() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '250px',
      data: { facultadId: this.facultadId, facultad: this.facultad, rol: 'administrador', add: false }
    });
  }

  removeDocente() {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '540px',
      height: '250px',
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

  publicarEncuesta() {
    
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
