import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  constructor() {}


  ngOnInit() {
    console.log('AppComponent#ngOnInit');
  }
}
