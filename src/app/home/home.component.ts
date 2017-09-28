import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  type: Boolean = true;
  routerUlr: string;
  constructor(public router: Router, private service: ServiceService) { }
  ngOnInit() {
    console.log(this.service)
  }
  typeHandler(e) {
    this.type = !this.type;
  }
}
