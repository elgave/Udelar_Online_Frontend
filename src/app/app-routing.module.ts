import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './UdelarComponentes/Facultad/listar/listar.component';
import { AddComponent } from './UdelarComponentes/Facultad/add/add.component';
import { EditComponent } from './UdelarComponentes/Facultad/edit/edit.component';
import { ListarCarreraComponent } from './UdelarComponentes/Carrera/listar-carrera/listar-carrera.component';
import { AddCarreraComponent } from './UdelarComponentes/Carrera/add-carrera/add-carrera.component';
import { EditCarreraComponent } from './UdelarComponentes/Carrera/edit-carrera/edit-carrera.component';
import { ListarUsuarioComponent } from './UdelarComponentes/Usuario/listar-usuario/listar-usuario.component';
import { AddUsuarioComponent } from './UdelarComponentes/Usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './UdelarComponentes/Usuario/edit-usuario/edit-usuario.component';
import { AddCursoComponent } from './UdelarComponentes/Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './UdelarComponentes/Curso/edit-curso/edit-curso.component';
import { ListarCursoComponent } from './UdelarComponentes/Curso/listar-curso/listar-curso.component';
import { UsuariosXFacultadReporteComponent } from './ModuloUdelar/Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'listarFacultades',component:ListarComponent},
  {path: 'addFacultad',component:AddComponent},
  {path: 'editFacultad',component:EditComponent},
  {path: 'listarCarreras',component:ListarCarreraComponent},
  {path: 'addCarrera',component:AddCarreraComponent},
  {path: 'editCarrera',component:EditCarreraComponent},
  {path: 'listarUsuarios',component:ListarUsuarioComponent},
  {path: 'addUsuario',component:AddUsuarioComponent},
  {path: 'editUsuario',component:EditUsuarioComponent},
  {path: 'listarCursos',component:ListarCursoComponent},
  {path: 'addCurso',component:AddCursoComponent},
  {path: 'editCurso',component:EditCursoComponent},
  {path: 'listarUsuariosXFacultad', component:UsuariosXFacultadReporteComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
