import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';
import { HttpClient } from '@angular/common/http'
import { Facultad } from 'src/app/Modelo/Facultad';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  facultad:Facultad = new Facultad();
  icono: FormData;
  constructor(private router:Router,private service:FacultadService, private http:HttpClient, private fb: FormBuilder,private dialog: MatDialog) { }
  
  facultadForm = this.fb.group({
    nombre: ["", Validators.required],
    color: ["", Validators.required],
    url: ["", Validators.required],
    icono: ["", Validators.required]
  });
 
  ngOnInit(): void {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
  }

  subirIcono(files) {
    this.facultadForm.controls['icono'].setErrors(null);
    let icono = <File>files[0];
    this.icono = new FormData();
    this.icono.append('icono', icono);
    this.icono.append('nombre', this.facultad.nombre);
    this.icono.append('color', this.facultad.color);
    this.icono.append('url', this.facultad.url);
  }

  Guardar(){
    //this.facultad.color = this.facultad.color.substr(1,6);
    this.service.createFacultad(this.icono)
    .subscribe(data=>{
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha agregado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(["gestion/listarFacultades"]);
      });
    })
  }
}
