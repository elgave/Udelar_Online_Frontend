import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultadfooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FacultadFooterComponent implements OnInit {

  constructor(private router: Router) { }
  mainColor: string;
  rol:string;

  ngOnInit(): void {
    this.mainColor = sessionStorage.getItem('mainColor');
    this.rol = sessionStorage.getItem('rol');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
