import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
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

  constructor(private fb: FormBuilder,private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<DeleteComponenteComponent>, @Inject(MAT_DIALOG_DATA) data) {
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
