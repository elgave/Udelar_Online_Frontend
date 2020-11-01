import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as env from 'src/env';
import { FacultadService } from 'src/app/Service/facultad.service'
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-facultadheader',
  templateUrl: './facultadheader.component.html',
  styleUrls: ['./facultadheader.component.css']
})
export class FacultadHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private fs: FacultadService) { }
  textColor: string;
  mainColor: string;
  facultad: Facultad;
  facultadNombre: string;
  currentEnv = env;
  fUrl = this.route.snapshot.paramMap.get('fUrl');

  ngOnInit(): void {
    this.mainColor = sessionStorage.getItem('mainColor');
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
    this.facultadNombre = sessionStorage.getItem('facultadNombre');
    this.fs.getFacultadId(parseInt(sessionStorage.getItem('facultadId'))).subscribe(r => this.facultad = r.data);
  }

  home() {
    this.router.navigateByUrl(`/facultad/${this.fUrl}`);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
