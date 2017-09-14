import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();
  alertInfo: AlertInfo = new AlertInfo();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!this.userInfo.username) {
      this.alertInfo = { show: true, type: 'danger', msg: '用户名不能为空！', time: 0 };
      return false;
    }
    if (!this.userInfo.password) {
      this.alertInfo = { show: true, type: 'danger', msg: '密码不能为空！', time: 0 };
      return false;
    }
    this.alertInfo.show = false;
    this.router.navigate(['home']);
  }
}

class UserInfo {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}

class AlertInfo {
  show: boolean;
  type: string;
  msg: string;
  time: number;
  constructor() {
    this.show = false;
    this.type = 'success';
    this.time = 0;
  }
}
