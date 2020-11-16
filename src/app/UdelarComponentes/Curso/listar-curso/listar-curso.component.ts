import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import { CursoService } from 'src/app/Service/curso.service';
import {Router} from '@angular/router'
import { Matricula } from 'src/app/Modelo/Matricula';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {

  cursos:Curso[];
  constructor(private service:CursoService,private router:Router) { }

  matricula:Matricula = new Matricula();

  ngOnInit() {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.service.getCursos()
    .subscribe(data=>{
      this.cursos=data.data;
    })
  }

  Editar(curso:Curso):void{
    localStorage.setItem("id",curso.id.toString());
    this.router.navigate(["gestion/editCurso"]);

  }
  Delete(curso:Curso){
    this.service.deleteCurso(curso)
    .subscribe(data=>{
      this.cursos = this.cursos.filter(c=> c!==curso);
      alert("Curso eliminado con éxito.");
    })
  }
  Nuevo(){
    this.router.navigate(["gestion/addCurso"]);
  }
}
