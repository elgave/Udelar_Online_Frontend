import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  nombre: string;
  id: number;

  constructor(private service:CursoService, private dialogRef: MatDialogRef<EditTemplateComponent>, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder) {
    this.nombre = data.nombre;
    this.id = data.id;
  }

  templateForm = this.fb.group({
    nombre: ["", Validators.required]
  });

  ngOnInit(): void { }

  Guardar() {
    let temp = {id: this.id, nombre: this.nombre}
    this.service.editTemplate(this.id, temp)
    .subscribe(data=>{
      alert("Se ha editado con éxito.");
      this.Cerrar();
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
