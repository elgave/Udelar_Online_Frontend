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
import { UsuariosXFacultadReporteComponent } from './ModuloUdelar/Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainFacultadComponent } from './components/facultad/main/main.component';
import { GestionComponent } from './components/udelar/gestion.component';
import { AdminLoginComponent } from './components/udelar/login/login.component';


const routes: Routes = [
  //! {path: 'home', component: EstudianteHome },
  //! {path: 'docente/home', component: DocenteHome },
  //! {path: 'backoffice/home', component: BackoffiHome },
  //! {path: '', component: ListaFacultades },
  {path: 'gestion', component: GestionComponent},
  {path: 'gestion/login', component: AdminLoginComponent},
  {path: 'facultad/:fUrl', component: MainFacultadComponent},
  {path: 'facultad/:fUrl/curso/:cursoId', component: MainFacultadComponent},
  {path: 'listarFacultades',component:ListarComponent},
  {path: 'addFacultad',component:AddComponent},
  {path: 'editFacultad',component:EditComponent},
  {path: 'listarUsuarios',component:ListarUsuarioComponent},
  {path: 'addUsuario',component:AddUsuarioComponent},
  {path: 'editUsuario',component:EditUsuarioComponent},
  {path: 'listarCursos',component:ListarCursoComponent},
  {path: 'addCurso',component:AddCursoComponent},
  {path: 'editCurso',component:EditCursoComponent},
  {path: 'listarUsuariosXFacultad', component:UsuariosXFacultadReporteComponent},
  {path: 'login/:fUrl', component:LoginComponent},
  {path: '', component: HomeComponent },
  {path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
