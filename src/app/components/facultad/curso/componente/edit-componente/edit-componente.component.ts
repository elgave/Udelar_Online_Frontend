import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { Componente } from 'src/app/Modelo/Componente';
import { CursoService } from 'src/app/Service/curso.service';
import { AddSeccionComponent } from '../../seccion/add-seccion/add-seccion.component';

@Component({
  selector: 'app-edit-componente',
  templateUrl: './edit-componente.component.html',
  styleUrls: ['./edit-componente.component.css']
})
export class EditComponenteComponent implements OnInit {
  componenteId: number;
  componente: Componente = new Componente();

  constructor(private fb: FormBuilder,private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.componenteId = data.componenteId;
    this.componente.id = this.componenteId;
    this.componente.nombre = data.componenteNombre;
    this.componente.indice = data.componenteIndice;
    
  }
 
  componenteForm = this.fb.group({
    titulo: ["", Validators.required],
    indice: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  Guardar(componente:Componente){
    this.cs.editComponente(this.componenteId, componente).subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha actualizado correctamente." }
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