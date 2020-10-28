import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Modelo/Curso';
import {Router} from '@angular/router'
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso:Curso = new Curso();
  constructor(private router:Router,private service:CursoService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getCursoId(+id)
    .subscribe(data=>{
      this.curso=data.data;
    })
  }

  Actualizar(curso: Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString())
    this.service.updateCurso(curso)
    .subscribe(data=>{
      this.curso = data.data;
      alert("Se actualizo con Exito...!!!");
      this.router.navigate(["listarCursos"]);
    })
  }

}
