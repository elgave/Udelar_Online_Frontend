import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UsuarioService } from 'src/app/Service/usuario.service';
import {Usuario} from 'src/app/Modelo/Usuario'

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private router:Router,private service:UsuarioService) { }
 
  usuario:Usuario = new Usuario();
  ngOnInit(): void {
  }

  Guardar(usuario:Usuario){

    usuario.facultadId = parseInt(usuario.facultadId.toString())
    this.service.createUsuario(this.usuario)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!");
      this.router.navigate(["listarUsuarios"]);
    })
  }

}
