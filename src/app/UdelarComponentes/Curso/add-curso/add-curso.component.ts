import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FormBuilder, Validators } from '@angular/forms';
import { CursoService } from 'src/app/Service/curso.service';
import { Curso } from 'src/app/Modelo/Curso';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  constructor(private router:Router,private service: CursoService,  private fb: FormBuilder, private fs: FacultadService) { }

  facultades: Array<Facultad>;
  cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    creditos: ["", Validators.required],
    facultadid: ["", Validators.required]
  });
 
  curso:Curso = new Curso();

  ngOnInit(): void {
    if (!sessionStorage.getItem('admintoken')) this.router.navigateByUrl('gestion/login');
    this.fs.getFacultades().subscribe(r => this.facultades = r.data);
  }

  Guardar(curso:Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString());
    curso.facultadId = parseInt(curso.facultadId.toString());
    this.service.createCurso(this.curso)
    .subscribe(data=>{
      alert("Se Agrego con éxito.");
      this.router.navigate(["listarCursos"]);
    })
  }
}
