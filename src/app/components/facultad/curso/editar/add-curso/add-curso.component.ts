import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FormBuilder, Validators } from '@angular/forms';
import { CursoService } from 'src/app/Service/curso.service';
import { Curso } from 'src/app/Modelo/Curso';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  facultadId:number;
  facultad:string;
  curso:Curso = new Curso();
  
  constructor(private service: CursoService,  private fb: FormBuilder, private fs: FacultadService, private dialogRef: MatDialogRef<AgregarCursoComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.curso.facultadId = data.facultadId;
    this.facultad = data.facultad;
  }

  cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    creditos: ["", Validators.required],
    confirmar: ["", Validators.required]
  });
 
  ngOnInit(): void {

  }

  Guardar(curso:Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString());
    curso.facultadId = parseInt(curso.facultadId.toString());
    this.service.createCurso(this.curso)
    .subscribe(data=>{
      alert("Se Agrego con éxito.");
      this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
