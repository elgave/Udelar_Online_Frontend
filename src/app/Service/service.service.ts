import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Facultad } from "../Modelo/Facultad";
import { UsuarioXFacultad } from '../Modelo/UsuarioXFacultad';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='/entregaindividualapi/facultad';

  getFacultades(){
    return this.http.get<Facultad[]>(this.Url);
  }
  createFacultad(facultad:Facultad){
    return this.http.post<Facultad>(this.Url, facultad);
  }
  getFacultadId(id:number){
    return this.http.get<Facultad>(this.Url+"/"+id);
  }

  updateFacultad(facultad:Facultad){
     return this.http.put<Facultad>(this.Url+"/"+facultad.id,facultad);
  }
  deleteFacultad(facultad:Facultad){
    return this.http.delete<Facultad>(this.Url+"/"+facultad.id);
  }
  getUsuariosXFacultad(){
    return this.http.get<UsuarioXFacultad[]>(this.Url+"/usuariosXFacultad");
  }
}
