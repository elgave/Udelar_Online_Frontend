import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CursoService } from 'src/app/Service/curso.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntregaTarea } from 'src/app/Modelo/EntregaTarea';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import * as env from 'src/env';

@Component({
  selector: 'app-add-entrega-tarea',
  templateUrl: './add-entrega-tarea.component.html',
  styleUrls: ['./add-entrega-tarea.component.css']
})
export class AddEntregaTareaComponent implements OnInit {

  cedula:string;
  facultadId:number;
  contenedorId: number;
  entregaTarea: EntregaTarea;
  nombreContenedor:string;
  fechaCierre:Date;
  fileUpload: FormData = new FormData();
  dateDay:Date;
  fechaCierreDate:Date;
  currentEnv = env;
  constructor(private dialog: MatDialog,private fb: FormBuilder,private cs: CursoService , @Inject(MAT_DIALOG_DATA) data, private dialogRef: MatDialogRef<AddEntregaTareaComponent>) {
    
    this.contenedorId = data.contenedorId;
    this.nombreContenedor = data.nombreContenedor;
    this.fechaCierre = data.fechaCierre;
  }

  entregaTareaForm = this.fb.group({
    usuarioId: [""],
    factuladId: [""],
    contenedorTareaId: [""],
    calificacion: [""],
    fechaEntrega: [""],
    file: [""]
  });

  ngOnInit(): void {
    this.dateDay = new Date();

    this.fechaCierreDate = new Date(this.fechaCierre);
    this.cedula = sessionStorage.getItem('cedula');

    this.facultadId = parseInt(sessionStorage.getItem('facultadId'));

    this.cs.getTareaUsuario(this.cedula,this.facultadId,this.contenedorId).subscribe(r => {
      this.entregaTarea = r.data;
      console.log(this.entregaTarea);
    })
  }

  subirArchivo(files) {
    this.entregaTareaForm.controls['file'].setErrors(null);
    let archivo = <File>files[0];
    this.fileUpload.append('archivo', archivo);

    this.fileUpload.append('usuarioId', this.cedula);
    this.fileUpload.append('facultadId', this.facultadId.toString());
    this.fileUpload.append('contenedorTareaId', this.contenedorId.toString());
    this.fileUpload.append('fechaEntrega', this.dateDay.toJSON());
    if (this.entregaTarea != null) this.fileUpload.append('archivoId',this.entregaTarea.archivoEntrega.id.toString());
    
    
  
    this.cs.addEntregaTarea(this.fileUpload)
      .subscribe(data=>{
        let dialogRef = this.dialog.open(AlertComponent, {
          maxWidth: '540px',
          maxHeight: '350px',
          data: { success: "Se ha agregado correctamente." }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.Cerrar();
        });
    })
    
  }

  Cerrar() {
    this.dialogRef.close();
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
