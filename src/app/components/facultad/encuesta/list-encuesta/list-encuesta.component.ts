import { Component, OnInit,Input } from '@angular/core';
import {Encuesta} from 'src/app/Modelo/Encuesta'
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { Facultad } from 'src/app/Modelo/Facultad';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-list-encuesta',
  templateUrl: './list-encuesta.component.html',
  styleUrls: ['./list-encuesta.component.css']
})
export class ListEncuestaComponent implements OnInit {

  @Input() facultad: Facultad;
  encuestas:Encuesta[];
  subRef$: Subscription;
  constructor(private service:EncuestaService,private router:Router,private scroll: ViewportScroller) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('token'))) this.router.navigateByUrl('gestion/login');
    this.subRef$ =  this.service.getencuestasXRol(sessionStorage.getItem('rol'))
    .subscribe(data=>{
      this.encuestas=data.data;
    },
      err => {
        console.log('Error al listar los usuarios', err);
      });
  }

  ngOnDestroy(){
    if(this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

  Nuevo(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/facultad/"+sessionStorage.getItem('facultadUrl')+"/encuesta/add"]));
  }

}
