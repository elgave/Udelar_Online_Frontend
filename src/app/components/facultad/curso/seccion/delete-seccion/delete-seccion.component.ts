import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Modelo/Curso';
import { Seccion } from 'src/app/Modelo/Seccion';
import { CursoService } from 'src/app/Service/curso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-delete-seccion',
  templateUrl: './delete-seccion.component.html',
  styleUrls: ['./delete-seccion.component.css']
})

export class DeleteSeccionComponent implements OnInit {
  seccionId: number;
  seccionNombre: string;
  cursoNombre: string;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<DeleteSeccionComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.seccionId = data.seccionId;
    this.seccionNombre = data.seccionNombre;
    this.cursoNombre = data.cursoNombre;
  }
 
  seccionForm = this.fb.group({
    confirmar: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  Guardar(){
    this.cs.deleteSeccion(this.seccionId)
    .subscribe(data=>{
     alert("Se ha eliminado con éxito.");
     this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}