import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from '../Modelo/Curso';
import { Usuario } from '../Modelo/Usuario';
import { Matricula } from '../Modelo/Matricula';
import { Response } from '../Modelo/Response';
import * as env from 'src/env';
import { Seccion } from '../Modelo/Seccion';
import { Componente } from '../Modelo/Componente';
import { Template } from '../Modelo/Template';
import { Calificacion } from '../Modelo/Calificacion';
import { FechaCalendario } from '../Modelo/FechaCalendario';
import { Calendario } from '../Modelo/Calendario';

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
    return this.http.post<any>(`${this.Url}/matricula`,matricula, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  bajaMatricula(matricula:Matricula) {
    return this.http.put<any>(`${this.Url}/matricula`,matricula, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
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

  getTemplates() {
    return this.http.get<Response<Template[]>>(`${this.Url}/template`);
  }
  addTemplate(template:any) {
    return this.http.post<Response<Componente>>(`${this.Url}/template`, template, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  addSeccionTemplate(seccion:any) {
    return this.http.post<Response<Componente>>(`${this.Url}/template/seccion`, seccion, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  deleteTemplate(id: number) {
    return this.http.delete<Response<any>>(`${this.Url}/template/${id}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  deleteSeccionTemplate(id: number) {
    return this.http.delete<Response<any>>(`${this.Url}/template/seccion/${id}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  editTemplate(id: number, template: any) {
    return this.http.put<Response<any>>(`${this.Url}/template/${id}`, template, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  editSeccionTemplate(id: number, seccion: any) {
    return this.http.put<Response<any>>(`${this.Url}/template/seccion/${id}`, seccion, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  getCalificacionId(id:number){
    return this.http.get<Response<Calificacion[]>>(`${this.Url}/Calificacion/${id}`);
  }

  addCalificacion(calificacion:Calificacion){
    return this.http.post<Response<Calificacion[]>>(`${this.Url}/Calificacion/`, calificacion, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  addFechaCalendario(fechaC:FechaCalendario){
    return this.http.post<Response<FechaCalendario[]>>(`${this.Url}/Calendario/`, fechaC, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }

  getCalendario(id:number){
    return this.http.get<Response<Calendario>>(`${this.Url}/Calendario/${id}`);
  }

}

