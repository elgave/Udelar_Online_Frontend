import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as env from 'src/env';
import {Encuesta} from 'src/app/Modelo/Encuesta';
import { Response } from '../Modelo/Response';
import { EncuestaCurso } from '../Modelo/EncuestaCurso';
import { EncuestaFacultad } from '../Modelo/EncuestaFacultad';
import { GetEncuestasFacultad } from '../Modelo/GetEncuestasfacultad';
import { RespuestaEncuesta } from '../Modelo/RespuestaEncuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  Url=`${env.apiurl}/api/encuesta`;

  getEncuesta(id:number){
    return this.http.get<Response<Encuesta>>(`${this.Url}/${id}`,{headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }

  getEncuestasFacultad(id:number){
    return this.http.get<Response<GetEncuestasFacultad[]>>(`${this.Url}/listEncuestaFacultad/${id}`,{headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }
  getencuestasXRol(rol:string){
    return this.http.get<Response<Encuesta[]>>(`${this.Url}/encuestasXRol/`+rol,{headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  createEncuesta(encuesta:Encuesta){
    return this.http.post<Response<Encuesta[]>>(this.Url, encuesta, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  obtenerEncuestaSinRespuestas(id: number){
    return this.http.get<Response<Encuesta>>(`${this.Url}/encuestaSinRespuesta/`+id,{headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }
  
  publicarEncuestaCurso(encuestaCurso: EncuestaCurso){
    return this.http.post<Response<Encuesta[]>>(`${this.Url}/addEncuestaCurso`, encuestaCurso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }

  publicarEncuestaFacultad(encuestaFacultad: EncuestaFacultad){
    return this.http.post<Response<Encuesta[]>>(`${this.Url}/addEncuestaFacultad`, encuestaFacultad, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }

  responderEncuesta(respuestaEncuesta: RespuestaEncuesta){
    return this.http.post<Response<RespuestaEncuesta>>(`${this.Url}/responderEncuesta`, respuestaEncuesta, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}})
  }
  
}
