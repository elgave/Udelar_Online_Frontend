import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from '../Modelo/Curso';
import { Usuario } from '../Modelo/Usuario';
import { Matricula } from '../Modelo/Matricula';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:54403/api/curso';

  getCursos(){
    return this.http.get<Response<Curso[]>>(this.Url);
  }
  createCurso(curso:Curso){
    return this.http.post<Response<Curso[]>>(this.Url, curso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  getCursoId(id:number){
    return this.http.get<Response<Curso>>(this.Url+"/"+id);
  }
  updateCurso(curso:Curso){
     return this.http.put<Response<Curso>>(this.Url+"/"+curso.id,curso, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  deleteCurso(curso:Curso){
    return this.http.delete<Response<Curso[]>>(this.Url+"/"+curso.id, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  matricularse(matricula:Matricula){
    return this.http.post<Response<boolean>>(this.Url+"/matricularse",matricula, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  agregarDocente(id: number, docente: Usuario) {
    return this.http.post<Response<Curso>>(`${this.Url}/${id}`, docente, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
}
