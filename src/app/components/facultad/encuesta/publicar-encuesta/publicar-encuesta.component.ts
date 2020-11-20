import { Component, Inject, OnInit } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service';
import {Curso} from 'src/app/Modelo/Curso'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { EncuestaCurso } from 'src/app/Modelo/EncuestaCurso';
import { EncuestaService } from 'src/app/Service/encuesta.service';

@Component({
  selector: 'app-publicar-encuesta',
  templateUrl: './publicar-encuesta.component.html',
  styleUrls: ['./publicar-encuesta.component.css']
})
export class PublicarEncuestaComponent implements OnInit {
  cursos: Curso[];

  encuestaCurso = new EncuestaCurso();
  constructor(private dialogRef: MatDialogRef<PublicarEncuestaComponent>,private ec: EncuestaService, private cs: CursoService, @Inject(MAT_DIALOG_DATA) data,private fb: FormBuilder) { 
    this.encuestaCurso.idEncuesta = data.encuestaId;
  }

  publicarForm = this.fb.group({
    curso: ["", Validators.required]
  });

  ngOnInit(): void {
    this.cs.getCursos().subscribe(r => this.cursos = r.data);
  }

  publicar(encuestaCurso: EncuestaCurso){
    this.ec.publicarEncuestaCurso(encuestaCurso).subscribe(data=>{
      alert("Se Agrego con éxito.");
      this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
