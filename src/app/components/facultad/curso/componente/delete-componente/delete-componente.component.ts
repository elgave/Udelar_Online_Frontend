import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-delete-componente',
  templateUrl: './delete-componente.component.html',
  styleUrls: ['./delete-componente.component.css']
})
export class DeleteComponenteComponent implements OnInit {
  seccionNombre: string;
  componenteNombre: string;
  componenteId: number;

  constructor(private fb: FormBuilder, private cs: CursoService, private dialogRef: MatDialogRef<DeleteComponenteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.seccionNombre = data.seccionNombre;
    this.componenteNombre = data.componenteNombre;
    this.componenteId = data.componenteId;
  }
 
  componenteForm = this.fb.group({
    confirmar: ["", Validators.required]
  });

  ngOnInit(): void {
  }

  Guardar(){
    this.cs.deleteComponente(this.componenteId)
    .subscribe(data=>{
     alert("Se ha eliminado con éxito.");
     this.Cerrar();
    })
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
