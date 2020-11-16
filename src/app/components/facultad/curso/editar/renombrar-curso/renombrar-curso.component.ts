import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/Modelo/Curso';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-renombrar-curso',
  templateUrl: './renombrar-curso.component.html',
  styleUrls: ['./renombrar-curso.component.css']
})
export class RenombrarCursoComponent implements OnInit {
  cursoId: number;
  curso: Curso = new Curso();
  isAdmin: boolean;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<RenombrarCursoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.cursoId = data.cursoId;
    this.curso.id = this.cursoId;
    this.curso.nombre = data.cursoNombre;
    this.curso.cantCreditos = data.creditos;
    this.curso.confirmaBedelia = data.confirmaBedelia;    
    this.isAdmin = data.isAdmin;
  }

  cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    creditos: ["", Validators.required],
    confirmar: [""]
  });

  ngOnInit(): void {
  }

  Guardar(curso:Curso){
    this.cs.updateCurso(curso).subscribe(data=>{
      alert("Se ha editado con éxito.");
      this.Cerrar();
     })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}