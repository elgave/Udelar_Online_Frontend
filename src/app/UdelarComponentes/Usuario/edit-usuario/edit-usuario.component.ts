import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/Modelo/Usuario'
import { UsuarioService } from 'src/app/Service/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router,private service:UsuarioService, private fb: FormBuilder,private dialog: MatDialog) { }

  userForm = this.fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    mail: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit(): void {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.Editar();
  }

  Editar(){
    var cedula= localStorage.getItem("cedula");
    let facultadId = localStorage.getItem("facultadId");
    this.service.getUsuarioId(cedula,+facultadId)
    .subscribe(data=>{
      this.usuario=data.data;
    })
  }

  Actualizar(usuario: Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario = data.data;
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha actualizado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(["gestion/listarUsuarios"]);
      });
      
    })
  }
}
