import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facultades: Array<Facultad>;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<any>('http://localhost:54403/api/facultad/').subscribe(data => {
      this.facultades = data.data;
    });
  }  

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) this.router.navigateByUrl(`facultad/${sessionStorage.getItem('facultadUrl')}`)
  }

  redirect(facultad: Facultad) {
    this.router.navigateByUrl(`facultad/${facultad.url}`);
  }
}
