import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CursoService } from 'src/app/Service/curso.service';
import { Curso } from 'src/app/Modelo/Curso';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Template } from 'src/app/Modelo/Template';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  facultadId:number;
  facultad:string;
  curso:any = new Curso();
  templates: Template[];
  
  constructor(private service: CursoService,  private fb: FormBuilder,private dialog: MatDialog, private dialogRef: MatDialogRef<AgregarCursoComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.curso.facultadId = data.facultadId;
    this.facultad = data.facultad;
  }

  cursoForm = this.fb.group({
    nombre: ["", Validators.required],
    creditos: ["", Validators.required],
    confirmar: ["", Validators.required],
    template: ["", Validators.required]
  });
 
  ngOnInit(): void {
    this.curso.templateId = 0;
    this.service.getTemplates().subscribe(r => this.templates = r.data);
  }

  Guardar(curso:Curso){
    curso.cantCreditos = parseInt(curso.cantCreditos.toString());
    curso.facultadId = parseInt(curso.facultadId.toString());
    this.service.createCurso(this.curso)
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
