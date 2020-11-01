import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';
import { FactoryOrValue } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Facultad } from 'src/app/Modelo/Facultad';
import { Response } from 'src/app/Modelo/Response';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  progress: number;
  icono: FormData;
  constructor(private router:Router,private service:FacultadService, private http:HttpClient) { }
 
  facultad:Facultad = new Facultad();
  ngOnInit(): void {
  }

  subirIcono(files) {
    let icono = <File>files[0];
    this.icono = new FormData();
    this.icono.append('icono', icono);
    this.icono.append('nombre', this.facultad.nombre);
    this.icono.append('color', this.facultad.color);
    this.icono.append('url', this.facultad.url);
  }

  Guardar(){
    this.service.createFacultad(this.facultad, this.icono)
    .subscribe(data=>{
      alert(`Se Agrego con Exito!`);
      this.router.navigate(["listarFacultades"]);
    })
  }

}
