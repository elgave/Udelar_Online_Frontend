import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  success: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.success = data.success;
  }

  ngOnInit(): void {
  }
}
