import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { FactoryOrValue } from 'rxjs';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }
 
  facultad:Facultad = new Facultad();
  ngOnInit(): void {
  }

  Guardar(facultad:Facultad){
    this.service.createFacultad(this.facultad)
    .subscribe(data=>{
      alert(`Se Agrego con Exito!`);
      this.router.navigate(["listarFacultades"]);
    })
  }

}
