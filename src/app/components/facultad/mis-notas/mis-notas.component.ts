import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Calificacion } from 'src/app/Modelo/Calificacion';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { ListUsuariosComponent } from '../curso/list-usuarios/list-usuarios.component';

@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.css']
})
export class MisNotasComponent implements OnInit {
  cedula: string;
  facultadId: number;
  calificaciones: Calificacion[];

  constructor(private us: UsuarioService, private dialogRef: MatDialogRef<ListUsuariosComponent>, @Inject(MAT_DIALOG_DATA) data,) {
    this.cedula = data.cedula;
    this.facultadId = data.facultadId;
  }

  ngOnInit(): void {
    this.us.misNotas(this.cedula, this.facultadId).subscribe(r => this.calificaciones = r.data);
  }
}
