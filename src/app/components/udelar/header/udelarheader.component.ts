import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AddEncuestaComponent} from 'src/app/components/facultad/encuesta/add-encuesta/add-encuesta.component'
import {ListEncuestaComponent} from 'src/app/components/facultad/encuesta/list-encuesta/list-encuesta.component'
@Component({
  selector: 'app-udelarheader',
  templateUrl: './udelarheader.component.html',
  styleUrls: ['./udelarheader.component.css']
})
export class UdelarHeaderComponent implements OnInit {
  constructor(private router: Router,private dialog: MatDialog) { }

  textColor: string;

  ngOnInit(): void {
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  addEncuesta() {
    this.dialog.open(AddEncuestaComponent, {
      width: '540px',
      maxHeight: '600px'
    });
  }

  listEncuesta() {
    this.dialog.open(ListEncuestaComponent, {
      width: '600px',
      maxHeight: '600px'
    });
  }
}
