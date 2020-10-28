import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './UdelarComponentes/Facultad/listar/listar.component';
import { AddComponent } from './UdelarComponentes/Facultad/add/add.component';
import { EditComponent } from './UdelarComponentes/Facultad/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FacultadService} from './Service/facultad.service'
import {HttpClientModule} from '@angular/common/http';
import { AddCarreraComponent } from './UdelarComponentes/Carrera/add-carrera/add-carrera.component';
import { ListarCarreraComponent } from './UdelarComponentes/Carrera/listar-carrera/listar-carrera.component';
import { EditCarreraComponent } from './UdelarComponentes/Carrera/edit-carrera/edit-carrera.component';
import { AddUsuarioComponent } from './UdelarComponentes/Usuario/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './UdelarComponentes/Usuario/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './UdelarComponentes/Usuario/edit-usuario/edit-usuario.component';
import { ListarCursoComponent } from './UdelarComponentes/Curso/listar-curso/listar-curso.component';
import { AddCursoComponent } from './UdelarComponentes/Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './UdelarComponentes/Curso/edit-curso/edit-curso.component';
import { UsuariosXFacultadReporteComponent } from './ModuloUdelar/Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddCarreraComponent,
    ListarCarreraComponent,
    EditCarreraComponent,
    AddUsuarioComponent,
    ListarUsuarioComponent,
    EditUsuarioComponent,
    ListarCursoComponent,
    AddCursoComponent,
    EditCursoComponent,
    UsuariosXFacultadReporteComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FacultadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
