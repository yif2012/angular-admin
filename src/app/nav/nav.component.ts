import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  menu: Boolean;

  menuArr: Menu[];
  constructor(private router: Router) {
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
        url: '/home/tutorial',
        isOpen: false,
        children: false
      },{
        name: '2．英雄编辑器',
        url: '/home/heroEditor',
        isOpen: false,
        children: false
      }]
    },{
      name: '核心知识',
      url: '',
      isOpen: false,
      children: [{
        name: '架构',
        url: '/home/architecture',
        isOpen: false,
        children: false
      },{
        name: '模板与数据绑定',
        url: '',
        isOpen: false,
        children: [{
          name: '显示数据',
          url: '/home/displayingData'
        }]
      }]
    }];
  }
  ngOnInit() {
    const currentUrl = this.router.routerState.snapshot.url;
    for (let i = 0; i < this.menuArr.length; i++) {
      const menu = this.menuArr[i];
      if (menu.children) {
        for (let j = 0; j < menu.children.length; j++) {
          if (menu.children[j].url === currentUrl) {
            this.menuArr[i].isOpen = true;
            break;
          }
        }
      }
    }
  }
  toggleMenu(menu) {
    menu.isOpen = !menu.isOpen;
  }
}

class Menu {
  name: string;
  url: string;
  isOpen: boolean;
  children: any;
}
