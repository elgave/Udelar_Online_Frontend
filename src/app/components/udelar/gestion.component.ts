import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  constructor(private router:Router){}

  ngOnInit() {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
  }

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
}
