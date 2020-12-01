import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { Template } from 'src/app/Modelo/Template';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {
  titulo: string;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddTemplateComponent>,private dialog: MatDialog) { }
 
  templateForm = this.fb.group({
    titulo: ["", Validators.required]
  });

  ngOnInit(): void { }

  Guardar(){
    let template = { nombre: this.titulo };
    this.cs.addTemplate(template)
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