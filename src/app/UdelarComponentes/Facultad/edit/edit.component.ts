import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultadService } from 'src/app/Service/facultad.service';
import { Facultad } from 'src/app/Modelo/Facultad';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  facultad:Facultad = new Facultad();
  constructor(private router:Router,private service:FacultadService, private fb: FormBuilder,private dialog: MatDialog) { }

  facultadForm = this.fb.group({
    nombre: ["", Validators.required],
    color: ["", Validators.required],
    url: ["", Validators.required]
  });
 

  ngOnInit(): void {
    if (!(sessionStorage.getItem('token') && sessionStorage.getItem('tipoSesion') == 'udelar')) this.router.navigateByUrl('gestion/login');
    this.Editar();
  }

  Editar(){
    let id= localStorage.getItem("id");
    this.service.getFacultadId(+id)
    .subscribe(data=>{
      this.facultad=data.data;
    })
  }

  Actualizar(facultad:Facultad){
    this.service.updateFacultad(facultad)
    .subscribe(data=>{
      this.facultad = data.data;
      let dialogRef = this.dialog.open(AlertComponent, {
        maxWidth: '540px',
        maxHeight: '350px',
        data: { success: "Se ha actualizado correctamente." }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(["gestion/listarFacultades"]);
      });
    })
  }
}

