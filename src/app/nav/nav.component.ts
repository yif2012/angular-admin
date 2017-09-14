import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  menu: Boolean;

  menuArr: Menu[];
  constructor() { 
    this.menuArr = [{
      name: '快速上手',
      url: '/home/gettingStarted',
      isOpen: false,
      children: false
    },{
      name: '教程',
      url: '',
      isOpen: false,
      children: [{
        name: '1．简介',
        url: '/home/tutorial'
      },{
        name: '2．英雄编辑器',
        url: '/home/heroEditor'        
      }]
    }]
  }
  ngOnInit() {
  }
  toggleMenu(e, menu) {
    menu.isOpen = !menu.isOpen
  }
}

class Menu {
  name: string;
  url: string;
  isOpen: boolean;
  children: any;
}
