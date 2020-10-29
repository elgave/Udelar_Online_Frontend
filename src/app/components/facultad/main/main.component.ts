import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/Modelo/Response';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainFacultadComponent implements OnInit {
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }  

  ngOnInit(): void {
    //this.fUrl = this.route.snapshot.paramMap.get('fUrl');
    if (!sessionStorage.getItem('rol') || !sessionStorage.getItem('token')) this.router.navigateByUrl(`login/${this.fUrl}`);
    this.http.get<Response<Facultad>>(`http://localhost:54403/api/facultad/${sessionStorage.getItem('facultadId')}`).subscribe(data => {
      this.facultad = data.data;
    });
    this.rol = sessionStorage.getItem('rol');
  }
}
