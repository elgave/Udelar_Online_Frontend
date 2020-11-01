import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  textColor: string;
  facultad: Facultad;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
  }

  gestion() {
    this.router.navigateByUrl(`/gestion`);
  }
}
