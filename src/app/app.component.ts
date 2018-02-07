import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'yg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}


  ngOnInit() {
    console.log('AppComponent#ngOnInit');
    this.router.initialNavigation();
  }
}
