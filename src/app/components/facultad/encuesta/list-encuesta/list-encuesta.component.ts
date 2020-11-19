import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/Modelo/Encuesta'
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from "@angular/material/dialog";
import { RespuestasEncuestaComponent } from 'src/app/components/facultad/encuesta/respuestas-encuesta/respuestas-encuesta.component';


@Component({
  selector: 'app-list-encuesta',
  templateUrl: './list-encuesta.component.html',
  styleUrls: ['./list-encuesta.component.css']
})
export class ListEncuestaComponent implements OnInit {
  encuestas:Encuesta[];
  subRef$: Subscription;
  constructor(private dialog: MatDialog,private service:EncuestaService, private dialogRef: MatDialogRef<ListEncuestaComponent>) { }

  ngOnInit(): void {
    this.service.getencuestasXRol(sessionStorage.getItem('rol'))
    .subscribe(data=>{
      this.encuestas=data.data;
    },
      err => {
        console.log('Error al listar los usuarios', err);
      });
  }

  verRespuestasEncuesta(encuestaId: number){
    
    let dialogRef = this.dialog.open(RespuestasEncuestaComponent, {
      width: '1040px',
      maxHeight: '1000px',
      data: { encuestaId: encuestaId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Cerrar();
    });
  }

  publicar() {

  }

  eliminar() {

  }

  Cerrar() {
    this.dialogRef.close();
  }
}
