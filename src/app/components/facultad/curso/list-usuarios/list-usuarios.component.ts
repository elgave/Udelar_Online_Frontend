import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Matricula } from 'src/app/Modelo/Matricula';
import { Usuario } from 'src/app/Modelo/Usuario';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuarios: Usuario[];
  cursoId: number;
  facultadId: number;

  constructor(private cs: CursoService, private dialogRef: MatDialogRef<ListUsuariosComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.cursoId = JSON.parse(data.curso).id;
   }

  ngOnInit(): void {
    this.cs.getCursoId(this.cursoId).subscribe(r => {
      this.usuarios = r.data.usuarios;
      this.facultadId = r.data.facultadId;
    });
  }

  calificar(cedula: string, cursoId: number, facultadId: number) {
    //! abrir matdialog con calificacion
  }

  baja(cedula: string, cursoId: number, facultadId: number) {
    let matricula = new Matricula();
    matricula.cedula = cedula;
    matricula.idCurso = cursoId;
    matricula.idFacultad = facultadId;
    this.cs.bajaMatricula(matricula)
    .subscribe(data=>{
      alert("Se ha dado de baja con éxito.");
      this.Cerrar();
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
