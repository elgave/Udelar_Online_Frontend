import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-edit-seccion-template',
  templateUrl: './edit-seccion-template.component.html',
  styleUrls: ['./edit-seccion-template.component.css']
})
export class EditSeccionTemplateComponent implements OnInit {

  templateId: number;
  indice: number;
  titulo: string;
  id: number;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<EditSeccionTemplateComponent>,@Inject(MAT_DIALOG_DATA) data,private dialog: MatDialog) {
    this.templateId = data.templateId;
    this.indice = data.indice;
    this.titulo = data.titulo;
    this.id = data.id;
  }
 
  seccionForm = this.fb.group({
    titulo: ["", Validators.required],
    indice: ["", Validators.required]
  });

  ngOnInit(): void { }

  Guardar(){
    let seccion = {id: this.id, titulo: this.titulo, templateId: this.templateId, indice: this.indice};
    this.cs.editSeccionTemplate(this.id, seccion)
    .subscribe(data=>{
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
