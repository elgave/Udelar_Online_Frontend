import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router'
import { CursoService } from 'src/app/Service/curso.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FacultadService } from 'src/app/Service/facultad.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Facultad } from 'src/app/Modelo/Facultad';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css']
})
export class AddDocenteComponent implements OnInit {

  facultad: Facultad;
  curso: Curso;
  docente: Usuario;
  docenteid: string;
  docentes: Array<Usuario>;
  constructor(private dialogRef: MatDialogRef<AddDocenteComponent>,private dialog: MatDialog,private fs: FacultadService, private service:CursoService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) data) {
    this.facultad = data.facultad;
    this.curso = JSON.parse(data.curso);
    this.fs.getFacultadId(this.curso.facultadId).subscribe(r => {
      this.facultad = r.data;
      this.docentes = this.facultad.usuarios.filter(u => u.roles.some(rol => rol.descripcion == 'docente') && !this.curso.docentes.some(us => us.cedula == u.cedula));
    });
  }

  docenteForm = this.fb.group({
    docente: ["", Validators.required]
  });

  ngOnInit(): void {

  }

  AgregarDocente() {
    this.docente = this.docentes.find(d => d.cedula == this.docenteid);
    this.service.agregarDocente(this.curso.id, this.docente)
    .subscribe(r => {
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: r.success }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
