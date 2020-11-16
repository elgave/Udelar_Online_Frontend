import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './UdelarComponentes/Facultad/listar/listar.component';
import { AddComponent } from './UdelarComponentes/Facultad/add/add.component';
import { EditComponent } from './UdelarComponentes/Facultad/edit/edit.component';
import { ListarUsuarioComponent } from './UdelarComponentes/Usuario/listar-usuario/listar-usuario.component';
import { AddUsuarioComponent } from './UdelarComponentes/Usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './UdelarComponentes/Usuario/edit-usuario/edit-usuario.component';
import { AddCursoComponent } from './UdelarComponentes/Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './UdelarComponentes/Curso/edit-curso/edit-curso.component';
import { ListarCursoComponent } from './UdelarComponentes/Curso/listar-curso/listar-curso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainFacultadComponent } from './components/facultad/main/main.component';
import { GestionComponent } from './components/udelar/gestion.component';
import { AdminLoginComponent } from './components/udelar/login/login.component';
import { ReporteFacultades } from './components/udelar/reportes/facultades/facultades.component';
import { ReporteCursos } from './components/udelar/reportes/cursos/cursos.component';
import { ReporteEstFacultades } from './components/udelar/reportes/est-facultades/est-facultades.component';
import { ReporteEstCursos } from './components/udelar/reportes/est-cursos/est-cursos.component';

const routes: Routes = [
  {path: 'gestion', component: GestionComponent},
  {path: 'gestion/login', component: AdminLoginComponent},
  {path: 'facultad/:fUrl', component: MainFacultadComponent},
  {path: 'facultad/:fUrl/curso/:cursoId', component: MainFacultadComponent},
  {path: 'facultad/:fUrl/encuesta/:accion', component: MainFacultadComponent},
  {path: 'gestion/listarFacultades',component:ListarComponent},
  {path: 'gestion/addFacultad',component:AddComponent},
  {path: 'gestion/editFacultad',component:EditComponent},
  {path: 'gestion/listarUsuarios',component:ListarUsuarioComponent},
  {path: 'gestion/addUsuario',component:AddUsuarioComponent},
  {path: 'gestion/editUsuario',component:EditUsuarioComponent},
  {path: 'gestion/listarCursos',component:ListarCursoComponent},
  {path: 'gestion/addCurso',component:AddCursoComponent},
  {path: 'gestion/editCurso',component:EditCursoComponent},
  {path: 'gestion/reportes/facultades', component:ReporteFacultades},
  {path: 'gestion/reportes/cursos', component:ReporteCursos},
  {path: 'gestion/reportes/estFacultades', component:ReporteEstFacultades},
  {path: 'gestion/reportes/estCursos', component:ReporteEstCursos},
  {path: 'login/:fUrl', component:LoginComponent},
  {path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
