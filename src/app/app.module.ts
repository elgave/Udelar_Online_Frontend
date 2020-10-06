import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Facultad/listar/listar.component';
import { AddComponent } from './Facultad/add/add.component';
import { EditComponent } from './Facultad/edit/edit.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/Service/service.service'
import {HttpClientModule} from '@angular/common/http';
import { AddCarreraComponent } from './Carrera/add-carrera/add-carrera.component';
import { ListarCarreraComponent } from './Carrera/listar-carrera/listar-carrera.component';
import { EditCarreraComponent } from './Carrera/edit-carrera/edit-carrera.component';
import { AddUsuarioComponent } from './Usuario/add-usuario/add-usuario.component';
import { ListarUsuarioComponent } from './Usuario/listar-usuario/listar-usuario.component';
import { EditUsuarioComponent } from './Usuario/edit-usuario/edit-usuario.component';
import { ListarCursoComponent } from './Curso/listar-curso/listar-curso.component';
import { AddCursoComponent } from './Curso/add-curso/add-curso.component';
import { EditCursoComponent } from './Curso/edit-curso/edit-curso.component';
import { UsuariosXFacultadReporteComponent } from './Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
