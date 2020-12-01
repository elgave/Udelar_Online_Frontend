import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Router} from '@angular/router'
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit, OnDestroy {

  usuarios:Usuario[];
  subRef$: Subscription;
  constructor(private service:UsuarioService,private router:Router,private dialog: MatDialog) { }

  ngOnInit() {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.subRef$ =  this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data.body.data;
    },
      err => {
        console.log('Error al listar los usuarios', err);
      });
  }

  Editar(usuario:Usuario):void{
    localStorage.setItem("cedula",usuario.cedula.toString());
    localStorage.setItem("facultadId",usuario.facultadId.toString());
    this.router.navigate(["gestion/editUsuario"]);

  }
  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios = this.usuarios.filter(u=> u!==usuario);
      this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha eliminado correctamente." }
      });
    })
  }
  Nuevo(){
    this.router.navigate(["gestion/addUsuario"]);
  }

  ngOnDestroy(){
    if(this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

}
