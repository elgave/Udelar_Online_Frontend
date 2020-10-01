import { Injectable } from '@angular/core';
import { Carrera } from '../Modelo/Carrera';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarreraServiceService {

  constructor(private http:HttpClient) { }

  Url='/entregaindividualapi/carrera';

  getCarreras(){
    return this.http.get<Carrera[]>(this.Url);
  }
  createCarrera(carrera:Carrera){
    return this.http.post<Carrera>(this.Url, carrera);
  }
  getCarreraId(id:number){
    return this.http.get<Carrera>(this.Url+"/"+id);
  }

  updateCarrera(carrera:Carrera){
     return this.http.put<Carrera>(this.Url+"/"+carrera.id,carrera);
  }
  deleteCarrera(carrera:Carrera){
    return this.http.delete<Carrera>(this.Url+"/"+carrera.id);
  }
}
