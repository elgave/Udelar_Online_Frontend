import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/Modelo/Usuario'
import { FacultadService } from 'src/app/Service/facultad.service';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private router:Router,private service:UsuarioService, private fb: FormBuilder, private fs: FacultadService) { }
 
  facultades: Array<Facultad>;
  usuario:Usuario = new Usuario();

  userForm = this.fb.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    cedula: ["", Validators.required],
    mail: ["", Validators.required],
    password: ["", Validators.required],
    facultadid: ["", Validators.required]
  });

  ngOnInit(): void {
    if (!sessionStorage.getItem('admintoken')) this.router.navigateByUrl('gestion/login');
    this.fs.getFacultades().subscribe(r => this.facultades = r.data);
  }

  Guardar(usuario:Usuario){
    usuario.facultadId = parseInt(usuario.facultadId.toString())
    this.service.createUsuario(this.usuario)
    .subscribe(data=>{
      alert("Se Agrego con éxito.");
      this.router.navigate(["listarUsuarios"]);
    })
  }
}
