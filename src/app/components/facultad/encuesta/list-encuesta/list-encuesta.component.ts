import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/Modelo/Encuesta'
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-encuesta',
  templateUrl: './list-encuesta.component.html',
  styleUrls: ['./list-encuesta.component.css']
})
export class ListEncuestaComponent implements OnInit {
  encuestas:Encuesta[];
  subRef$: Subscription;
  constructor(private service:EncuestaService, private dialogRef: MatDialogRef<ListEncuestaComponent>) { }

  ngOnInit(): void {
    this.service.getencuestasXRol(sessionStorage.getItem('rol'))
    .subscribe(data=>{
      this.encuestas=data.data;
    },
      err => {
        console.log('Error al listar los usuarios', err);
      });
  }

  ver() {
    
  }

  publicar() {

  }

  eliminar() {

  }

  Cerrar() {
    this.dialogRef.close();
  }
}
