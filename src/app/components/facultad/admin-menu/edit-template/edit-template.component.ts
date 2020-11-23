import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {
  nombre: string;
  id: number;

  constructor(private service:CursoService,private dialog: MatDialog, private dialogRef: MatDialogRef<EditTemplateComponent>, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder) {
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
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: data.success }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
