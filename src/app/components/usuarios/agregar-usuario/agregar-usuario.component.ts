import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  usuarioId:string;
  usuarios:Usuario[];
  facultadId:number;
  facultad:string;
  rol: string;
  add:boolean;

  constructor(private service:UsuarioService, private fb: FormBuilder,  private dialogRef: MatDialogRef<AgregarUsuarioComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.facultadId = data.facultadId;
    this.facultad = data.facultad;
    this.rol = data.rol;
    this.add = data.add;
  }

  userForm = this.fb.group({
    cedula: ["", Validators.required]
  });

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(r => this.usuarios = r.body.data.filter(u => (u.facultadId == this.facultadId) && (u.roles.some(r => r.descripcion == this.rol) ? !this.add : this.add)));
  }

  Guardar(){
    let usuario = this.usuarios.find(u => u.cedula == this.usuarioId);
    if (this.add) usuario.roles.push({descripcion: this.rol});
    else usuario.roles = usuario.roles.filter(r => r.descripcion != this.rol);
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      alert("Se ha agregado el rol con éxito.");
      this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
