import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CursoService } from 'src/app/Service/curso.service';
import { Calificacion } from '../../../../Modelo/Calificacion';

@Component({
  selector: 'app-add-calificacion',
  templateUrl: './add-calificacion.component.html',
  styleUrls: ['./add-calificacion.component.css']
})
export class AddCalificacionComponent implements OnInit {

  
  calificacion: Calificacion = new Calificacion();
  cursoId: number;
  cedula: string;
  facultadId: number;
  nota: number;
  comentario: string;
  isTarea: boolean;
  tareaId: number;

  constructor(private service: CursoService,private dialog: MatDialog,  private fb: FormBuilder, private dialogRef: MatDialogRef<AddCalificacionComponent>,@Inject(MAT_DIALOG_DATA) data) {
    //this.cursoId = JSON.parse(data.curso).id;
    this.calificacion.cursoId = data.cursoId;
    this.facultadId = data.facultadId;
    this.calificacion.cedula = data.cedula;
    this.calificacion.facultadId = data.facultadId;
    this.calificacion.cursoId = data.cursoId;

    this.isTarea = data.isTarea;
    this.tareaId = data.tareaId;
    
    this.calificacion.nombre = data.nombre;
    this.calificacion.apellido = data.apellido;
  }

  califacionForm = this.fb.group({
    nota: ["", Validators.required],
    comentario: [""],
    confirmar: [""]
  });

  ngOnInit(): void {
    
  }

  calificarTarea(nota:number){
    this.service.addNotaTarea(this.tareaId,nota).subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha calificado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
     }) 
  }

  GuardarCalifcacion(nota: number, comentario: string){
    this.calificacion.comentario = comentario;
    this.calificacion.nota = nota; 

    this.service.addCalificacion(this.calificacion).subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha calificado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
     })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}



