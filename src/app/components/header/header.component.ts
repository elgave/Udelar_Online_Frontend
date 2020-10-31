import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  textColor: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
