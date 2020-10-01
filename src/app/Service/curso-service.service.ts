import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Curso } from '../Modelo/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  constructor(private http:HttpClient) { }

  Url='/entregaindividualapi/curso';

  getCursos(){
    return this.http.get<Curso[]>(this.Url);
  }
  createCurso(curso:Curso){
    return this.http.post<Curso>(this.Url, curso);
  }
  getCursoId(id:number){
    return this.http.get<Curso>(this.Url+"/"+id);
  }

  updateCurso(curso:Curso){
     return this.http.put<Curso>(this.Url+"/"+curso.id,curso);
  }
  deleteCurso(curso:Curso){
    return this.http.delete<Curso>(this.Url+"/"+curso.id);
  }
}
