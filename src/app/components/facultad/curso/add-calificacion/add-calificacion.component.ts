import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private service: CursoService,  private fb: FormBuilder, private dialogRef: MatDialogRef<AddCalificacionComponent>,@Inject(MAT_DIALOG_DATA) data) {
    //this.cursoId = JSON.parse(data.curso).id;
    this.calificacion.cursoId = data.cursoId;
    this.facultadId = data.facultadId;
    this.calificacion.cedula = data.cedula;
    this.calificacion.facultadId = data.facultadId;
    this.calificacion.cursoId = data.cursoId;
       
    
    this.calificacion.nombre = data.nombre;
    this.calificacion.apellido = data.apellido;
  }

  califacionForm = this.fb.group({
    nota: ["", Validators.required],
    comentario: ["", Validators.required],
    confirmar: [""]
  });

  ngOnInit(): void {
  }


  GuardarCalifcacion(nota: number, comentario: string){
    
    this.calificacion.comentario = comentario;
    this.calificacion.nota = nota; 

    this.service.addCalificacion(this.calificacion).subscribe(data=>{
      alert("Se ha calificado con éxito.");
      this.Cerrar();
     })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}


