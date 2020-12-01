import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { Template } from 'src/app/Modelo/Template';
import { CursoService } from 'src/app/Service/curso.service';
import { EditTemplateComponent } from '../edit-template/edit-template.component';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css']
})
export class ListTemplateComponent implements OnInit {
  templates: Template[];

  constructor(private service:CursoService, private dialogRef: MatDialogRef<ListTemplateComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getTemplates()
    .subscribe(data => this.templates=data.data);
  }

  editar(id: number, nombre: string) {
    this.dialog.open(EditTemplateComponent, {
      width: '540px',
      maxHeight: '430px',
      data: { id: id, nombre: nombre }
    });
  }

  eliminar(id: number) {
    this.service.deleteTemplate(id)
    .subscribe(data=>{
      this.templates.filter(t => t.id != id);
      this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha eliminado correctamente." }
      });
    });
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
