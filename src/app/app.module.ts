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
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FacultadFooterComponent } from './components/facultad/footer/footer.component';
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
import { EditComponenteComponent } from './components/facultad/curso/componente/edit-componente/edit-componente.component';
import { DeleteComponenteComponent } from './components/facultad/curso/componente/delete-componente/delete-componente.component';
import { EditSeccionComponent } from './components/facultad/curso/seccion/edit-seccion/edit-seccion.component';
import { DeleteSeccionComponent } from './components/facultad/curso/seccion/delete-seccion/delete-seccion.component';
import { RenombrarCursoComponent } from './components/facultad/curso/editar/renombrar-curso/renombrar-curso.component';
import { AddDocenteComponent } from './components/facultad/curso/editar/add-docente/add-docente.component';
import { AddEncuestaComponent } from './components/facultad/encuesta/add-encuesta/add-encuesta.component';
import { ListEncuestaComponent } from './components/facultad/encuesta/list-encuesta/list-encuesta.component';
import { AgregarCursoComponent } from './components/facultad/curso/editar/add-curso/add-curso.component';
import { AgregarUsuarioComponent } from './components/usuarios/agregar-usuario/agregar-usuario.component';
import { AdminMenuComponent } from './components/facultad/admin-menu/admin-menu.component';
import { CambiarColorComponent } from './components/facultad/admin-menu/cambiar-color/cambiar-color.component';
import { ListUsuariosComponent } from './components/facultad/curso/list-usuarios/list-usuarios.component';
import { EstadisticaComponent } from './components/facultad/admin-menu/estadistica/estadistica.component';
import { InfoCursosComponent } from './components/facultad/admin-menu/info-cursos/info-cursos.component';
import { AddTemplateComponent } from './components/facultad/admin-menu/add-template/add-template.component';
import { AddSeccionTemplateComponent } from './components/facultad/admin-menu/add-seccion-template/add-seccion-template.component';
import { ListSeccionTemplateComponent } from './components/facultad/admin-menu/list-seccion-template/list-seccion-template.component';
import { ListTemplateComponent } from './components/facultad/admin-menu/list-template/list-template.component';
import { EditTemplateComponent } from './components/facultad/admin-menu/edit-template/edit-template.component';
import { EditSeccionTemplateComponent } from './components/facultad/admin-menu/edit-seccion-template/edit-seccion-template.component';
import { ResponderEncuestaComponent } from './components/facultad/encuesta/responder-encuesta/responder-encuesta.component';
import { RespuestasEncuestaComponent } from './components/facultad/encuesta/respuestas-encuesta/respuestas-encuesta.component';
import { PublicarEncuestaComponent } from './components/facultad/encuesta/publicar-encuesta/publicar-encuesta.component';
import { AddCalificacionComponent } from './components/facultad/curso/add-calificacion/add-calificacion.component';
import { MisNotasComponent } from './components/facultad/mis-notas/mis-notas.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddNovedadComponent } from './components/facultad/add-novedad/add-novedad.component';
import { AddEntregaTareaComponent } from './components/facultad/curso/entregaTarea/add-entrega-tarea/add-entrega-tarea.component';

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
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainFacultadComponent,
    HeaderComponent,
    FacultadFooterComponent,
    CursoComponent,
    ReporteFacultades,
    ReporteCursos,
    ReporteEstFacultades,
    ReporteEstCursos,
    LoadingComponent,
    AddSeccionComponent,
    AddComponenteComponent,
    EditComponenteComponent,
    DeleteComponenteComponent,
    EditSeccionComponent,
    DeleteSeccionComponent,
    RenombrarCursoComponent,
    AddDocenteComponent,
    AddEncuestaComponent,
    ListEncuestaComponent,
    AgregarCursoComponent,
    AgregarUsuarioComponent,
    AdminMenuComponent,
    CambiarColorComponent,
    ListUsuariosComponent,
    EstadisticaComponent,
    InfoCursosComponent,
    AddTemplateComponent,
    AddSeccionTemplateComponent,
    ListSeccionTemplateComponent,
    ListTemplateComponent,
    EditTemplateComponent,
    EditSeccionTemplateComponent,
    ResponderEncuestaComponent,
    RespuestasEncuestaComponent,
    PublicarEncuestaComponent,
    AddCalificacionComponent,
    MisNotasComponent,
    AlertComponent,
    AddNovedadComponent,
    AddEntregaTareaComponent
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
