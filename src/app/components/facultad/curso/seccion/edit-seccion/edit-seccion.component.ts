import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seccion } from 'src/app/Modelo/Seccion';
import { CursoService } from 'src/app/Service/curso.service';
import { AddSeccionComponent } from '../add-seccion/add-seccion.component';

@Component({
  selector: 'app-edit-seccion',
  templateUrl: './edit-seccion.component.html',
  styleUrls: ['./edit-seccion.component.css']
})
export class EditSeccionComponent implements OnInit {
  seccionId: number;
  seccion: Seccion = new Seccion()

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.seccionId = data.seccionId;
    this.seccion.id = this.seccionId;
    this.seccion.titulo = data.seccionNombre;
    this.seccion.indice = data.seccionIndice;
    
  }
 
  seccionForm = this.fb.group({
    titulo: ["", Validators.required],
    indice: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  Guardar(seccion:Seccion){
    this.cs.editSeccion(this.seccionId, seccion).subscribe(data=>{
      alert("Se ha editado con éxito.");
      this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}