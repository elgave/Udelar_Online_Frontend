import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matricula } from 'src/app/Modelo/Matricula';
import { Usuario } from 'src/app/Modelo/Usuario';
import { CursoService } from 'src/app/Service/curso.service';
import { Calificacion } from '../../../../Modelo/Calificacion';
import { AddCalificacionComponent } from '../add-calificacion/add-calificacion.component';
import { MatDialog } from '@angular/material/dialog';
import { Output } from '@angular/core';

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
  calificacion: Calificacion;
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
    console.log(matricula);
    this.cs.bajaMatricula(matricula)
    .subscribe(data=>{
      alert("Se ha dado de baja con éxito.");
      this.Cerrar();
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
  refresh(){
  this.cs.getCalificacionId(this.cursoId).subscribe
    ((resp :any) => this.calificacion = resp.data);
  }
}

