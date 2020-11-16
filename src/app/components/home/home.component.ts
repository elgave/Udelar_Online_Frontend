import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facultades: Array<Facultad>;
  ready: boolean;

  constructor(private http: HttpClient, private router: Router, private fs: FacultadService) {
    this.ready = false;
    this.fs.getFacultades().subscribe(r => {
      this.facultades = r.data;
      this.ready = true;
    });
  }  

  ngOnInit(): void {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'usuario') this.router.navigateByUrl(`facultad/${sessionStorage.getItem('facultadUrl')}`)
  }

  redirect(facultad: Facultad) {
    this.router.navigateByUrl(`facultad/${facultad.url}`);
  }
}
