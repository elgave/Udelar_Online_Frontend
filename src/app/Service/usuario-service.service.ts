import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../Modelo/Usuario';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:54403/api/usuario';

  getUsuarios(){
    return this.http.get<Response<Usuario[]>>(this.Url);
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Response<Usuario[]>>(this.Url, usuario);
  }
  getUsuarioId(cedula:String,facultadId:number/*,tipo:String*/){
    return this.http.get<Response<Usuario>>(this.Url+"/"+cedula+"/"+facultadId);
  }
  updateUsuario(usuario:Usuario){
     return this.http.put<Response<Usuario>>(this.Url+"/",usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Response<Usuario[]>>(this.Url+"/"+usuario.cedula+"/"+usuario.facultadId);
  }
}
