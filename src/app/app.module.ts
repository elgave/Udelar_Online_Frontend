import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './UdelarComponentes/Facultad/listar/listar.component';
import { AddComponent } from './UdelarComponentes/Facultad/add/add.component';
import { EditComponent } from './UdelarComponentes/Facultad/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FacultadService } from './Service/facultad.service'
import { HttpClientModule } from '@angular/common/http';
import { AddUsuarioComponent } from './UdelarComponentes/Usuario/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './UdelarComponentes/Usuario/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './UdelarComponentes/Usuario/edit-usuario/edit-usuario.component';
import { ListarCursoComponent } from './UdelarComponentes/Curso/listar-curso/listar-curso.component';
import { AddCursoComponent } from './UdelarComponentes/Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './UdelarComponentes/Curso/edit-curso/edit-curso.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FacultadHeaderComponent } from './components/facultad/header/facultadheader.component';
import { FacultadFooterComponent } from './components/facultad/footer/footer.component';
import { FacultadSidebarComponent } from './components/facultad/sidebar/sidebar.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { MainFacultadComponent } from './components/facultad/main/main.component';
import { GestionComponent } from './components/udelar/gestion.component';
import { UdelarHeaderComponent } from './components/udelar/header/udelarheader.component';
import { AdminLoginComponent } from './components/udelar/login/login.component';
import { CursoComponent } from './components/facultad/curso/curso.component';
import { ReporteFacultades } from './components/udelar/reportes/facultades/facultades.component';
import { ReporteCursos } from './components/udelar/reportes/cursos/cursos.component';
import { ReporteEstFacultades } from './components/udelar/reportes/est-facultades/est-facultades.component';
import { ReporteEstCursos } from './components/udelar/reportes/est-cursos/est-cursos.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddSeccionComponent } from './components/facultad/curso/seccion/add-seccion/add-seccion.component';
import { AddComponenteComponent } from './components/facultad/curso/componente/add-componente/add-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    GestionComponent,
    UdelarHeaderComponent,
    AdminLoginComponent,
    AddComponent,
    EditComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    ListarCursoComponent,
    AddCursoComponent,
    EditCursoComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainFacultadComponent,
    HeaderComponent,
    FacultadHeaderComponent,
    FacultadFooterComponent,
    FacultadSidebarComponent,
    CursoComponent,
    ReporteFacultades,
    ReporteCursos,
    ReporteEstFacultades,
    ReporteEstCursos,
    LoadingComponent,
    AddSeccionComponent,
    AddComponenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [FacultadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
