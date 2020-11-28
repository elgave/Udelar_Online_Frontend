import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/Service/curso.service';
import { Calendario } from '../../../../Modelo/Calendario';
import { AddSeccionComponent } from '../seccion/add-seccion/add-seccion.component';

@Component({
  selector: 'app-list-calendario',
  templateUrl: './list-calendario.component.html',
  styleUrls: ['./list-calendario.component.css']
})
export class ListCalendarioComponent implements OnInit {

  
  calendario: Calendario;
  calendarioId: number;
  fecha: string;
  id: number;
  //facultadId: number;
  


  constructor(private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionComponent>, @Inject(MAT_DIALOG_DATA) data,) {
    this.calendarioId = data.componente.calendario.id;
   }

   //@Output() recargar = new EventEmitter();

  ngOnInit(): void {
    
    

    this.refresh();
    
  }

 /* calificar(cedula: string, nombre: string, apellido: string) {
    this.dialog.open(AddCalificacionComponent, {
      width: '640px',
      height: '350px', 
      data: { cedula: cedula,cursoId: this.cursoId, facultadId: this.facultadId, nombre: nombre, apellido: apellido},
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }*/



  Cerrar() {
    this.dialogRef.close();
  }
  refresh(){
  this.cs.getCalendario(this.calendarioId).subscribe((resp) => this.calendario = resp.data);
  }
}

