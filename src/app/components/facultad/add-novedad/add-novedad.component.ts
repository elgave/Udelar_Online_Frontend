import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacultadService } from 'src/app/Service/facultad.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-add-novedad',
  templateUrl: './add-novedad.component.html',
  styleUrls: ['./add-novedad.component.css']
})
export class AddNovedadComponent implements OnInit {
  titulo: string;
  texto: string;
  facultadId: number

  constructor(private fb: FormBuilder, private fs: FacultadService, private dialogRef: MatDialogRef<AddNovedadComponent>,private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) data) {
    this.facultadId = data.facultadId;
  }
 
  novedadForm = this.fb.group({
    titulo: ["", Validators.required],
    texto: ["", Validators.required]
  });

  ngOnInit(): void { }

  Guardar(){
    let novedad = { titulo: this.titulo, texto: this.texto, facultadId: this.facultadId };
    this.fs.publicarNovedad(novedad)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha publicado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
