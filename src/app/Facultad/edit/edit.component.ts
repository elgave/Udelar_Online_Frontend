import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  facultad:Facultad = new Facultad();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getFacultadId(+id)
    .subscribe(data=>{
      this.facultad=data;
    })
  }

  Actualizar(facultad:Facultad){
    this.service.updateFacultad(facultad)
    .subscribe(data=>{
      this.facultad = data;
      alert("Se actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
