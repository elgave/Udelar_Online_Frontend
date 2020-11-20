import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FacultadService} from 'src/app/Service/facultad.service'
import { Facultad } from "src/app/Modelo/Facultad";
import * as env from 'src/env';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  currentEnv = env;
  facultades:Facultad[];
  constructor(private service:FacultadService,private router:Router,private dialog: MatDialog) { }

  ngOnInit() {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.service.getFacultades()
    .subscribe(data=>{
      this.facultades=data.data;
    })
  }

  Editar(facultad:Facultad):void{
    localStorage.setItem("id",facultad.id.toString());
    this.router.navigate(["gestion/editFacultad"]);

  }
  Delete(facultad:Facultad){
    this.service.deleteFacultad(facultad)
    .subscribe(data=>{
      this.facultades = this.facultades.filter(f=> f!==facultad);
      this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: data.success }
      });
    })
  }
  Nuevo(){
    this.router.navigate(["gestion/addFacultad"]);
  }

}
