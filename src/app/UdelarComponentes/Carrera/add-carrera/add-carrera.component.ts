import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/Modelo/Carrera';
import { CarreraService } from 'src/app/Service/carrera.service';

@Component({
  selector: 'app-add-carrera',
  templateUrl: './add-carrera.component.html',
  styleUrls: ['./add-carrera.component.css']
})
export class AddCarreraComponent implements OnInit {

  constructor(private router:Router,private service:CarreraService) { }
 
  carrera:Carrera = new Carrera();
  ngOnInit(): void {
  }

  Guardar(carrera:Carrera){

    carrera.idFacultad = parseInt(carrera.idFacultad.toString())
    this.service.createCarrera(this.carrera)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!");
      this.router.navigate(["listarCarreras"]);
    })
  }
}
