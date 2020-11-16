import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from '../Modelo/Curso';
import { Usuario } from '../Modelo/Usuario';
import { Matricula } from '../Modelo/Matricula';
import { Response } from '../Modelo/Response';
import * as env from 'src/env';
import { Seccion } from '../Modelo/Seccion';
import { Componente } from '../Modelo/Componente';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(private http:HttpClient) { }

  Url=`${env.apiurl}/api/curso`;

  getCursos(){
    return this.http.get<Response<Curso[]>>(this.Url);
  }
  createCurso(curso:Curso){
    return this.http.post<Response<Curso[]>>(this.Url, curso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  getCursoId(id:number){
    return this.http.get<Response<Curso>>(`${this.Url}/${id}`);
  }
  updateCurso(curso:Curso){
     return this.http.put<Response<Curso>>(`${this.Url}/${curso.id}`, curso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  deleteCurso(curso:Curso){
    return this.http.delete<Response<Curso[]>>(`${this.Url}/${curso.id}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  matricularse(matricula:Matricula){
    return this.http.post<any>(`${this.Url}/matricularse`,matricula, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  agregarDocente(id: number, docente: Usuario) {
    return this.http.post<Response<Curso>>(`${this.Url}/${id}`, docente, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  renameCurso(curso:Curso) {
    return this.http.put<Response<Curso>>(`${this.Url}/renombrar/${curso.id}`, curso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  addSeccion(seccion:Seccion) {
    return this.http.post<Response<Seccion>>(`${this.Url}/seccion`, seccion, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  editSeccion(id:number, seccion:Seccion) {
    return this.http.put<Response<Seccion>>(`${this.Url}/seccion/${id}`, seccion, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  deleteSeccion(id:number) {
    return this.http.delete<Response<Seccion[]>>(`${this.Url}/seccion/${id}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  addComponente(componente:FormData) {
    return this.http.post<Response<Componente>>(`${this.Url}/componente`, componente, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  editComponente(id:number, componente:Componente) {
    return this.http.put<Response<Componente>>(`${this.Url}/componente/${id}`, componente, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }  
  deleteComponente(id:number) {
    return this.http.delete<Response<Componente[]>>(`${this.Url}/componente/${id}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
}
