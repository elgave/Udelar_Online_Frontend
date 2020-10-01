import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Facultad } from "src/app/Modelo/Facultad";
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  facultades:Facultad[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getFacultades()
    .subscribe(data=>{
      this.facultades=data;
    })
  }

  Editar(facultad:Facultad):void{
    localStorage.setItem("id",facultad.id.toString());
    this.router.navigate(["editFacultad"]);

  }
  Delete(facultad:Facultad){
    this.service.deleteFacultad(facultad)
    .subscribe(data=>{
      this.facultades = this.facultades.filter(f=> f!==facultad);
      alert("Facu eliminado con exito");
    })
  }
  Nuevo(){
    this.router.navigate(["addFacultad"]);
  }

}
