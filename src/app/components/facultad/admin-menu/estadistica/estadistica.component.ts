import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/Modelo/Curso';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  cursos: Curso[];
  facultadId: number;
  facultad: string;

  constructor(private service:CursoService, private dialogRef: MatDialogRef<EstadisticaComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.facultadId = data.facultadId;
    this.facultad = data.facultad;
  }

  ngOnInit(): void {
    this.service.getCursos().subscribe(r => this.cursos = r.data.filter(c => c.facultadId == this.facultadId));
  }

  Cerrar() {
    this.dialogRef.close();
  }
}
