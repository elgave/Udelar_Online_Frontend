import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FacultadService} from 'src/app/Service/facultad.service'
import { Facultad } from "src/app/Modelo/Facultad";
import * as env from 'src/env';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  currentEnv = env;
  facultades:Facultad[];
  constructor(private service:FacultadService,private router:Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('admintoken')) this.router.navigateByUrl('gestion/login');
    this.service.getFacultades()
    .subscribe(data=>{
      this.facultades=data.data;
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
      alert("Facu eliminado con éxito.");
    })
  }
  Nuevo(){
    this.router.navigate(["addFacultad"]);
  }

}
