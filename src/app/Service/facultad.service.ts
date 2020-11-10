import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Facultad } from "../Modelo/Facultad";
import { UsuarioXFacultad } from '../Modelo/UsuarioXFacultad';
import { Response } from '../Modelo/Response';
import * as env from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  constructor(private http:HttpClient) { }

  Url=`${env.apiurl}/api/facultad`;

  getFacultades(){
    return this.http.get<Response<Facultad[]>>(this.Url);
  }

  createFacultad(facultad:Facultad, icono:FormData){
    return this.http.post<Response<Facultad>>(this.Url, icono, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  getFacultadId(id:number){
    return this.http.get<Response<Facultad>>(this.Url+'/'+id);
  }
  updateFacultad(facultad:Facultad){
     return this.http.put<Response<Facultad>>(this.Url+'/'+facultad.id,facultad, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  deleteFacultad(facultad:Facultad){
    return this.http.delete<Response<Facultad[]>>(this.Url+'/'+facultad.id, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  getUsuariosXFacultad(){
    return this.http.get<Response<UsuarioXFacultad[]>>(this.Url+'/usuariosXFacultad');
  }
}
