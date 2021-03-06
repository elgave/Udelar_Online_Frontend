import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Facultad } from './Modelo/Facultad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotnet-frontend';
  facultad = sessionStorage.getItem('facultadId');
  
  constructor(private router:Router){}

  ListarFacultades(){
    this.router.navigate(["listarFacultades"]);
  }
  ListarUsuarios(){
    this.router.navigate(["listarUsuarios"]);
  }
  ListarCursos(){
    this.router.navigate(["listarCursos"]);
  }
  ListarUsuariosXFacultad(){
    this.router.navigate(["listarUsuariosXFacultad"]);
  }

  ngOnInit() {
    this.facultad = sessionStorage.getItem('facultadId');
  }
}
