import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/Modelo/Carrera';
import {Router} from '@angular/router'
import { CarreraService } from 'src/app/Service/carrera.service';

@Component({
  selector: 'app-edit-carrera',
  templateUrl: './edit-carrera.component.html',
  styleUrls: ['./edit-carrera.component.css']
})
export class EditCarreraComponent implements OnInit {

  carrera:Carrera = new Carrera();
  constructor(private router:Router,private service:CarreraService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getCarreraId(+id)
    .subscribe(data=>{
      this.carrera=data.data;
    })
  }

  Actualizar(carrera: Carrera){
    this.service.updateCarrera(carrera)
    .subscribe(data=>{
      this.carrera = data.data;
      alert("Se actualizo con Exito...!!!");
      this.router.navigate(["listarCarreras"]);
    })
  }

}
