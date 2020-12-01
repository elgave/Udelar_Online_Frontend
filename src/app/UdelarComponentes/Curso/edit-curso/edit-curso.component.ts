import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router'
import { CursoService } from 'src/app/Service/curso.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FacultadService } from 'src/app/Service/facultad.service';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso:Curso = new Curso();
  docente:Usuario;
  docenteid:string;
  docentes:Array<Usuario>;
  constructor(private router:Router,private service:CursoService, private fb: FormBuilder, private fs: FacultadService,private dialog: MatDialog) { }

  cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    creditos: ["", Validators.required],
    confirmar: ["", Validators.required]
  });

  docenteForm = this.fb.group({
    docente: ["", Validators.required]
  });

  ngOnInit(): void {
    this.Editar();
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getCursoId(+id)
    .subscribe(data=>{
      this.curso=data.data;
      this.fs.getFacultadId(this.curso.facultadId).subscribe(r => this.docentes = r.data.usuarios.filter(u => u.roles.find(rol => rol.descripcion == 'docente')).filter(u => !this.curso.docentes.some(us => us.cedula == u.cedula)));
    });
  }

  Actualizar(curso: Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString())
    this.service.updateCurso(curso)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha actualizado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(["gestion/listarCursos"]);
      });
    })
  }

  AgregarDocente() {
    this.docente = this.docentes.find(d => d.cedula == this.docenteid);
    this.service.agregarDocente(this.curso.id, this.docente)
    .subscribe(r => {
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha agregado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Editar();
      });
    });

  }
}
