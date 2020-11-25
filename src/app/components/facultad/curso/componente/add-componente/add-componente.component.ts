import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Componente } from 'src/app/Modelo/Componente';
import { CursoService } from 'src/app/Service/curso.service';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import {Encuesta} from 'src/app/Modelo/Encuesta';
import { AlertComponent } from 'src/app/components/alert/alert.component';



@Component({
  selector: 'app-add-componente',
  templateUrl: './add-componente.component.html',
  styleUrls: ['./add-componente.component.css']
})
export class AddComponenteComponent implements OnInit {
  seccionId: number;
  cursoId: number;
  componente:Componente = new Componente();
  fileUpload: FormData = new FormData();
  encuestas:Encuesta[];

  constructor(private fb: FormBuilder,private dialog: MatDialog,private es:EncuestaService, private cs: CursoService, private dialogRef: MatDialogRef<AddComponenteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.seccionId = data.seccionId;
    this.cursoId = data.cursoId;
  }

  componenteForm = this.fb.group({
    nombre: ["", Validators.required],
    tipo: ["", Validators.required],
    indice: ["", Validators.required],
    file: [""],
    texto: [""],
    encuesta: [""]
  });

  ngOnInit(): void {
    this.es.getencuestasXRol(sessionStorage.getItem('rol'))
    .subscribe(data=>{
      this.encuestas=data.data;
    },
      err => {
        console.log('Error al listar las encuestas', err);
      });
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
    if (componente.tipo == 'encuesta') this.fileUpload.append('encuestaId',componente.encuestaId.toString());
    this.fileUpload.append('cursoId', this.cursoId.toString());

    this.cs.addComponente(this.fileUpload)
      .subscribe(data=>{
        let dialogRef = this.dialog.open(AlertComponent, {
          maxWidth: '540px',
          maxHeight: '350px',
          data: { success: data.success }
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