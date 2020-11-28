import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntregaTarea } from 'src/app/Modelo/EntregaTarea';
import { CursoService } from 'src/app/Service/curso.service';
import * as env from 'src/env';
import { AddCalificacionComponent } from '../../add-calificacion/add-calificacion.component';

@Component({
  selector: 'app-list-entrega-tarea',
  templateUrl: './list-entrega-tarea.component.html',
  styleUrls: ['./list-entrega-tarea.component.css']
})
export class ListEntregaTareaComponent implements OnInit {

  contenedorTareaId:number;
  tareas: Array<EntregaTarea>;
  currentEnv = env;
  
  
  constructor(private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<ListEntregaTareaComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.contenedorTareaId = data.contenedorTareaId;
    let nota: number;
  }

  ngOnInit(): void {
    this.cs.getTareaUsuarios(this.contenedorTareaId).subscribe((resp) => this.tareas = resp.data);
  }

  calificar(tareaId:number, nombre: string, apellido: string){

    this.dialog.open(AddCalificacionComponent, {
      width: '640px',
      height: '350px', 
      data: { isTarea: true,tareaId: tareaId, nombre:nombre, apellido: apellido},
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  icon(ext:string) {
    switch (ext) {
      case "zip":
      case "rar":
      case "tar":
      case "tar.gz":
      case "7z":
        return "pack.png";
      case "pdf":
        return "pdf.png";
      case "doc":
      case "docx":
      case "odt": 
        return "doc.png";
      case "ppt":
      case "pptx":
      case "odp": 
        return "ppt.png";
      case "xls":
      case "xlsx":
      case "ods": 
        return "xls.png";
      default:
        return "generic.png";
    }
  }

}
