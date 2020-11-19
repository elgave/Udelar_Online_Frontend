import { Component,Inject, OnInit } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Encuesta } from 'src/app/Modelo/Encuesta';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-responder-encuesta',
  templateUrl: './responder-encuesta.component.html',
  styleUrls: ['./responder-encuesta.component.css']
})
export class ResponderEncuestaComponent implements OnInit {
  encuestaId: number;
  encuesta:Encuesta;

  constructor(private fb: FormBuilder,private es: EncuestaService, @Inject(MAT_DIALOG_DATA) data) {
    this.encuestaId = data.encuestaId;
   }


   surveyForm = this.fb.group({
    respuestaTexto: ["", Validators.required]
  });

  ngOnInit(): void {
    this.es.obtenerEncuestaSinRespuestas(this.encuestaId).subscribe(r => {
      this.encuesta = r.data;

      console.log(this.encuesta);
    })
  }

  onSubmit(){

  }

}
