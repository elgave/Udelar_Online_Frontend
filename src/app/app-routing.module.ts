import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Facultad/listar/listar.component';
import { AddComponent } from './Facultad/add/add.component';
import { EditComponent } from './Facultad/edit/edit.component';
import {ListarCarreraComponent} from './Carrera/listar-carrera/listar-carrera.component';
import {AddCarreraComponent} from './Carrera/add-carrera/add-carrera.component';
import {EditCarreraComponent} from './Carrera/edit-carrera/edit-carrera.component';
import { ListarUsuarioComponent } from './Usuario/listar-usuario/listar-usuario.component';
import { AddUsuarioComponent } from './Usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './Usuario/edit-usuario/edit-usuario.component';
import { AddCursoComponent } from './Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './Curso/edit-curso/edit-curso.component';
import { ListarCursoComponent } from './Curso/listar-curso/listar-curso.component';
import { UsuariosXFacultadReporteComponent } from './Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';


const routes: Routes = [
  {path:'listarFacultades',component:ListarComponent},
  {path:'addFacultad',component:AddComponent},
  {path:'editFacultad',component:EditComponent},
  {path:'listarCarreras',component:ListarCarreraComponent},
  {path:'addCarrera',component:AddCarreraComponent},
  {path:'editCarrera',component:EditCarreraComponent},
  {path:'listarUsuarios',component:ListarUsuarioComponent},
  {path:'addUsuario',component:AddUsuarioComponent},
  {path:'editUsuario',component:EditUsuarioComponent},
  {path:'listarCursos',component:ListarCursoComponent},
  {path:'addCurso',component:AddCursoComponent},
  {path:'editCurso',component:EditCursoComponent},
  {path:'listarUsuariosXFacultad', component:UsuariosXFacultadReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
