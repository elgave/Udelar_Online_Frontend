import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FacultadService } from 'src/app/Service/facultad.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class ReporteCursos implements OnInit {
  facultades:Array<Facultad>;
  ready:boolean;

  constructor(private fs: FacultadService, private router:Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('admintoken')) this.router.navigateByUrl('gestion/login');
    this.ready = false;
    this.fs.getFacultades().subscribe(r => {
      this.facultades = r.data;
      this.ready = true;
    });
  }
}
