import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  type: Boolean = true;
  routerUlr: string;
  constructor(public router: Router) { }
  ngOnInit() {
    
  }
  typeHandler(e) {
    this.type = !this.type;
  }
}
