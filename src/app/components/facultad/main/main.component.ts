import { FacultadService } from 'src/app/Service/facultad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Curso } from 'src/app/Modelo/Curso';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainFacultadComponent implements OnInit {
  facultad: Facultad;
  fUrl: string = this.route.snapshot.paramMap.get('fUrl');
  rol: string;
  isCurso: boolean;
  isAddEncuesta: boolean;
  isListEncuesta:boolean;
  curso: Curso;
  ready: boolean;
  property: string;
  cursoId: number;
  mostrarCursos: Curso[];
  isMisCursos: boolean;
  botonTexto: string;

  constructor(private router: Router, private route: ActivatedRoute, private fs: FacultadService, private scroll: ViewportScroller) { }  

  ngOnInit(): void {
    this.isMisCursos = false;
    this.botonTexto = "Mis cursos";
    this.ready = false;
    if (!sessionStorage.getItem('rol') || !sessionStorage.getItem('token')) this.router.navigateByUrl(`login/${this.fUrl}`);
    this.fs.getFacultadId(parseInt(sessionStorage.getItem('facultadId'))).subscribe(data => {
      this.facultad = data.data;
      this.facultad.cursos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
      this.mostrarCursos = this.facultad.cursos;
      this.rol = sessionStorage.getItem('rol');
      if (this.rol == 'docente') {
        this.mostrarCursos = this.facultad.cursos.filter(c => c.docentes.find(d => d.cedula == sessionStorage.getItem('cedula')));
      }
      if (this.route.snapshot.paramMap.get('cursoId')) {
        this.isCurso = true;
      } else {
        this.isCurso = false;
      }

      if (this.route.snapshot.paramMap.get('accion') == "add"){
        this.isAddEncuesta = true;
      }else{
        this.isAddEncuesta = false;
      }

      if (this.route.snapshot.paramMap.get('accion') == "list"){
        this.isListEncuesta = true;
      }else{
        this.isListEncuesta = false;
      }

      this.ready = true;
    });
    this.rol = sessionStorage.getItem('rol');
  }

  change(cursoId) {
    this.cursoId = cursoId;
    this.scroll.scrollToPosition([0,0]);
  }

  toggleCursos() {
    this.isMisCursos = !this.isMisCursos;
    if (this.isMisCursos) {
      this.botonTexto = "Todos los cursos";
      this.mostrarCursos = this.facultad.cursos.filter(c => c.usuarios.some(u => u.cedula == sessionStorage.getItem('cedula')));
    }
    else {
      this.botonTexto = "Mis cursos";
      this.mostrarCursos = this.facultad.cursos;
    }
  }
  /*
  change2() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/facultad/"+sessionStorage.getItem('facultadUrl')+"/encuesta/list"]));
  }*/
}