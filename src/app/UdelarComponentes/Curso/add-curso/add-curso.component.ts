import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Curso } from 'src/app/Modelo/Curso';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  constructor(private router:Router,private service:CursoService) { }
 
  curso:Curso = new Curso();
  ngOnInit(): void {
  }

  Guardar(curso:Curso){

    curso.cantCreditos = parseInt(curso.cantCreditos.toString());
    curso.facultadId = parseInt(curso.facultadId.toString());
    this.service.createCurso(this.curso)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!");
      this.router.navigate(["listarCursos"]);
    })
  }
}
