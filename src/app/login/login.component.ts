import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';

import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = new UserInfo();
  alertInfo: AlertInfo = new AlertInfo();
  constructor(private router: Router, private http: Http, private service: ServiceService) { }

  ngOnInit() {
    console.log(this.service)
  }
  login() {
    if (!this.userInfo.username) {
      this.alertInfo = { show: true, type: 'danger', msg: '用户名不能为空！', time: 0 };
      return;
    }
    if (!this.userInfo.password) {
      this.alertInfo = { show: true, type: 'danger', msg: '密码不能为空！', time: 0 };
      return;
    }
    this.alertInfo.show = false;
    const url = 'http://localhost:1234/login';
    const data = {username: this.userInfo.username, password: this.userInfo.password};
    this.http.post(url, data).toPromise().then(response => {
      const res: Code = response.json() as Code;
      if (res.code === 666) {
        this.service.isLogin = true;
        this.router.navigate(['home']);
      } else {
        this.alertInfo = { show:true, type: 'danger', msg: res.status, time: 0 };
      }
    })
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

class Code {
  code: number;
  status: string;
}
