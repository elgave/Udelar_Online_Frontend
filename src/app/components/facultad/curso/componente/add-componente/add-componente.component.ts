import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Componente } from 'src/app/Modelo/Componente';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-add-componente',
  templateUrl: './add-componente.component.html',
  styleUrls: ['./add-componente.component.css']
})
export class AddComponenteComponent implements OnInit {
  seccionId: number;
  componente:Componente = new Componente();
  fileUpload: FormData = new FormData();

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddComponenteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.seccionId = data.seccionId;
  }

  componenteForm = this.fb.group({
    nombre: ["", Validators.required],
    tipo: ["", Validators.required],
    indice: ["", Validators.required],
    file: [""],
    texto: [""]
  });

  ngOnInit(): void {
  }

  subirArchivo(files) {
    this.componenteForm.controls['file'].setErrors(null);
    let archivo = <File>files[0];
    this.fileUpload.append('archivo', archivo);
  }

  Guardar(componente:Componente){
    this.fileUpload.append('texto', componente.texto);
    this.fileUpload.append('nombre', componente.nombre);
    this.fileUpload.append('indice', componente.indice.toString());
    this.fileUpload.append('tipo', componente.tipo);
    this.fileUpload.append('seccionCursoId', this.seccionId.toString()); 
    this.cs.addComponente(this.fileUpload)
      .subscribe(data=>{
        alert("Se Agrego con éxito.");
        this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}