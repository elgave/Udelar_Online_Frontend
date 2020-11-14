import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as env from 'src/env';
import { FacultadService } from 'src/app/Service/facultad.service'
import { Facultad } from 'src/app/Modelo/Facultad';
import { Location } from '@angular/common';

@Component({
  selector: 'app-facultadheader',
  templateUrl: './facultadheader.component.html',
  styleUrls: ['./facultadheader.component.css']
})
export class FacultadHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private fs: FacultadService, private location: Location) { }
  textColor: string;
  mainColor: string;
  facultadNombre: string;
  currentEnv = env;
  fUrl = this.route.snapshot.paramMap.get('fUrl');

  ngOnInit(): void {
    this.mainColor = sessionStorage.getItem('mainColor');
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
    this.facultadNombre = sessionStorage.getItem('facultadNombre');
  }

  home() {
    this.location.go(`/facultad/${this.fUrl}`);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
