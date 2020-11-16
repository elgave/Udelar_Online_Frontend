import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as env from 'src/env';
import {Encuesta} from 'src/app/Modelo/Encuesta';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  Url=`${env.apiurl}/api/encuesta`;

  getencuestasXRol(rol:string){
    return this.http.get<Response<Encuesta[]>>(`${this.Url}/encuestasXRol/`+rol);
  }
  createEncuesta(encuesta:Encuesta){
    return this.http.post<Response<Encuesta[]>>(this.Url, encuesta, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
}
