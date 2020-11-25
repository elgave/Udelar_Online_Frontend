import { Component, Inject, OnInit } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service';
import { FechaCalendario } from '../../../../Modelo/FechaCalendario';
import { AddSeccionComponent } from '../seccion/add-seccion/add-seccion.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-add-fecha-calendario',
  templateUrl: './add-fecha-calendario.component.html',
  styleUrls: ['./add-fecha-calendario.component.css']
})
export class AddFechaCalendarioComponent implements OnInit {

  calendarioId: number;
  fechaCalenario: FechaCalendario = new FechaCalendario();

  constructor(private fb: FormBuilder,private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.fechaCalenario.calendarioId = data.componente.calendario.id;
    
    
  }
 
  componenteForm = this.fb.group({
    fecha: ["", Validators.required],
    texto: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  GuardarFecha(fecha:string, texto: string){
    this.fechaCalenario.Fecha = fecha;
    this.fechaCalenario.Texto = texto;
    this.cs.addFechaCalendario(this.fechaCalenario).subscribe(data=>{
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
