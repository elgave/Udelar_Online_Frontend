import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/Modelo/Carrera';
import { CarreraServiceService } from 'src/app/Service/carrera-service.service';

@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export class ListarCarreraComponent implements OnInit {

  carreras:Carrera[];
  constructor(private service:CarreraServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getCarreras()
    .subscribe(data=>{
      this.carreras=data.data;
    })
  }

  Editar(carrera:Carrera):void{
    localStorage.setItem("id",carrera.id.toString());
    this.router.navigate(["editCarrera"]);

  }
  Delete(carrera:Carrera){
    this.service.deleteCarrera(carrera)
    .subscribe(data=>{
      this.carreras = this.carreras.filter(f=> f!==carrera);
      alert("Carrera eliminada con exito");
    })
  }
  Nuevo(){
    this.router.navigate(["addCarrera"]);
  }
}
