import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/Modelo/Response';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-facultadsidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class FacultadSidebarComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  facultad: Facultad;

  ngOnInit(): void {
    this.http.get<Response<Facultad>>(`http://localhost:54403/api/facultad/${sessionStorage.getItem('facultadId')}`).subscribe(data => {
      this.facultad = data.data;
      this.facultad.cursos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
    });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
