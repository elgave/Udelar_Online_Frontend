import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router'
import { CursoService } from 'src/app/Service/curso.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FacultadService } from 'src/app/Service/facultad.service';

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
  constructor(private router:Router,private service:CursoService, private fb: FormBuilder, private fs: FacultadService) { }

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
      this.fs.getFacultadId(this.curso.facultadId).subscribe(r => this.docentes = r.data.usuarios.filter(u => u.roles.find(rol => rol.descripcion == 'docente')));
    });
  }

  Actualizar(curso: Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString())
    this.service.updateCurso(curso)
    .subscribe(data=>{
      this.curso = data.data;
      alert("Se actualizo con éxito.");
      this.router.navigate(["gestion/listarCursos"]);
    })
  }

  AgregarDocente() {
    this.docente = this.docentes.find(d => d.cedula = this.docenteid);
    this.service.agregarDocente(this.curso.id, this.docente).subscribe(r=>alert(`Docente ${this.docente.nombre} agregado al curso ${r.data.nombre}`));
  }
}
