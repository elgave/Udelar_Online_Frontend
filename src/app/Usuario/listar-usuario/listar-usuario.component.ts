import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:UsuarioServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }

  Editar(usuario:Usuario):void{
    localStorage.setItem("cedula",usuario.cedula.toString());
    localStorage.setItem("idFacultad",usuario.idFacultad.toString());
    localStorage.setItem("tipo",usuario.tipo.toString());
    this.router.navigate(["editUsuario"]);

  }
  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios = this.usuarios.filter(u=> u!==usuario);
      alert("Usuario eliminado con exito");
    })
  }
  Nuevo(){
    this.router.navigate(["addUsuario"]);
  }

}
