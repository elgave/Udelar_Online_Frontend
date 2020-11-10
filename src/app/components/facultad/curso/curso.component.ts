import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/Service/curso.service'
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import { Usuario } from 'src/app/Modelo/Usuario';
import * as env from 'src/env';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  curso: Curso;
  @Input() cursoId: number;
  currentEnv = env;
  constructor(private router: Router, private route: ActivatedRoute, private cs: CursoService) { }  

  ngOnInit(): void {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
    });
  }

  ngOnChanges() {
    this.cs.getCursoId(parseInt(this.route.snapshot.paramMap.get('cursoId'))).subscribe(r => {
      this.curso = r.data;
      this.curso.secciones.sort((a, b) => a.indice > b.indice ? 1 : -1);
    }); 
  }
}
