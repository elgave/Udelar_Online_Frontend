import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FacultadService } from 'src/app/Service/facultad.service';
import * as env from 'src/env';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  styleUrls: ['./facultades.component.css']
})
export class ReporteFacultades implements OnInit {
  facultades:Array<Facultad>;
  ready:boolean;
  currentEnv = env;

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
