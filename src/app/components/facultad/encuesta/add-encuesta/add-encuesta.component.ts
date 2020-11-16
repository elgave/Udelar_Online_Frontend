import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Encuesta } from 'src/app/Modelo/Encuesta';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
  fUrl = this.route.snapshot.paramMap.get('fUrl');


  constructor(private es: EncuestaService,private location: Location,private route: ActivatedRoute,private router:Router) { }

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
    console.log(this.surveyForm);
   
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
    console.log(this.surveyForm);

  }

  postSurvey() {

    let formData = this.surveyForm.value;
    console.log(formData);

    console.log();
    let Title = formData.surveyTitle;

    let preguntas = [];

    let surveyQuestions = formData.surveyQuestions;

    let encuesta = new Encuesta(Title, sessionStorage.getItem('rol') , preguntas);


    surveyQuestions.forEach((question, index, array) => {


      let questionItem = {
        "texto": question.questionTitle        
      }

      encuesta.preguntas.push(questionItem)
    });


    console.log(encuesta);

    this.es.createEncuesta(encuesta)
    .subscribe(data=>{
     alert("Se ha agregado con éxito.");
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/facultad/"+sessionStorage.getItem('facultadUrl')+"/encuesta/list"]));
    })
  }


  onSubmit() {

    this.postSurvey();

  }

}
