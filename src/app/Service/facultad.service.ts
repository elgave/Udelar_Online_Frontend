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

  createFacultad(datos:FormData){
    return this.http.post<Response<Facultad>>(this.Url, datos, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  getFacultadId(id:number){
    return this.http.get<Response<Facultad>>(this.Url+'/'+id);
  }
  updateFacultad(facultad:Facultad){
     return this.http.put<Response<Facultad>>(this.Url+'/'+facultad.id,facultad, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  deleteFacultad(facultad:Facultad){
    return this.http.delete<Response<Facultad[]>>(this.Url+'/'+facultad.id, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  getUsuariosXFacultad(){
    return this.http.get<Response<UsuarioXFacultad[]>>(this.Url+'/usuariosXFacultad');
  }

  publicarNovedad(novedad:any) {
    return this.http.post<Response<any>>(`${this.Url}/novedad/`, novedad, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('token')}`}});
  }
  getNovedades(id:number){
    return this.http.get<Response<any[]>>(`${this.Url}/novedad/${id}`);
  }
 }
