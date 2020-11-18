import { Component, OnInit,Input } from '@angular/core';
import {Encuesta} from 'src/app/Modelo/Encuesta'
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { Facultad } from 'src/app/Modelo/Facultad';
import { ViewportScroller } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-encuesta',
  templateUrl: './list-encuesta.component.html',
  styleUrls: ['./list-encuesta.component.css']
})
export class ListEncuestaComponent implements OnInit {

  @Input() facultad: Facultad;
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
