import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Template } from 'src/app/Modelo/Template';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {
  titulo: string;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<AddTemplateComponent>) { }
 
  templateForm = this.fb.group({
    titulo: ["", Validators.required]
  });

  ngOnInit(): void { }

  Guardar(){
    let template = { nombre: this.titulo };
    this.cs.addTemplate(template)
    .subscribe(data=>{
     alert("Se ha agregado con éxito.");
     this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}