import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Componente } from 'src/app/Modelo/Componente';
import { Curso } from 'src/app/Modelo/Curso';
import { Seccion } from 'src/app/Modelo/Seccion';
import { CursoService } from 'src/app/Service/curso.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-publicar-comunicado',
  templateUrl: './publicar-comunicado.component.html',
  styleUrls: ['./publicar-comunicado.component.css']
})
export class PublicarComunicadoComponent implements OnInit {
  facultadId: number;
  componente: FormData = new FormData();
  cursos: Curso[];
  curso: Curso;
  cursoid: number;
  titulo: string;
  cuerpo: string;

  constructor(private fb: FormBuilder,private dialog: MatDialog, private cs: CursoService, private dialogRef: MatDialogRef<PublicarComunicadoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.facultadId = data.facultadId;
    this.componente.append('tipo', 'texto');
  }

  componenteForm = this.fb.group({
    cursoid: ["", Validators.required],
    nombre: ["", Validators.required],
    texto: [""]
  });

  ngOnInit(): void {
    this.cs.getCursos().subscribe(r => this.cursos = r.data);
  }

  loadCurso() {
    this.cs.getCursoId(this.cursoid).subscribe(r => this.curso = r.data);
  }

  Guardar(){
    this.componente.append('texto', this.cuerpo);
    this.componente.append('nombre', this.titulo);
    this.componente.append('cursoId', this.cursoid.toString());

    if (!this.curso.secciones.some(s => s.titulo == '🛈 Comunicados Oficiales')) {
      this.componente.append('indice', (0).toString());
      let seccion = new Seccion();
      seccion.cursoId = this.cursoid;
      seccion.titulo = '🛈 Comunicados Oficiales';
      seccion.indice = -999;
      this.cs.addSeccion(seccion).subscribe(data=>{
        this.cs.getCursoId(this.cursoid).subscribe(r => {
          this.curso = r.data;
          this.componente.append('seccionCursoId', this.curso.secciones.find(s => s.indice == -999 && s.titulo == '🛈 Comunicados Oficiales').id.toString());
          this.cs.addComponente(this.componente)
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
        });
      });
    } else {
      this.componente.append('seccionCursoId', this.curso.secciones.find(s => s.indice == -999 && s.titulo == '🛈 Comunicados Oficiales').id.toString()); 
      this.componente.append('indice', (Math.min.apply(Math, this.curso.secciones.find(s => s.indice == -999 && s.titulo == '🛈 Comunicados Oficiales').componentes.map(c => { return c.indice;})) - 1).toString());
      console.log(this.componente);
      this.cs.addComponente(this.componente)
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
  }

  Cerrar() {
    this.dialogRef.close();
  }
}