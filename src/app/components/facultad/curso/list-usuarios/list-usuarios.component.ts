import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matricula } from 'src/app/Modelo/Matricula';
import { Usuario } from 'src/app/Modelo/Usuario';
import { CursoService } from 'src/app/Service/curso.service';
import { Calificacion } from '../../../../Modelo/Calificacion';
import { AddCalificacionComponent } from '../add-calificacion/add-calificacion.component';
import { MatDialog } from '@angular/material/dialog';
import { Output } from '@angular/core';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuarios: Usuario[];
  cursoId: number;
  facultadId: number;
 // calificaciones: Calificacion[];
  calificacion: Calificacion[];
  nombre: string;
  apellido: string;


  constructor(private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<ListUsuariosComponent>, @Inject(MAT_DIALOG_DATA) data,) {
    this.cursoId = JSON.parse(data.curso).id;
    this.facultadId = JSON.parse(data.curso).facultadId;
   }

   @Output() recargar = new EventEmitter();

  ngOnInit(): void {
    /*this.cs.getCursoId(this.cursoId).subscribe(r => {
      this.usuarios = r.data.usuarios;
      this.facultadId = r.data.facultadId;
    });*/
    

    this.refresh();
    
  }

  calificar(cedula: string, nombre: string, apellido: string) {
    this.dialog.open(AddCalificacionComponent, {
      width: '640px',
      height: '350px', 
      data: { cedula: cedula,cursoId: this.cursoId, facultadId: this.facultadId, nombre: nombre, apellido: apellido},
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  baja(cedula: string) {
    let matricula = new Matricula();
    matricula.cedula = cedula;
    matricula.idCurso = this.cursoId;
    matricula.idFacultad = this.facultadId;
    this.cs.bajaMatricula(matricula)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: data.success }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
  refresh(){
  this.cs.getCalificacionId(this.cursoId).subscribe((resp) => this.calificacion = resp.data);
  }
}

