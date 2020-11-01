import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-udelarheader',
  templateUrl: './udelarheader.component.html',
  styleUrls: ['./udelarheader.component.css']
})
export class UdelarHeaderComponent implements OnInit {
  constructor(private router: Router) { }

  textColor: string;

  ngOnInit(): void {
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
