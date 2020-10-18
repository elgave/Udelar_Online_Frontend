import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Usuario} from 'src/app/Modelo/Usuario'
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router,private service:UsuarioServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    var cedula= localStorage.getItem("cedula");
    let facultadId = localStorage.getItem("facultadId");
    this.service.getUsuarioId(cedula,+facultadId)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  Actualizar(usuario: Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario = data;
      alert("Se actualizo con Exito...!!!");
      this.router.navigate(["listarUsuarios"]);
    })
  }
}
