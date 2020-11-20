import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Encuesta } from 'src/app/Modelo/Encuesta';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-respuestas-encuesta',
  templateUrl: './respuestas-encuesta.component.html',
  styleUrls: ['./respuestas-encuesta.component.css']
})
export class RespuestasEncuestaComponent implements OnInit {

  encuestaId: number;
  encuesta:Encuesta;
  constructor(private fb: FormBuilder,private es: EncuestaService, @Inject(MAT_DIALOG_DATA) data) {
    this.encuestaId = data.encuestaId;
   }

  ngOnInit(): void {
    this.es.getEncuesta(this.encuestaId).subscribe(r => {
      this.encuesta = r.data;
    })
  }

}
