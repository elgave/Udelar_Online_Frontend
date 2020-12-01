import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Modelo/Curso';
import { Seccion } from 'src/app/Modelo/Seccion';
import { CursoService } from 'src/app/Service/curso.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-add-seccion',
  templateUrl: './add-seccion.component.html',
  styleUrls: ['./add-seccion.component.css']
})

export class AddSeccionComponent implements OnInit {
  cursoId: number;
  seccion:Seccion = new Seccion();

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionComponent>, @Inject(MAT_DIALOG_DATA) data,private dialog: MatDialog) {
    this.cursoId = data.cursoId;
  }
 
  seccionForm = this.fb.group({
    titulo: ["", Validators.required],
    indice: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  Guardar(seccion:Seccion){
    seccion.cursoId = this.cursoId;
    this.cs.addSeccion(seccion)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha agregado correctamente." }
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