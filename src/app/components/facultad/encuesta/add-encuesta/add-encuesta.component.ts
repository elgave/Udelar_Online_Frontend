import { Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Encuesta } from 'src/app/Modelo/Encuesta';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pregunta } from 'src/app/Modelo/Pregunta';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-add-encuesta',
  templateUrl: './add-encuesta.component.html',
  styleUrls: ['./add-encuesta.component.css']
})
export class AddEncuestaComponent implements OnInit {

  surveyForm: FormGroup;

  selectedOption = [];

  isDocente: boolean;
  isAdmin: boolean;


  constructor(private es: EncuestaService, private dialogRef: MatDialogRef<AddEncuestaComponent>,private dialog: MatDialog) { }

  ngOnInit(): void {

    this.isAdmin = sessionStorage.getItem('rol') == 'administrador'
    this.isDocente = sessionStorage.getItem('rol') == 'docente'

    this.initForm();
  }

  private initForm() {
    let surveyTitle = '';
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
      'surveyQuestions': surveyQuestions,
    });

    this.onAddQuestion();

  }

  onAddQuestion() {
    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl('', Validators.required),
      'questionGroup': new FormGroup({})
    });

    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);

  }

  onRemoveQuestion(index) {

  
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index,1)
  }

  postSurvey() {

    let formData = this.surveyForm.value;
    let Title = formData.surveyTitle;

    let preguntas: Pregunta[] = [];

    let surveyQuestions = formData.surveyQuestions;

    let encuesta = new Encuesta(0,Title, sessionStorage.getItem('rol') , preguntas);

    surveyQuestions.forEach((question, index, array) => {
      let questionItem = new Pregunta();
      questionItem.texto = question.questionTitle;

      encuesta.preguntas.push(questionItem)
    });

    this.es.createEncuesta(encuesta)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha agregado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.Cerrar();
      });
    })
  }


  onSubmit() {

    this.postSurvey();

  }
  Cerrar() {
    this.dialogRef.close();
  }
}
