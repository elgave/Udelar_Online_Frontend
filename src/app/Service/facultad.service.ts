import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Facultad } from "../Modelo/Facultad";
import { UsuarioXFacultad } from '../Modelo/UsuarioXFacultad';
import { Response } from '../Modelo/Response';
@Injectable({
  providedIn: 'root'
})
export class FacultadService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:54403/api/facultad';

  getFacultades(){
    return this.http.get<Response<Facultad[]>>(this.Url);
  }
  createFacultad(facultad:Facultad){
    return this.http.post<Response<Facultad>>(this.Url, facultad);
  }
  getFacultadId(id:number){
    return this.http.get<Response<Facultad>>(this.Url+"/"+id);
  }
  updateFacultad(facultad:Facultad){
     return this.http.put<Response<Facultad>>(this.Url+"/"+facultad.id,facultad);
  }
  deleteFacultad(facultad:Facultad){
    return this.http.delete<Response<Facultad[]>>(this.Url+"/"+facultad.id);
  }
  getUsuariosXFacultad(){
    return this.http.get<Response<UsuarioXFacultad[]>>(this.Url+"/usuariosXFacultad");
  }
}
