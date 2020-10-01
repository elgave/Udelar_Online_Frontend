import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import {Usuario} from 'src/app/Modelo/Usuario'

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private router:Router,private service:UsuarioServiceService) { }
 
  usuario:Usuario = new Usuario();
  ngOnInit(): void {
  }

  Guardar(usuario:Usuario){

    usuario.idFacultad = parseInt(usuario.idFacultad.toString())
    this.service.createUsuario(this.usuario)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!");
      this.router.navigate(["listarUsuarios"]);
    })
  }

}
