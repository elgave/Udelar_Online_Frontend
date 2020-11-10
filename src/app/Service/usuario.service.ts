import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Usuario } from '../Modelo/Usuario';
import { Response } from '../Modelo/Response';
import * as env from 'src/env';
import { LoginUser } from '../Modelo/LoginUser';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http:HttpClient) { }

  Url=`${env.apiurl}/api/usuario`;
  UrlAdmin=`${env.apiurl}/api/udelaradmin`;

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
    return this.http.post<Response<Usuario[]>>(this.Url, usuario, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  getUsuarioId(cedula:string,facultadId:number/*,tipo:string*/){
    return this.http.get<Response<Usuario>>(`${this.Url}/${cedula}/${facultadId}`);
  }
  updateUsuario(usuario:Usuario){
     return this.http.put<Response<Usuario>>(this.Url, usuario, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Response<Usuario[]>>(`${this.Url}/${usuario.cedula}/${usuario.facultadId}`, {headers: {'Authorization': ` Bearer ${sessionStorage.getItem('admintoken')}`}});
  }

  login(usuario: LoginUser) {
    return this.http.post<Response<string>>(`${this.Url}/login`, usuario);
  }

  adminLogin(usuarioLogin) {
    return this.http.post<Response<string>>(`${this.UrlAdmin}/login`, usuarioLogin);
  }
}
