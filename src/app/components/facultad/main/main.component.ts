import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/Modelo/Response';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainFacultadComponent implements OnInit {
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  curso: Curso;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }  

  ngOnInit(): void {
    if (!sessionStorage.getItem('rol') || !sessionStorage.getItem('token')) this.router.navigateByUrl(`login/${this.fUrl}`);
    this.http.get<Response<Facultad>>(`http://localhost:54403/api/facultad/${sessionStorage.getItem('facultadId')}`).subscribe(data => {
      this.facultad = data.data;
      this.facultad.cursos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      if (this.route.snapshot.paramMap.get('cursoId')) {
        this.isCurso = true;
        this.curso = this.facultad.cursos.find(c => c.id == parseInt(this.route.snapshot.paramMap.get('cursoId')));
      } else {
        this.isCurso = false;
        this.curso = {id: 999, nombre: 'placeholder', facultadId: 999, cantCreditos: 999, usuarios: []};//new Curso(0, "placeholder", 999, 999);
      }
    });
    this.rol = sessionStorage.getItem('rol');
  }
}
