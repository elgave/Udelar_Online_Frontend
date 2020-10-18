import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import { CursoServiceService } from 'src/app/Service/curso-service.service';
import {Router} from '@angular/router'
import { Matricula } from 'src/app/Modelo/Matricula';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {

  cursos:Curso[];
  constructor(private service:CursoServiceService,private router:Router) { }

  matricula:Matricula = new Matricula();

  ngOnInit() {
    this.service.getCursos()
    .subscribe(data=>{
      this.cursos=data.data;
    })
  }

  Editar(curso:Curso):void{
    localStorage.setItem("id",curso.id.toString());
    this.router.navigate(["editCurso"]);

  }
  Delete(curso:Curso){
    this.service.deleteCurso(curso)
    .subscribe(data=>{
      this.cursos = this.cursos.filter(c=> c!==curso);
      alert("Curso eliminado con exito");
    })
  }
  Nuevo(){
    this.router.navigate(["addCurso"]);
  }

  Matricularse(){

    this.matricula.cedula = '51159355'
    this.matricula.idFacultad = 1;
    this.matricula.tipo = 'ADM';
    this.matricula.idCurso = 1;


    this.service.matricularse(this.matricula)
    .subscribe(data=>{
      if (data){
      alert("Se matriculo con exito");
      }
      else
      alert("No se pudo matricular");

    })
  }

}
