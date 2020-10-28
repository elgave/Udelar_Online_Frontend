import { Injectable } from '@angular/core';
import { Carrera } from '../Modelo/Carrera';
import {HttpClient} from '@angular/common/http';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:54403/api/carrera';

  getCarreras(){
    return this.http.get<Response<Carrera[]>>(this.Url);
  }
  createCarrera(carrera:Carrera){
    return this.http.post<Response<Carrera[]>>(this.Url, carrera);
  }
  getCarreraId(id:number){
    return this.http.get<Response<Carrera>>(this.Url+"/"+id);
  }

  updateCarrera(carrera:Carrera){
     return this.http.put<Response<Carrera>>(this.Url+"/"+carrera.id,carrera);
  }
  deleteCarrera(carrera:Carrera){
    return this.http.delete<Response<Carrera[]>>(this.Url+"/"+carrera.id);
  }
}
