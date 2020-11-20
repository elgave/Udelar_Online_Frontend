import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { Template } from 'src/app/Modelo/Template';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-add-seccion-template',
  templateUrl: './add-seccion-template.component.html',
  styleUrls: ['./add-seccion-template.component.css']
})
export class AddSeccionTemplateComponent implements OnInit {
  templateId: number;
  indice: number;
  titulo: string;
  templates: Template[];

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddSeccionTemplateComponent>,private dialog: MatDialog) { }
 
  seccionForm = this.fb.group({
    titulo: ["", Validators.required],
    templateId: ["", Validators.required],
    indice: ["", Validators.required]
  });

  ngOnInit(): void {
    this.cs.getTemplates().subscribe(r => this.templates = r.data);
  }

  Guardar(){
    let seccion = {titulo: this.titulo, templateId: this.templateId, indice: this.indice};
    this.cs.addSeccionTemplate(seccion)
    .subscribe(data=>{
      this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: data.success }
      });
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}