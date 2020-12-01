import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Encuesta } from 'src/app/Modelo/Encuesta';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Respuesta } from 'src/app/Modelo/Respuesta';
import { RespuestaEncuesta } from 'src/app/Modelo/RespuestaEncuesta';
import { AlertComponent } from 'src/app/components/alert/alert.component';


@Component({
  selector: 'app-responder-encuesta',
  templateUrl: './responder-encuesta.component.html',
  styleUrls: ['./responder-encuesta.component.css']
})
export class ResponderEncuestaComponent implements OnInit {
  encuestaId: number;
  encuesta:Encuesta;
  respuestaEncuesta: RespuestaEncuesta;
  respuestas: Array<Respuesta>;
  respuesta: Respuesta;
  surveyForm: FormGroup;
  indice: string;
  

  constructor(private es: EncuestaService, @Inject(MAT_DIALOG_DATA) data,private dialogRef: MatDialogRef<ResponderEncuestaComponent>,private dialog: MatDialog) {
    this.encuestaId = data.encuestaId;
   }

  ngOnInit(): void {

    this.es.obtenerEncuestaSinRespuestas(this.encuestaId).subscribe(r => {
      this.encuesta = r.data;

      let group={}

      this.encuesta.preguntas.forEach((element, index) => {
      
        group[index.toString()]= new FormControl(''); 
  
      });
      this.surveyForm = new FormGroup(group);
      
    })
  }

  onSubmit(){
    
    this.respuestaEncuesta = new RespuestaEncuesta();

    this.respuestaEncuesta.encuestaId = this.encuestaId;
    this.respuestaEncuesta.cedula = sessionStorage.getItem('cedula');
    
    this.respuestaEncuesta.facultadId = parseFloat(sessionStorage.getItem('facultadId'));

    this.respuestas = new Array<Respuesta>();
    this.encuesta.preguntas.forEach((r, index) => {

      this.indice = index.toString();
      
      this.respuesta = new Respuesta();
      this.respuesta.preguntaId = r.id;
      this.respuesta.texto = this.surveyForm.controls[this.indice].value;
      
      this.respuestas.push(this.respuesta);
    });

    this.respuestaEncuesta.respuestas = this.respuestas;

    this.es.responderEncuesta(this.respuestaEncuesta).subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se han enviado sus respuestas." }
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
