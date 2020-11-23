import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AgregarUsuarioComponent } from 'src/app/components/usuarios/agregar-usuario/agregar-usuario.component';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FacultadService } from 'src/app/Service/facultad.service';

@Component({
  selector: 'app-cambiar-color',
  templateUrl: './cambiar-color.component.html',
  styleUrls: ['./cambiar-color.component.css']
})
export class CambiarColorComponent implements OnInit {
  facultad: Facultad = new Facultad();
  facultadColor: string;
  facultadId: number;
  facultadnombre: string;

  
  constructor(private service:FacultadService, private fb: FormBuilder, private dialogRef: MatDialogRef<AgregarUsuarioComponent>,@Inject(MAT_DIALOG_DATA) data,private dialog: MatDialog) {
    this.facultad.id = data.facultadId;
    this.facultad.nombre = data.facultad;
    this.facultad.color = data.facultadColor;
    this.facultad.url = data.facultadUrl;
  }

  facultadForm = this.fb.group({
    color: ["", Validators.required]
  });
 

  ngOnInit(): void {

  }

  Actualizar(facultad:Facultad){
    this.service.updateFacultad(facultad)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: data.success }
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