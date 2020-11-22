import { Component, Inject, OnInit } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service';
import {Curso} from 'src/app/Modelo/Curso'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { EncuestaCurso } from 'src/app/Modelo/EncuestaCurso';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { FacultadService } from 'src/app/Service/facultad.service';
import { Facultad } from 'src/app/Modelo/Facultad';
import { EncuestaFacultad } from 'src/app/Modelo/EncuestaFacultad';

@Component({
  selector: 'app-publicar-encuesta',
  templateUrl: './publicar-encuesta.component.html',
  styleUrls: ['./publicar-encuesta.component.css']
})
export class PublicarEncuestaComponent implements OnInit {
  cursos: Curso[];
  rol:string;
  facultades: Facultad[];
  
  encuestaCurso = new EncuestaCurso();
  encuestaFacultad = new EncuestaFacultad();
  constructor(private fs: FacultadService, private dialog: MatDialog, private dialogRef: MatDialogRef<PublicarEncuestaComponent>,private ec: EncuestaService, private cs: CursoService, @Inject(MAT_DIALOG_DATA) data,private fb: FormBuilder) { 
    this.encuestaCurso.idEncuesta = data.encuestaId;

    this.encuestaFacultad.idEncuesta = data.encuestaId;
  }

  publicarForm = this.fb.group({
    
    curso: ["", Validators.required],
    facultad:["", Validators.required]
  });

  ngOnInit(): void {
    this.cs.getCursos().subscribe(r => this.cursos = r.data);
    this.fs.getSoloFacultades().subscribe(r =>this.facultades = r.data);
    this.rol = sessionStorage.getItem('rol')
    if(this.rol != 'admin'){
      this.publicarForm.get('facultad').clearValidators();
      this.publicarForm.get('facultad').updateValueAndValidity();
    }else{
      this.publicarForm.get('curso').clearValidators();
      this.publicarForm.get('curso').updateValueAndValidity();
    }
  }

  publicar(encuestaCurso: EncuestaCurso){
    let subs;
    if(this.rol != 'admin'){
      subs = this.ec.publicarEncuestaCurso(encuestaCurso);
    }else{
      subs = this.ec.publicarEncuestaFacultad(this.encuestaFacultad);
    }
    subs.subscribe(data=>{
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

  saveDraft() {
    this.publicarForm.get('curso').clearValidators();
    this.publicarForm.get('curso').updateValueAndValidity();
   }
}
