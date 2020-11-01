import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facultadheader',
  templateUrl: './facultadheader.component.html',
  styleUrls: ['./facultadheader.component.css']
})
export class FacultadHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  textColor: string;
  mainColor: string;
  facultadNombre: string;
  fUrl = this.route.snapshot.paramMap.get('fUrl');

  ngOnInit(): void {
    this.mainColor = sessionStorage.getItem('mainColor');
    this.textColor = sessionStorage.getItem('lightness') == 'light' ? 'black':'white';
    this.facultadNombre = sessionStorage.getItem('facultadNombre');
  }

  home() {
    this.router.navigateByUrl(`/facultad/${this.fUrl}`);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
