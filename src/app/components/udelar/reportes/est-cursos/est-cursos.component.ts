import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Modelo/Curso';
import { CursoService } from 'src/app/Service/curso.service';

@Component({
  selector: 'app-est-cursos',
  templateUrl: './est-cursos.component.html',
  styleUrls: ['./est-cursos.component.css']
})
export class ReporteEstCursos implements OnInit {
  cursos:Array<Curso>;
  ready:boolean;

  constructor(private cs: CursoService, private router:Router) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.ready = false;
    this.cs.getCursos().subscribe(r => {
      this.cursos = r.data;
      this.ready = true;
    });
  }
}
