import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../Modelo/Usuario';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:54403/api/usuario';

  getUsuarios(){

    let httpHeaders: HttpHeaders = new  HttpHeaders();
    const token = sessionStorage.getItem('token');
    console.log('get token', token); 

    httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);


    return this.http.get<Response<Usuario[]>>(this.Url,{
      headers: httpHeaders,
      observe: 'response'
    });
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
