import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { UsuariosXFacultadReporteComponent } from './ModuloUdelar/Reportes/usuarios-xfacultad-reporte/usuarios-xfacultad-reporte.component';
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
    UsuariosXFacultadReporteComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainFacultadComponent,
    HeaderComponent,
    FacultadHeaderComponent,
    FacultadFooterComponent,
    FacultadSidebarComponent,
    CursoComponent
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
