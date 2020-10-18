import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) { }

  Url='/entregaindividualapi/usuario';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }
  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.Url, usuario);
  }
  getUsuarioId(cedula:String,facultadId:number){
    return this.http.get<Usuario>(this.Url+"/"+cedula+"/"+facultadId);
  }

  updateUsuario(usuario:Usuario){
     return this.http.put<Usuario>(this.Url+"/",usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.Url+"/"+usuario.cedula+"/"+usuario.facultadId);
  }
}
