import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Template } from 'src/app/Modelo/Template';
import { CursoService } from 'src/app/Service/curso.service';
import { EditSeccionTemplateComponent } from '../edit-seccion-template/edit-seccion-template.component';

@Component({
  selector: 'app-list-seccion-template',
  templateUrl: './list-seccion-template.component.html',
  styleUrls: ['./list-seccion-template.component.css']
})
export class ListSeccionTemplateComponent implements OnInit {

  templates: Template[];
  template: Template;
  templateId: number;

  constructor(private service:CursoService, private dialogRef: MatDialogRef<ListSeccionTemplateComponent>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getTemplates()
    .subscribe(data => {
      this.templates=data.data;
      this.template = this.templates[0];
    });
  }

  change(id:number) {
    this.template = this.templates.find(t => t.id == id);
  }

  editar(id: number, titulo: string, indice: number, templateId: number) {
    this.dialog.open(EditSeccionTemplateComponent, {
      width: '540px',
      maxHeight: '430px',
      data: { id: id, titulo: titulo, indice: indice, templateId: templateId }
    });
  }

  eliminar(id: number) {
    this.service.deleteSeccionTemplate(id)
    .subscribe(data=>{
      alert("Se ha eliminado con éxito.");
      this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
