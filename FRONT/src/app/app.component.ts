import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function createServer():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'win-app';
  constructor(
    ) {

  }

  ngOnInit() {
  }

}
