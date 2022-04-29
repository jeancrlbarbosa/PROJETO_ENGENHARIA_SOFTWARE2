import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input, ViewChild, AfterContentInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
	  private router: Router
    ) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
